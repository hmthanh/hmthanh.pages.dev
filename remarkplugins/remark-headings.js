import Slugger from "github-slugger";
import { visit } from "unist-util-visit";
import { MARKDOWN_EXTENSION_REGEX } from "./constants.js";
const getFlattenedValue = (node) => node.children
    .map((child) => ("children" in child ? getFlattenedValue(child) : "value" in child ? child.value : ""))
    .join("");
const SKIP_FOR_PARENT_NAMES = new Set(["Tab", "Tabs.Tab"]);
export const remarkHeadings = ({ exportName = "__toc", isRemoteContent, }) => {
    const headings = [];
    let hasJsxInH1;
    let title;
    const slugger = new Slugger();
    return (tree, file, done) => {
        const PartialComponentToHeadingsName = Object.create(null);
        visit(tree, [
            "heading",
            // push partial component's __toc export name to headings list
            "mdxJsxFlowElement",
            // verify .md/.mdx exports and attach named __toc export
            "mdxjsEsm",
        ], (node, _index, parent) => {
            var _a;
            var _b;
            if (node.type === "heading") {
                if (node.depth === 1) {
                    const hasJsx = node.children.some((child) => child.type === "mdxJsxTextElement");
                    if (hasJsx) {
                        hasJsxInH1 = true;
                    }
                    title || (title = getFlattenedValue(node));
                    return;
                }
                node.data || (node.data = {});
                const headingProps = ((_b = node.data).hProperties || (_b.hProperties = {}));
                if (SKIP_FOR_PARENT_NAMES.has(parent.name)) {
                    delete headingProps.id;
                }
                else {
                    const value = getFlattenedValue(node);
                    const id = slugger.slug(headingProps.id || value);
                    // Attach flattened/custom #id to heading node
                    headingProps.id = id;
                    headings.push({ depth: node.depth, value, id });
                }
                return;
            }
            if (isRemoteContent) {
                // skip
            }
            else if (node.type === "mdxjsEsm") {
                for (const child of node.data.estree.body) {
                    if (child.type !== "ImportDeclaration")
                        continue;
                    const importPath = child.source.value;
                    const isMdxImport = MARKDOWN_EXTENSION_REGEX.test(importPath);
                    if (!isMdxImport)
                        continue;
                    const componentName = (_a = child.specifiers.find((o) => o.type === "ImportDefaultSpecifier")) === null || _a === void 0 ? void 0 : _a.local.name;
                    if (!componentName)
                        continue;
                    const { length } = Object.keys(PartialComponentToHeadingsName);
                    const exportAsName = `${exportName}${length}`;
                    PartialComponentToHeadingsName[componentName] = exportAsName;
                    child.specifiers.push({
                        type: "ImportSpecifier",
                        imported: { type: "Identifier", name: exportName },
                        local: { type: "Identifier", name: exportAsName },
                    });
                }
            }
            else {
                // If component name equals default export name from .md/.mdx import
                const headingsName = PartialComponentToHeadingsName[node.name];
                if (headingsName) {
                    headings.push(headingsName);
                }
            }
        });
        file.data.hasJsxInH1 = hasJsxInH1;
        file.data.title = title;
        if (isRemoteContent) {
            // Attach headings for remote content, because we can't access to __toc variable
            file.data.headings = headings;
            done();
            return;
        }
        const headingElements = headings.map((heading) => typeof heading === "string"
            ? {
                type: "SpreadElement",
                argument: { type: "Identifier", name: heading },
            }
            : {
                type: "ObjectExpression",
                properties: Object.entries(heading).map(([key, value]) => ({
                    type: "Property",
                    kind: "init",
                    key: { type: "Identifier", name: key },
                    value: { type: "Literal", value },
                })),
            });
        tree.children.push({
            type: "mdxjsEsm",
            data: {
                estree: {
                    body: [
                        {
                            type: "ExportNamedDeclaration",
                            specifiers: [],
                            declaration: {
                                type: "VariableDeclaration",
                                kind: "const",
                                declarations: [
                                    {
                                        type: "VariableDeclarator",
                                        id: { type: "Identifier", name: exportName },
                                        init: { type: "ArrayExpression", elements: headingElements },
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        });
        done();
    };
};
