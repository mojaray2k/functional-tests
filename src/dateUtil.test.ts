import { getCurrentTimeInEST, convertUTCTimeToEST } from "./dateUtil";

const pattern = /[a-zA-Z]+. [a-zA-Z]+. \d{2} \d{4}/;
const expected = true;

describe("getCurrentTimeInEST", () => {
  it("should return true", () => {
    expect(pattern.test(getCurrentTimeInEST().toString())).toBe(expected);
  });
});
describe("convertUTCTimeToEST", () => {
  it("should return true", () => {
    expect(pattern.test(convertUTCTimeToEST(new Date()).toString())).toBe(
      expected
    );
  });
});
