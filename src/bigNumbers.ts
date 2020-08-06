import BigNumber from "bignumber.js";
import { hasNumberValue } from "./numbers";

export const convertToBigNumber = (value: number): BigNumber => {
    return (value && !isNaN(value)) ? new BigNumber(value) : new BigNumber(0);
};

export const toFixedBigNumber = (value: number, precision?: number): string => convertToBigNumber(value).toFixed(precision);

export const formatWithPrecision = (value: number, configuredPrecision = 0): string => {
    if (hasNumberValue(value)) {
        const valBigNumber = new BigNumber(value);
        const valuePrecision = valBigNumber.decimalPlaces();
        const precisionToApply = configuredPrecision > valuePrecision ? configuredPrecision : null;
        return valBigNumber.toFixed(precisionToApply);
    }
    return "";
};

export const parseWithPrecision = (value: string, precision?: number): BigNumber => {
    const val = hasNumberValue(value) ? value : 0;
    const valBigNumber = new BigNumber(val);
    return valBigNumber.decimalPlaces(precision);
};
