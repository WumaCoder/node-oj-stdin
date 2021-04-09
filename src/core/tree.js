import { toTree } from "src/transform/tree";
import { getLine } from "./base";

export function getTree() {
  return getLine().then((line) => toTree(line));
}
