const {expect} = require("chai");
const wrap = require("./wrap");
const words =
  "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.";
const wordsWithBreaks =
  "Lorem ipsum\n dolor sit eu amet, elit na magna sem\n amet nulla \nvel purus ac\n ligula.";
const output = `Lorem ipsum dolor\n
  sit eu amet, elit na\n
  magna sem amet nulla\n
  vel purus ac ligula.`;
console.log(wrap(words, 30));
describe("wrap function", function() {
  it("should wrap text with line length", function() {
    expect(wrap(words, 20)).to.be(output);
  });
  it("should return an empty string if empty", function() {
    expect(wrap("", 10)).to.be("");
  });
  it("should wrap text with only at line length", function() {
    expect(wrap(wordsWithBreaks, 20)).to.be(output);
  });
});
