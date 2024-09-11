import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";

// Default marker icon setup for Leaflet (Leaflet's marker icon may not work out of the box in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom component to update map center when search is performed
const SetMapCenter = ({ center }) => {
  const map = useMap(); // Get access to the map instance

  if (center) {
    map.setView(center, 13); // Update the map view to the new center
  }

  return null;
};

const LeafletWithSearch = () => {
  const [position, setPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default center for the map
  const [error, setError] = useState(null);

  // Custom hook to handle map click event
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng); // Set position when user clicks on the map
      },
    });

    return position === null ? null : (
      <Marker position={position}></Marker> // Place a marker on the selected position
    );
  };

  // Function to handle the search query
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: searchQuery,
            format: "json",
            addressdetails: 1,
            limit: 1,
          },
        }
      );

      if (response.data && response.data.length > 0) {
        const location = response.data[0];
        const newCenter = [parseFloat(location.lat), parseFloat(location.lon)];
        setMapCenter(newCenter); // Center map on the search result
        setPosition({
          lat: parseFloat(location.lat),
          lng: parseFloat(location.lon),
        });
        setError(null); // Clear any previous errors
      } else {
        setError("Location not found");
      }
    } catch (error) {
      setError("Error fetching location");
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Select a location on the map or use the search box</h3>
      {/* Search Box */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "5px", width: "300px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>
          Search
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Leaflet Map */}
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        {/* OpenStreetMap Tile Layer */}
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        {/* CartoDB Positron (light-themed tiles): */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <LocationMarker />
        <SetMapCenter center={mapCenter} />{" "}
        {/* Update the map center when search result is found */}
      </MapContainer>

      {/* Display selected coordinates */}
      {position && (
        <div>
          <h4>Selected Location:</h4>
          <p>Latitude: {position.lat}</p>
          <p>Longitude: {position.lng}</p>
        </div>
      )}
    </div>
  );
};

export default LeafletWithSearch;
