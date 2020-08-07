import removeFromErrorIds from "./removeFromErrorIds";

describe("removeFromErrorIds", () => {
  it("should return error id array", () => {
    const errors = ["validation_error", "request_error", "network_error"];
    const removeError = "network_error";
    const expected = ["validation_error", "request_error"];
    expect(removeFromErrorIds(errors, removeError)).toEqual(expected);
  });
});
