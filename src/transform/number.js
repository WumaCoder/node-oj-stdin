export function toNums(str) {
  return str.split(/[^\d]+/gim).map((v) => Number(v));
}
