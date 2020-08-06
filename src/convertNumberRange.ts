export default function convertNumberRange(numbers: any[], separator = "-") {
    const sortedNumbers = numbers.slice().sort((itemA, itemB) => itemA - itemB);

    // extract and store consecutive subsequences in a 2D array,
    // where each subsequence is stored as [min, max] or [min]
    const subSequences = sortedNumbers.reduce((allSubSequences, integer, idx, src) => {
        const ranges = [...allSubSequences];
        const isConsecutiveInteger = (idx > 0) && ((integer - src[idx - 1]) === 1);
        if (isConsecutiveInteger) {
            // set new max for current range
            const currentRange = ranges[ranges.length - 1];
            currentRange[1] = integer;
        } else {
            // create new range
            const newRange = [integer];
            ranges.push(newRange);
        }
        return ranges;
    }, []);
    // convert each subsequence to string: [min, max] => min-max
    return subSequences.map(result => result.join(separator));
}