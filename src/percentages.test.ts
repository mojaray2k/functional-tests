import { isPercent, toPercent } from "./percentages";

describe("isPercent", () => {
  it("should return true", () => {
    const value = 100;
    const expected = true;
    expect(isPercent(value)).toBe(expected);
  });
});
describe("toPercent", () => {
  it("should return the value in a percentage format", () => {
    const value = 20;
    const expected = "20.00";
    expect(toPercent(value)).toBe(expected);
  });
});
