require('dotenv').config();
const axios = require('axios');

async function getCoordinates(address) {
  const apiKey = process.env.GEOAPIFY_API_KEY;
  const url = `
https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=6537430fc41b4515af5a2e1bd829ea5a`;

  const response = await axios.get(url);
  const result = response.data.features[0];

  return {
    latitude: result.properties.lat,
    longitude: result.properties.lon
  };
}

getCoordinates("AIIMS Delhi").then((coords) => {
  console.log(coords);
});