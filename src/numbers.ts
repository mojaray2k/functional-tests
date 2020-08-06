export const removeCommas = (value: string | number): string => value.toString().replace(/,/g, "");

export const isInteger = (value: string | number): boolean => /^[+-]?[0-9]+$/g.test(removeCommas(value));

export const isNumber = (value: string | number): boolean => /^([0-9]+([.][0-9]*)?|[.][0-9]+)$/g.test(removeCommas(value));

export const hasNumberValue = (value): boolean => {
    const hasValue = typeof (value) === "number" || (typeof (value) === "string" && value.trim() !== "");
    return hasValue && !isNaN(Number(removeCommas(value)));
};