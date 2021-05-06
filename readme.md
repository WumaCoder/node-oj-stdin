# node-oj-stdin

为方便使用 node 来写 oj，开发的辅助工具包

## 安装

```bash
npm i -g node-oj-stdin
```

## 使用

### getLine

@return string | null

> 读入一行文本，遇到 EOF 返回 null（EOF 是 linux 文件结束符）

```js
const { getLine, close } = require("node-oj-stdin");

async function main() {
  let str;
  while ((str = await getLine())) {
    console.log(str);
  }
  close();
}

main();
```

当读到 EOF 的时候会返回 null，最后需要调用 close 关闭
