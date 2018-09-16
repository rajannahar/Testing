const fetch = require('node-fetch');

const API_KEY = "58125d7bd14c958340413c0bb64a0d0c"

const result = 
    fetch('http://apilayer.net/api/rate?access_key=58125d7bd14c958340413c0bb64a0d0c&country_code=GB&format=1')
        .then(response => response.json())
        .then(data => data.standard_rate)


result
