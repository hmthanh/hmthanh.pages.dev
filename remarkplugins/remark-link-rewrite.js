import { visit } from "unist-util-visit";
import { EXTERNAL_URL_REGEX } from "./constants";
export const remarkLinkRewrite = ({ pattern, replace, excludeExternalLinks, }) => {
    return (tree, _file, done) => {
        visit(tree, "link", (node) => {
            if (!(excludeExternalLinks && EXTERNAL_URL_REGEX.test(node.url))) {
                node.url = node.url.replace(pattern, replace);
            }
        });
        done();
    };
};
