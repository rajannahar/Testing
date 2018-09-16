const someArray = [
    { amount: 100 },
    { amount: 10 },
    { amount: 10 },
    { amount: 10 },
    { amount: 70 },
]

let total = 0;
for (let i=0; i<someArray.length; i++) {
    total +=someArray[i].amount
}
total

const orderTotal = input => input
    .reduce(( prev, curr) => prev + curr.amount, 0)

arrayTotal = orderTotal(someArray)
arrayTotal

const reduceThis = someArray.reduce( function( sum, item ) {
    return sum+item.amount
}, 0)
reduceThis 
