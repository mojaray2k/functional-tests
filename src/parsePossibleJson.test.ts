import parsePossibleJson from "./parsePossibleJson";

describe("parsePossibleJson", () => {
  it("should return JSON parsed value", () => {
    const value = JSON.stringify({ type: "error" });
    const expected = { type: "error" };
    expect(parsePossibleJson(value)).toEqual(expected);
  });
});
