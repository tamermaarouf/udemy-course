import request from "request";

// Create url for api_darkSky
const apiKey = 'a177f8481c31fa96c3f95ad4f4f84610';

const forecast = (latitude, longitude, cb) => {
    const url = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?units=si`;
    request({
        url: url
    }, (error, response) => {
        if (error) {
            cb('Unable to connect to weather services', undefined);
        } else if (response.body.length === 0) {
            cb('Unable to find location. Try another search', undefined);
        } else {
            const dataParse = JSON.parse(response.body);
            cb(undefined, {
                summary: dataParse.daily.summary,
                temperature: dataParse.currently.temperature,
                chance_of_rain: dataParse.currently.precipProbability
            });
            // console.log(`${dataParse.daily.summary} It's currently ${dataParse.currently.temperature} degree out,  There is a ${dataParse.currently.precipProbability}% chance of rain`);
        }
    });

};

export default forecast;