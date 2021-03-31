import alias from "@rollup/plugin-alias";
import { babel } from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "./lib/node-oj-stdin.js",
    format: "cjs",
  },
  external: ["readline"],
  plugins: [
    alias({
      entries: [{ find: /^src\/(.*)/, replacement: __dirname + "/src/$1" }],
    }),
    babel({
      babelHelpers: "bundled",
    }),
  ],
};
