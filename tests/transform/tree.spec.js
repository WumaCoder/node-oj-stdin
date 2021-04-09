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

    expect(toBTree("3,9,20,null,null,15,7")).toEqual(
      new BTreeNode(
        3,
        new BTreeNode(9),
        new BTreeNode(20, new BTreeNode(15), new BTreeNode(7))
      )
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
