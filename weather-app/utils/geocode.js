import request from "request";

const geocode = (address, cb) => {
    // Create url for mapbox
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidGFtZXJtYWFyb3VmIiwiYSI6ImNrdmN2enB3czRvbnQybnF3NHRwaXRrcmsifQ.BPg93T2NsM3H_gj-Ym9i9w`;
    request({
        url: geocodeURL,
        json: true
    }, (error, {body}) => {
        if (error) {
            cb('Unable to connect to location services', undefined);
        } else if (body.features.length === 0) {
            cb('Unable to find location. Try another search', undefined);
        } else {
            cb(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });

};

export default geocode;