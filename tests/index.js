const { getLine, close } = require("../lib/node-oj-stdin");

async function main() {
  let str;
  while ((str = await getLine())) {
    console.log(str);
  }
  close();
}

main();
