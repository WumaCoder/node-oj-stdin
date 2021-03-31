const { toBTree, BTreeNode, toStrBTree } = require("src/transform/tree");

describe("tree.js", () => {
  it("toBTree", () => {
    expect(toBTree("1,11,12,111,112")).toEqual(
      new BTreeNode(
        1,
        new BTreeNode(11, new BTreeNode(111), new BTreeNode(112)),
        new BTreeNode(12)
      )
    );

    expect(toBTree("1,null,12,null,122")).toEqual(
      new BTreeNode(1, null, new BTreeNode(12, null, new BTreeNode(122)))
    );
  });

  it("toStrBTree", () => {
    expect(
      toStrBTree(
        new BTreeNode(
          1,
          new BTreeNode(11, new BTreeNode(111), new BTreeNode(112)),
          new BTreeNode(12)
        )
      )
    ).toEqual("1,11,12,111,112");

    expect(
      toStrBTree(
        new BTreeNode(1, null, new BTreeNode(12, null, new BTreeNode(122)))
      )
    ).toEqual("1,null,12,null,122");
  });
});
