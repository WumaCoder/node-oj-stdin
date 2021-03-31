import { toNums } from "src/transform/number";
import { getLine } from "./base";

export function getLineInt() {
  return getLine().then((line) => toNums(line));
}
