import _isEmpty from "lodash/isEmpty";

interface IHasValueOptions {
    checkCollections?: boolean;
    checkFalsyValues?: boolean;
}

export default function hasValue(value: any, { checkCollections, checkFalsyValues }: IHasValueOptions = {}): boolean {
    const noFalsyValues = checkFalsyValues ? !!value : true;
    const noEmptyCollections = checkCollections && typeof(value) === "object" ? !_isEmpty(value) : true;

    return typeof(value) !== "undefined" && value !== null && noFalsyValues && noEmptyCollections;
}
