import { createRequire } from "node:module";
import { visit } from "unist-util-visit";
const require = createRequire(import.meta.url);
/**
 * Markdown files that imported outside CWD could not find `nextra/mdx` or `next/image`
 * to fix it we need to replace import path with absolute for them
 * https://github.com/shuding/nextra/issues/1303
 */
export const remarkReplaceImports = () => {
    return (tree, _file, done) => {
        visit(tree, "mdxjsEsm", (node) => {
            const { source } = node.data.estree.body[0];
            const absolutePath = require.resolve(source.value);
            source.value = absolutePath;
            source.raw = `"${absolutePath}"`;
        });
        done();
    };
};
