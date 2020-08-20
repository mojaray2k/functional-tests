import { renderHook } from "@testing-library/react-hooks";
import { useInstance, usePrevious } from "./custom-hooks";

describe("useInstance", () => {
  it("should return current instance to be truthy", () => {
    const initialValue = "Testing";
    const { result } = renderHook(() => useInstance(initialValue));

    expect(result.current[2].current).toBeTruthy();
  });
});
describe("usePrevious", () => {
  it("should be truthy", () => {
    const value = { initialValue: 3 };
    const {
      result: { current },
    } = renderHook(() => usePrevious(value));
    expect(current).toBeTruthy();
  });
});
