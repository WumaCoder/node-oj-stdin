import { toListNode } from "src/transform/list";
import { getLine } from "./base";

export function getLineList() {
  return getLine().then((line) => toListNode(line));
}
