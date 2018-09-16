const orderTotal = require('./order-total');
// const emptyFunction = () => {}

it("calls vat api correctly", () => {
    let isFakeFetchCalled = false
    const fakeFetch = (url) => {
        expect(url).toBe('http://apilayer.net/api/rate?access_key=58125d7bd14c958340413c0bb64a0d0c&country_code=GB&format=1')
        isFakeFetchCalled = true
        return Promise.resolve({
            json: () => Promise.resolve({
                standard_rate: 20
            })
        })
    }
    return orderTotal(fakeFetch, {
        country: "GB",
        items: [
            { name: "Drink", price: 50, quantity: 2}
        ]
    }).then(result => {
        expect(result).toBe(50*2*1.20)
        expect(isFakeFetchCalled).toBe(true)
    })
});

it.skip("if country code specified", () => {
});

it("Calculates with quantity", () => 
    orderTotal(null, {
        items: [
            { name: "Food", price: 8, quantity: 2}
        ]
    }).then(result => expect(result).toBe(16))
);

it("No quantities specified", () => 
    orderTotal(null, {
        items: [
            { name: "Lead", price: 3 }
        ]
    }).then(result => expect(result).toBe(3))
);

it("Happy path - Example 1", () => 
    orderTotal(null, {
        items: [
            { name: "Food", price: 8, quantity: 1},
            { name: "Cage", price: 500, quantity: 1}
        ]
    }).then(result => expect(result).toBe(508))
);

it("Happy path - Example 2", () =>
    orderTotal(null, {
        items: [
            { name: "Collar", price: 20, quantity: 1},
            { name: "Chew toy", price: 40, quantity: 1}
        ]
    }).then(result => expect(result).toBe(60))
);
