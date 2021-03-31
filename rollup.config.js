import { babel } from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "./lib/node-oj-stdin.js",
    format: "cjs",
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
    }),
  ],
};
