const latitude = 40.54014;
const longitude = -74.50975000000001;
const key = "U1AkiJAi94sqkgylj4B1VaQh3YZxMMTt";

var NodeGeocoder = require("node-geocoder");

var options = {
  provider: "mapquest",
  apiKey: key
};

var geocoder = NodeGeocoder(options);

geocoder
  .reverse({ lat: 45.767, lon: 4.833 })
  .then(function(res) {
    console.log(res[0].zipcode);
  })
  .catch(function(err) {
    console.log(err);
  });
