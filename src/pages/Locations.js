import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const mapContainerStyle = {
  height: "400px",
  width: "100%"
};

const center = {
  lat: 37.7749, // Example: San Francisco
  lng: -122.4194,
};

function Locations() {
  const [stores, setStores] = useState([]);
  const [searchParams, setSearchParams] = useState({
    lat: center.lat,
    lng: center.lng,
    distance: 10 // default search distance in km
  });

  // Function to fetch stores based on search parameters
  const fetchStores = async () => {
    try {
      const response = await axios.get(`/api/search?lat=${searchParams.lat}&lng=${searchParams.lng}&distance=${searchParams.distance}`);
      setStores(response.data); // assuming the response data is an array of store locations
    } catch (error) {
      console.error('Error fetching stores:', error);
    }
  };

  // Fetch stores on component mount and searchParams change
  useEffect(() => {
    fetchStores();
  }, [searchParams]);

  return (
    <>
      <h1>Locations</h1>
      <div>
        <input
          type="number"
          value={searchParams.lat}
          onChange={(e) => setSearchParams({...searchParams, lat: parseFloat(e.target.value)})}
          placeholder="Latitude"
        />
        <input
          type="number"
          value={searchParams.lng}
          onChange={(e) => setSearchParams({...searchParams, lng: parseFloat(e.target.value)})}
          placeholder="Longitude"
        />
        <input
          type="number"
          value={searchParams.distance}
          onChange={(e) => setSearchParams({...searchParams, distance: parseInt(e.target.value)})}
          placeholder="Distance (km)"
        />
        <button onClick={fetchStores}>Search</button>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyBrr9EO81znawNvQ2GEDTe3K2aKsCs8vHQ">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          {stores.map(store => (
            <Marker key={store.id} position={{ lat: store.latitude, lng: store.longitude }} />
          ))}
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default Locations;
