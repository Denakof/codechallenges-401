const { LinkedList } = require("../index");

describe("Linked list", () => {
  it("should successfully instantiate an empty linked list", () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
  });
  it("should properly insert into the linked list", () => {
    let newList = new LinkedList();
    newList.insert(1);
    expect(newList.head.value).toEqual(1);
  });
  it("should The head property will properly point to the first node in the linked list  ", () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.head.value).toEqual(1);
  });
  it("should  properly insert multiple nodes into the linked list", () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);

    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(2);
  });

  it("should return true when finding a value within the linked list that exists", () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.includes(3)).toEqual(true);
  });
  it("should return false when finding a value within the linked list that exists", () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.includes(4)).toEqual(false);
  });
  it("should properly return a collection of all the values that exist in the linked list", () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    expect(newList.toString()).toEqual("{1} ->{2} ->{3} -> NULL");
  });
});
