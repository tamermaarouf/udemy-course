import request from "request";
import geocode from "./utils/geocode.js";
import forecast from "./utils/forecast.js";

console.log(process.argv[2]);
let address = process.argv[2];
if (!address) {
    console.log('Please provide address');
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log('Error:', error);
        }
        // console.log('Data:', datageocode);
        forecast(latitude, longitude, (error, dataforecast) => {
            if (error) {
                return console.log('Error:', error);
            }
            console.log(location);
            console.log('Data:', dataforecast);
        });
    });
}