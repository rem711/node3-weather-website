const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2da379acb578e0d9720af0801be498ba/' + latitude + ',' + longitude;
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather services', undefined);
        }
        else if(body.error) {
            callback('Unable to find location', undefined);
        }
        else {
            const forecastStr = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.';
            callback(undefined, forecastStr); 
        }
    });
}

module.exports = forecast;