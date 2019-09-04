var zipcodes = require('zipcodes');

var hillsZip = zipcodes.lookup(10312);
console.log(hillsZip);

var randomZip= zipcodes.random();
console.log(randomZip);