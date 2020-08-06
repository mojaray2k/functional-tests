import hasValue from "./hasValue";

test("Passing values to hasValue with no options works.", () => {
    const testValue = 0;
    const testValue2 = "something";
    const testValue3 = "";

    expect(hasValue(testValue)).toBeTruthy();
    expect(hasValue(testValue2)).toBeTruthy();
    expect(hasValue(testValue3)).toBeTruthy();
    expect(hasValue(null)).toBeFalsy();
});

test("Passing values to hasValue with the 'checkCollections' option.", () => {
    const testValue = 0;
    const testValue2 = "something";
    const testValue3 = { someKey: 4 };
    const checkCollections = true;

    expect(hasValue(testValue, { checkCollections })).toBeTruthy();
    expect(hasValue(testValue2, { checkCollections })).toBeTruthy();
    expect(hasValue(testValue3, { checkCollections })).toBeTruthy();
    expect(hasValue({}, { checkCollections })).toBeFalsy();
    expect(hasValue([], { checkCollections })).toBeFalsy();
});

test("Passing values to hasValue with the 'checkFalsyValues' option.", () => {
    const testValue = 0;
    const testValue2 = "";
    const testValue3 = false;
    const testValue4 = "false";
    const checkFalsyValues = true;

    expect(hasValue(testValue, { checkFalsyValues })).toBeFalsy();
    expect(hasValue(testValue2, { checkFalsyValues })).toBeFalsy();
    expect(hasValue(testValue3, { checkFalsyValues })).toBeFalsy();
    expect(hasValue(testValue4, { checkFalsyValues })).toBeTruthy();
    expect(hasValue({}, { checkFalsyValues })).toBeTruthy();
    expect(hasValue([], { checkFalsyValues })).toBeTruthy();
});
