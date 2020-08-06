import getEnvironment from "./getEnvironment";

describe("getEnvironment", () => {
  it("should return current environment", () => {
    const expected = "LOCAL";
    expect(getEnvironment()).toBe(expected);
  });
});
