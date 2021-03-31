'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var readline = require('readline');

function toArr(str) {
  const nullKey = {
    null: true,
    undefined: true
  };
  const nullValue = {
    null: null,
    undefined: undefined
  };
  return str.split(",").map(item => nullKey[item] ? nullValue[item] : item);
}
function toArrNum(str) {
  const nullKey = {
    null: true,
    undefined: true
  };
  const nullValue = {
    null: null,
    undefined: undefined
  };
  return str.split(",").map(item => nullKey[item] ? nullValue[item] : Number(item));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const buffer = [];
var getLineCount = 0;
rl.on("line", function lineEvent(v) {
  buffer.push(v);
});
rl.on("close", function closeEvent() {
  setImmediate(function closeProcess() {
    if (buffer.length === 0 || getLineCount === 0) {
      process.exit(0);
    } else {
      setImmediate(closeProcess);
    }
  });
});
function getLine() {
  getLineCount++;
  return new Promise(resolve => {
    setImmediate(function run() {
      if (buffer.length !== 0) {
        resolve(buffer.shift());
        getLineCount--;
      } else {
        setImmediate(run);
      }
    });
  });
}
function close() {
  rl.close();
}

function getLineArr() {
  return getLine().then(line => toArr(line));
}

function toNums(str) {
  return str.split(/[^\d]+/gim).map(v => Number(v));
}

function getLineInt() {
  return getLine().then(line => toNums(line));
}

function BTreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
function toBTree(str) {
  const arr = toArrNum(str);
  const headVal = arr.shift();

  if (headVal === null || headVal === undefined) {
    return null;
  }

  const root = new BTreeNode(headVal);
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    const val1 = arr.shift();

    if (val1 !== null && val1 !== undefined) {
      node.left = new BTreeNode(val1);
      queue.push(node.left);
    }

    const val2 = arr.shift();

    if (val2 !== null && val2 !== undefined) {
      node.right = new BTreeNode(val2);
      queue.push(node.right);
    }
  }

  return root;
}
function toStrBTree(root) {
  if (!root) {
    return "";
  }

  const queue = [root];
  let result = root.val;

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      if (node.left) {
        queue.push(node.left);
        result += "," + node.left.val;
      } else if (node.left === null) {
        result += ",null";
      }
    }

    if (node) {
      if (node.right) {
        queue.push(node.right);
        result += "," + node.right.val;
      } else if (node.right === null) {
        result += ",null";
      }
    }
  }

  return result.substr(0, result.search(/\d(?=((?!\d).)*$)/g) + 1);
}

function getBTree() {
  return getLine().then(line => toBTree(line));
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
function toNodeString(node) {
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
function toListNode(str) {
  if (!str.length) return null;
  const arr = str.split(",");
  const node = new ListNode(arr[0]);
  let temp = node;

  for (let i = 1; i < arr.length; i++) {
    temp = temp.next = new ListNode(arr[i]);
  }

  return node;
}

exports.BTreeNode = BTreeNode;
exports.ListNode = ListNode;
exports.close = close;
exports.getBTree = getBTree;
exports.getLine = getLine;
exports.getLineArr = getLineArr;
exports.getLineInt = getLineInt;
exports.toArr = toArr;
exports.toArrNum = toArrNum;
exports.toBTree = toBTree;
exports.toListNode = toListNode;
exports.toNodeString = toNodeString;
exports.toNums = toNums;
exports.toStrBTree = toStrBTree;
