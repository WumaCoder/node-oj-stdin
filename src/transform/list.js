export function ListNode(val) {
  this.val = val;
  this.next = null;
}

export function toStrNode(node) {
  if (!node) {
    return "";
  }
  let str = node.val + "";
  node = node.next;

  while (node) {
    str += "," + node.val;
    node = node.next;
  }
  return str;
}

export function toListNode(str) {
  if (!str.length) return null;
  const arr = str.split(",");
  const node = new ListNode(arr[0]);
  let temp = node;
  for (let i = 1; i < arr.length; i++) {
    temp = temp.next = new ListNode(arr[i]);
  }
  return node;
}
