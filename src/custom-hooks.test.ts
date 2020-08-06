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
  it("should return the previous value to be undefined", () => {
    const initialValue = "";
    const { result } = renderHook(() => usePrevious(initialValue));

    expect(result.current).toBeUndefined();
  });
});
