import axios from 'axios';

const GEOJS_URL = 'https://get.geojs.io/v1/ip/geo.json';

export const getFallbackLocation = async () => {
  const response = await axios.get(GEOJS_URL);
  return response.data.city;
};
