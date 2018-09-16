// function orderTotal(order) {
//     return order.items.reduce((prev, current) => current.price * (current.quantity || 1) + prev, 0)
// }
const orderTotal = order => order.items.reduce((prev, current) => current.price * (current.quantity || 1) + prev, 0)

if ( orderTotal({
    items: [
        { name: "Food", price: 8, quantity: 2}
    ]
}) !== 16 ) {
    throw new Error("Check fail - Example - quantity")
}

if ( orderTotal({
    items: [
        { name: "Lead", price: 3 }
    ]
}) !== 3 ) {
    throw new Error("Check fail - Example - No quantity")
}

if ( orderTotal({
    items: [
        { name: "Food", price: 8, quantity: 1},
        { name: "Cage", price: 500, quantity: 1}
    ]
}) !== 508 ) {
    throw new Error("Check fail - Example 1")
}

if ( orderTotal({
    items: [
        { name: "Collar", price: 20, quantity: 1},
        { name: "Chew toy", price: 40, quantity: 1}
    ]
}) !== 60 ) {
    throw new Error("Check fail - Example 2")
}

