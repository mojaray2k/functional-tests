import {
    hasNumberValue,
    isInteger,
    isNumber,
    removeCommas
} from "./numbers";

const tenMillionNumber = 10000000;
const tenMillionString = "10,000,000";
const decimal = 0.01;
const someString = "something";

test("hasNumberValue works", () => {
    expect(hasNumberValue(tenMillionNumber)).toBeTruthy();
    expect(hasNumberValue(tenMillionString)).toBeTruthy();
    expect(hasNumberValue(decimal)).toBeTruthy();
    expect(hasNumberValue(someString)).toBeFalsy();
});

test("isInteger works", () => {
    expect(isInteger(tenMillionNumber)).toBeTruthy();
    expect(isInteger(tenMillionString)).toBeTruthy();
    expect(isInteger(decimal)).toBeFalsy();
    expect(isInteger(someString)).toBeFalsy();
});

test("isNumber works", () => {
    expect(isNumber(tenMillionNumber)).toBeTruthy();
    expect(isNumber(tenMillionString)).toBeTruthy();
    expect(isNumber(decimal)).toBeTruthy();
    expect(isNumber(someString)).toBeFalsy();
});

test("removeCommas works", () => {
    const result = "10000000";

    expect(removeCommas(tenMillionNumber)).toEqual(result);
    expect(removeCommas(tenMillionString)).toEqual(result);
});
