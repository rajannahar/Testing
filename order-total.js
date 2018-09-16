const orderTotal = (fetch, order) => {
    if ( order.country ) {
        //if there is an order.country then let's fetch api data
        return fetch('http://apilayer.net/api/rate?access_key=58125d7bd14c958340413c0bb64a0d0c&country_code='+order.country+'&format=1')
        .then(response => response.json())
        .then(data => data.standard_rate)
        .then(vat => order.items.reduce((prev, current) => 
            current.price * (current.quantity || 1) + prev, 0) * (1+vat/100))
            //calculation: price * quantity * vat rate 1.2 (if vat===20)
    }

    //if no order.country, default to this
    return Promise.resolve(order.items.reduce((prev, current) => 
    current.price * (current.quantity || 1) + prev, 0))
}

module.exports = orderTotal;