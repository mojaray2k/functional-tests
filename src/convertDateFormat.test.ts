import convertDateFormat from "./convertDateFormat";

describe("convertDateFormat", () => {
  it("should return date formatted in numeric", () => {
    const date = "25-MAY-1990";
    const expected = "05-25-90";
    expect(convertDateFormat(date, "MM-DD-YY")).toBe(expected);
  });
});
