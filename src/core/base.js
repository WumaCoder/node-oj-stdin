import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bufferLine = [];
const EOF = null;

rl.on("line", function lineEvent(v) {
  bufferLine.push(v);
});

rl.on("close", function closeEvent() {
  bufferLine.push(EOF);
});

export function waitInput() {
  return new Promise((resolve) => {
    setImmediate(function loop() {
      if (bufferLine.length) {
        resolve();
      } else {
        setImmediate(loop);
      }
    });
  });
}

export async function getLine() {
  await waitInput();
  return bufferLine.shift();
}

export function close() {
  rl.close();
}
