import amountFormatter from './amountFormatter';

describe("Amount Formatter",()=>{
it("should return null if value is null or undefined",()=>{
    const value = null;
    const precision = 2 ;
    expect(amountFormatter(value,precision)).toBe(null)
})
});