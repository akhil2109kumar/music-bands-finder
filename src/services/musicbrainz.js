import axios from 'axios';

const BASE_URL = 'https://musicbrainz.org/ws/2';
const TEN_YEARS_AGO = new Date().getFullYear() - 10;

export const getBandsByLocation = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/artist`, {
      params: {
        query: `area:${city}`,
        fmt: 'json',
      },
    });
    const recentBands = response.data.artists
      .filter((band) => {
        const foundingYear = parseInt(band['life-span']?.begin?.substring(0, 4), 10);
        return foundingYear && foundingYear >= TEN_YEARS_AGO;
      })
      .slice(0, 50);

    return recentBands;
  } catch (error) {
    console.error('Error fetching bands:', error);
    return [];
  }
};
