import { toBTree } from "src/transform/tree";
import { getLine } from "./base";

export function getBTree() {
  return getLine().then((line) => toBTree(line));
}
