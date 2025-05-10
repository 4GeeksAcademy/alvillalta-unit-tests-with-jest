const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One dollar should be 146.26 yens", () => {
    const yens = fromDollarToYen(1);
    const expectedYens = (1 / 1.07) * 156.5;

    expect(yens).toBe(expectedYens.toFixed(2)); 
})

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(1);
    const expectedDollars = 1 * 1.07;

    expect(dollars).toBe(expectedDollars.toFixed(2)); 
})

test("One thousand yens should be 5.56 pounds", () => {
    const pounds = fromYenToPound(1000);
    const expectedPounds = (1000 / 156.5) * 0.87;

    expect(pounds).toBe(expectedPounds.toFixed(2)); 
})
