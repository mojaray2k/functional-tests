export default function amountFormatter(value?: string, precision = 2): string | null {
    const hasValue = value !== null && typeof (value) !== "undefined";
    if (hasValue) {
        const wholeAmount = parseFloat(value);
        if (isNaN(wholeAmount)) {
            return "";
        }

        const precisionIndex = wholeAmount.toString().indexOf(".");

        return wholeAmount.toFixed(precision).replace(/\d(?=(?:\d{3})+(?:\.|$))/g, ($0, i) => {
            return precisionIndex < 0 || i < precisionIndex ? `${$0},` : $0;
        });
    }

    return null;
}
