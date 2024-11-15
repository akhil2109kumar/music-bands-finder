import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import BandList from './components/BandList';
import useGeolocation from './hooks/useGeolocation';
import { getBandsByLocation } from './services/musicbrainz';
import './App.css';

const App = () => {
  const [bands, setBands] = useState([]);
  const location = useGeolocation();

  useEffect(() => {
    if (location?.city) {
      fetchBands(location.city);
    }
  }, [location]);

  const fetchBands = async (city) => {
    try {
      const bands = await getBandsByLocation(city);
      setBands(bands);
    } catch (error) {
      console.error('Error fetching bands:', error);
    }
  };

  const handleSearch = (city) => {
    fetchBands(city);
  };

  return (
    <div className="container">
      <h1>Find Recently Founded Bands</h1>
      <SearchForm onSearch={handleSearch} />
      <BandList bands={bands} />
    </div>
  );
};

export default App;
