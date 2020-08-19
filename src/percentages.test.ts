import { isPercent, toPercent } from "./percentages";

describe("isPercent", () => {
  it("should be truthy", () => {
    const value = 100;
    expect(isPercent(value)).toBeTruthy();
  });
});
describe("toPercent", () => {
  it("should return the value in a percentage format", () => {
    const value = 20;
    const expected = "20.00";
    expect(toPercent(value)).toBe(expected);
  });
});
