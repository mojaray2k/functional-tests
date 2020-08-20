import parsePossibleJson from "./parsePossibleJson";

describe("parsePossibleJson", () => {
  it("should return JSON parsed value", () => {
    const value = '{"error":true}';
    const expected = { error: true };
    expect(parsePossibleJson(value)).toEqual(expected);
  });
});
