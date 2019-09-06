const latitude = 40.54014;
const longitude = -74.50975000000001;
const key = "AIzaSyD6Zh5HsEPeyGkktmpXijxz0NerXxlDq6Q";

// import coordsToZip from "coords-to-zip";
 
// var coordsToZip = require("coords-to-zip");


 
// const zip = coordsToZip({ latitude, longitude }, API_KEY);

const reverseGeocode = require('latlng-to-zip');
reverseGeocode({latitude, longitude}, key)
  .then(function zipcode() {
      console.log(zipcode);
  }) 
  .catch(err => err);
 
  