import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyMapComponent = () => {
  const center = { lat: 40.712776, lng: -74.005974 }; // New York

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={{ height: '400px', width: '100%' }} zoom={13} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
