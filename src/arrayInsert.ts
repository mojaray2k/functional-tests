const arrayInsert = (arr: any[], index: number, newItems: any[]) => [
    ...arr.slice(0, index),
    ...newItems,
    ...arr.slice(index)
];

export default arrayInsert;