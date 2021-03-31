const NodeGeocoder = require('node-geocoder');

const geocoder = NodeGeocoder({ apiKey: '9b25509a740941b5810344a8b943bce3' });

// Using callback
geocoder
  .geocode('29 champs elysée paris')
  .then((data) => {
    console.log(data);
  })
  .then((err) => {
    console.log(err);
  });
// output :
/* [
  {
    latitude: 48.8698679,
    longitude: 2.3072976,
    country: 'France',
    countryCode: 'FR',
    city: 'Paris',
    zipcode: '75008',
    streetName: 'Champs-Élysées',
    streetNumber: '29',
    administrativeLevels: {
      level1long: 'Île-de-France',
      level1short: 'IDF',
      level2long: 'Paris',
      level2short: '75',
    },
    provider: 'google',
  },
]; */
