const order1 = {
    items: [
        { name: "Food", price: 8},
        { name: "Cage", price: 500},
    ]
}

const orderTotal = order => order.items
    .reduce(( prev, curr) => prev + curr.price, 0)

result = orderTotal(order1)
result




const one = [1, 2, 3, 4, 5]
const reduceThis = (accumulator, currentValue) => accumulator + currentValue;

hello = one.reduce(reduceThis)
hello