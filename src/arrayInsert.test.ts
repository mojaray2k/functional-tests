import arrayInsert from "./arrayInsert";

describe("arrayInsert", () => {
  it("should return array containing an array of new items", () => {
    const arr = ["A", "B", "F"];
    const newItems = ["C", "D", "E"];
    const index = 1;
    const expected = ["A", ["C", "D", "E"], "B", "F"];

    expect(arrayInsert(arr, index, newItems)).toEqual(expected);
  });
});
