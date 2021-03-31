const NodeGeocoder = require('node-geocoder');

const geocoder = NodeGeocoder({
  provider: 'opencage',
  apiKey: process.env.JWT_KEY,
});

const getCoordsForAddress = async (address) => {
  const res = await geocoder.geocode(address);
  const lat = res[0].latitude;
  const lng = res[0].longitude;

  return { lat, lng };
};

module.exports = getCoordsForAddress;
