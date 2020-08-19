import { isAmount, convertAmountQuickKeys } from "./amountQuickKeys";

describe("isAmount", () => {
  it("should be truthy", () => {
    const value = "1000";
    expect(isAmount(value)).toBeTruthy();
  });
  it("should be falsy", () => {
    const value = "";
    expect(isAmount(value)).toBeFalsy();
  });
});
describe("convertAmountQuickKeys", () => {
  it("should be truthy", () => {
    const value = "1000";
    expect(convertAmountQuickKeys(value)).toBeTruthy();
  });
});
