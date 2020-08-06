import {
  formatWithPrecision,
  toFixedBigNumber,
  parseWithPrecision,
} from "./bigNumbers";

describe("toFixedBigNumber", () => {
  it("should return fixed big number of the value passed back as a string ", () => {
    const value = 123.456;
    const expected = "123.456";
    expect(toFixedBigNumber(value)).toBe(expected);
  });
});
describe("formatWithPrecision", () => {
  it("should return a big number with a formated precision of the value passed ", () => {
    const value = 123;
    const precision = 3;
    const expected = "123.000";
    expect(formatWithPrecision(value, precision)).toBe(expected);
  });
});
describe("parseWithPrecision", () => {
  it("should return a parsed precision of the value passed ", () => {
    const value = "123.456";
    const expected = 3;
    expect(parseWithPrecision(value)).toBe(expected);
  });
});
