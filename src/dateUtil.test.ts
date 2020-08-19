import { getCurrentTimeInEST, convertUTCTimeToEST } from "./dateUtil";

describe("getCurrentTimeInEST", () => {
  it("should be truthy ", () => {
    expect(getCurrentTimeInEST()).toBeTruthy();
  });
});
describe("convertUTCTimeToEST", () => {
  it("should be truthy", () => {
    expect(convertUTCTimeToEST(new Date())).toBeTruthy();
  });
});
