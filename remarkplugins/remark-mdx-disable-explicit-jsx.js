import { visit } from "unist-util-visit";
export const remarkMdxDisableExplicitJsx = ({ whiteList }) => (tree) => {
    const test = whiteList.map((name) => ({ name }));
    visit(tree, test, (node) => {
        delete node.data._mdxExplicitJsx;
    });
};
