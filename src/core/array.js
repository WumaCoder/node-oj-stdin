import { toArr } from "src/transform/array";
import { getLine } from "./base";
export function getLineArr() {
  return getLine().then((line) => toArr(line));
}
