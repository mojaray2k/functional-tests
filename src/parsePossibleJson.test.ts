import parsePossibleJson from "./parsePossibleJson";

describe("parsePossibleJson", () => {
  it("should return JSON parsed value", () => {
    const value = "Test";
    const expected = "Test";
    expect(parsePossibleJson(value)).toEqual(expected);
  });
});
