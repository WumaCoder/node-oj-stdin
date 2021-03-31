import { getLineArr } from "src/core/array";
import { getLine } from "src/core/base";

jest.mock("src/core/base.js");

describe("array.js", () => {
  it("getLineArr", async () => {
    // @ts-ignore
    getLine.mockImplementation(() => Promise.resolve("1,null,undefined"));
    expect(await getLineArr()).toEqual(["1", null, undefined]);
  });
});
