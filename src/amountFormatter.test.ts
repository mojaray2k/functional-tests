import amountFormatter from "./amountFormatter";

describe("Amount Formatter", () => {
  it("should return null if no argument is passed", () => {
    expect(amountFormatter()).toBe(null);
  });
  it("should return empty string", () => {
    const value = "";
    const precision = 2;
    const expected = "";
    expect(amountFormatter(value, precision)).toBe(expected);
  });
  it("should return 10.00 when value 10 is passed", () => {
    const value = "10";
    const expected = "10.00";
    expect(amountFormatter(value)).toBe(expected);
  });
  it("should return 10.000 when value 10 is passed along 3 as a precision", () => {
    const value = "10";
    const precision = 3;
    const expected = "10.000";
    expect(amountFormatter(value, precision)).toBe(expected);
  });
});
