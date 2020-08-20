import {
  formatWithPrecision,
  toFixedBigNumber,
  parseWithPrecision,
} from "./bigNumbers";

describe("toFixedBigNumber", () => {
  it("should be truthy ", () => {
    const value = 123.456;
    expect(toFixedBigNumber(value)).toBeTruthy();
  });
});
describe("formatWithPrecision", () => {
  it("should return a big number with a formated precision of the value passed ", () => {
    const value = 123;
    const expected = "123.000";
    expect(formatWithPrecision(value, 3)).toBe(expected);
  });
});
describe("parseWithPrecision", () => {
  it("should return the count for the number after decimal", () => {
    const value = "123.4567";
    const expected = 4;
    expect(parseWithPrecision(value)).toBe(expected);
  });
});
