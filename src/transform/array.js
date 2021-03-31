export function toArr(str) {
  const nullKey = {
    null: true,
    undefined: true,
  };
  const nullValue = {
    null: null,
    undefined: undefined,
  };
  return str.split(",").map((item) => (nullKey[item] ? nullValue[item] : item));
}
export function toArrNum(str) {
  const nullKey = {
    null: true,
    undefined: true,
  };
  const nullValue = {
    null: null,
    undefined: undefined,
  };
  return str
    .split(",")
    .map((item) => (nullKey[item] ? nullValue[item] : Number(item)));
}
