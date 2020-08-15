import arrayInsert from "./arrayInsert";

describe("arrayInsert", () => {
  it("should return flatten array", () => {
    const arr = ["A", "B", "F"];
    const newItems = ["C", "D", "E"];
    const index = 1;
    const expected = ["A", "C", "D", "E", "B", "F"];

    expect(arrayInsert(arr, index, newItems)).toEqual(expected);
  });
});
