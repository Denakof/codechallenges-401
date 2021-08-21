const { Node } = require("../index");

describe("Node", () => {
  it("should create new Node", () => {
    let node = new Node("Dena");
    expect(node.value).toEqual("Dena");
    expect(node.next).toBeNull();
  });
});
