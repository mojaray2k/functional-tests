import BigNumber from "bignumber.js";
import _get from "lodash/get";

const amountWithQuickKeyGroups = /^(?<amount>[0-9]+([.][0-9]*)?|[.][0-9]+)(?<quickKey>[bkmt])$/;
const amountWithQuickKeyRegex = /^([0-9]+([.][0-9]*)?|[.][0-9]+)([bkmt])?$/;

const quickKeyMultiplierMap = {
    b: 1000000000,
    k: 1000,
    m: 1000000,
    t: 1000000000000,
};

export const isAmount = (value: string): boolean => amountWithQuickKeyRegex.test(value);

export const convertAmountQuickKeys = (value: string): string => {
    if (value) {
        const matchResult = value.match(amountWithQuickKeyGroups);
        const quickKey = _get(matchResult, "groups.quickKey", "");
        if (quickKey) {
            const amountValue = new BigNumber(_get(matchResult, "groups.amount", 0));
            const multiplier = quickKeyMultiplierMap[quickKey] || 1;
            return amountValue.multipliedBy(multiplier).toFixed();
        }
    }
    return value;
};