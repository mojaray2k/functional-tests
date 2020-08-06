import convertKeyCode from "./convertKeyCode";

describe("convertKeyCode", () => {
  it("should return empty object", () => {
    const event = new KeyboardEvent("");
    const expected = {};
    expect(convertKeyCode(event)).toEqual(expected);
  });
});
