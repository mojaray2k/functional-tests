import { isAmount, convertAmountQuickKeys } from "./amountQuickKeys";

describe("isAmount", () => {
  it("should return true", () => {
    const expected = true;
    const value = "1000";
    expect(isAmount(value)).toBe(expected);
  });
  it("should return false", () => {
    const expected = false;
    const value = "";
    expect(isAmount(value)).toBe(expected);
  });
});
describe("convertAmountQuickKeys", () => {
  it("should return passed value", () => {
    const expected = "1000";
    const value = "1000";
    expect(convertAmountQuickKeys(value)).toBe(expected);
  });
});
