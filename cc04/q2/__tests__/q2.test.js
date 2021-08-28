"use strict";
let fab = require("../index");
describe("q2", () => {
  it("should check the function it works successfully", () => {
    expect(fab(4)).toEqual(3);
  });

  it("should check the function it works successfully", () => {
    expect(fab(5)).toEqual(5);
  });
});
