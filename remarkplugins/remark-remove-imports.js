import { remove } from "unist-util-remove";
export const remarkRemoveImports = () => {
    return (tree, _file, done) => {
        remove(tree, "mdxjsEsm");
        done();
    };
};
