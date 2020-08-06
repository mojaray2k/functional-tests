import convertNumberRange from "./convertNumberRange";

describe("convertNumberRange", () => {
  it("should return an array containing the range of numbers passed", () => {
    const numbers = [1, 2, 3, 4, 5];
    const separator = "/";
    const expected = ["1/5"];
    expect(convertNumberRange(numbers, separator)).toEqual(expected);
  });
  it("should return an array containing the range of numbers passed", () => {
    const numbers = [5, 6, 7, 8, 9, 10];
    const separator = "-";
    const expected = ["5-10"];
    expect(convertNumberRange(numbers, separator)).toEqual(expected);
  });
});
