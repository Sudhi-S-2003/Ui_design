import React, { useState } from 'react';
import axios from 'axios';

const LocationSearch = () => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: '', lon: '' });
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Call OpenStreetMap Nominatim API for geocoding
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: address,
          format: 'json',
          addressdetails: 1,
          limit: 1,
        },
      });

      if (response.data && response.data.length > 0) {
        const location = response.data[0];
        setCoordinates({
          lat: location.lat,
          lon: location.lon,
        });
        setError(null); // Clear any previous errors
      } else {
        setError('Location not found');
      }
    } catch (error) {
      setError('Error fetching coordinates');
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="address">Enter Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter a location"
          required
        />
        <button type="submit">Get Coordinates</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {coordinates.lat && coordinates.lon && (
        <div>
          <h3>Coordinates:</h3>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lon}</p>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
