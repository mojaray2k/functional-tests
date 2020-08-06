import { formatWithPrecision } from "./bigNumbers";

const PERCENTAGE_PRECISION = 2;

export const isPercent = (value: string | number): boolean => /^([0-9]+(\.[0-9]{0,2})?|\.[0-9]{0,2})$/.test(value.toString());

export const toPercent = (value): string => formatWithPrecision(value, PERCENTAGE_PRECISION);
