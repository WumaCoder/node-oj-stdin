import { getLineInt } from "src/core/number";
import { getLine } from "src/core/base";

jest.mock("src/core/base.js");

describe("number.js", () => {
  it("getLineInt", async () => {
    // @ts-ignore
    getLine.mockImplementation(() => Promise.resolve("1 2,3, 4"));
    const nums = await getLineInt();
    expect(nums).toEqual([1, 2, 3, 4]);
  });
});
