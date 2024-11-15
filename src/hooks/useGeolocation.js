import { useState, useEffect } from 'react';
import axios from 'axios';

const useGeolocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        async (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            try {
              const response = await axios.get('https://get.geojs.io/v1/ip/geo.json');
              const { city } = response.data;
              setLocation({ city });
            } catch (geoError) {
              console.error('Error with GeoJS API:', geoError);
            }
          }
        }
      );
    }
  }, []);

  return location;
};

export default useGeolocation;
