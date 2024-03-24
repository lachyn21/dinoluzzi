// const stores = [
//   { id: 1, name: 'Barzini’s', address: '2451 Broadway, NYC, NY 10024, United States', lat: 40.792891, lng: -73.973672 },
//   { id: 2, name: 'Westside Market', address: '2589 Broadway, NYC, NY 10025, United States', lat: 40.798772, lng: -73.969194 },
//   { id: 3, name: 'Losurdo’s Italian Deli & Bread Bakery', address: '410 Second St, Hoboken, NJ 07030, United States', lat: 40.743802, lng: -74.029214 },
//   { id: 4, name: 'Westside Market', address: '2840 Broadway, NYC, NY 10025, United States', lat: 40.799889, lng: -73.968877 },
//   { id: 5, name: 'Xtra Convenience', address: '710 Anderson Avenue, Cliffside Park, NJ 07010, United States', lat: 40.819639, lng: -73.988427 },
//   { id: 6, name: 'Jhonny’s Pizzeria', address: '520 Bergen Blvd, Palisades Park, NJ 07650, United States', lat: 40.847281, lng: -73.999419 },
//   { id: 7, name: '7-Eleven', address: '272 Liberty Street, Little Ferry, NJ 07643, United States', lat: 40.845717, lng: -74.042694 },
//   { id: 8, name: '7-Eleven', address: '231 Main Street, Ridgefield Park, NJ 07660, United States', lat: 40.854021, lng: -74.020739 },
//   { id: 9, name: 'Annabella’s House of Mozzarella', address: '900 Paterson Plank Rd, East Rutherford, NJ 07073, United States', lat: 40.833389, lng: -74.066000 },
//   { id: 10, name: 'The Original Mr.Brunos Pizzeria & Restaurant', address: '439 Valley Brook Ave, Lyndhurst, NJ 07071, United States', lat: 40.814365, lng: -74.108230 },
//   { id: 11, name: '86th Food Emporium', address: '82-35 153rd St, Howard Beach, NY 11420, United States', lat: 40.669672, lng: -73.839884 },
//   { id: 12, name: 'Minthorne Restaurant', address: '2 Minthorne St, Staten Island, NY 10301, United States', lat: 40.642014, lng: -74.075127 },
//   { id: 13, name: 'Western Beef', address: '425 Bay St, Staten Island, NY 10303, United States', lat: 40.634255, lng: -74.167475 },
//   { id: 14, name: 'Blondie Deli Grill Lotto', address: '466 Bay St, Staten Island, NY 10304, United States', lat: 40.631852, lng: -74.076229 },
//   { id: 15, name: 'New York Lanka', address: '313 Victory Blvd, Staten Island, NY 10301, United States', lat: 40.637619, lng: -74.093241 },
//   { id: 16, name: 'Victory Convenience Smoke', address: '320 Victory Blvd, Staten Island, NY 10301, United States', lat: 40.638184, lng: -74.093124 },
//   { id: 17, name: 'Food Dynasty', address: '1525 86th St, Brooklyn, NY 11228, United States', lat: 40.613190, lng: -74.007373 },
//   { id: 18, name: 'Baris Pizza', address: '596 Bay St, Staten Island, NY 10304, United States', lat: 40.625014, lng: -74.073716 },
//   { id: 19, name: 'Vinum WineBar', address: '704 Bay St, Staten Island, NY 10304, United States', lat: 40.625728, lng: -74.072556 },
//   { id: 20, name: 'Santino’s Gourmet', address: '409 Forest Ave, Staten Island, NY 10303, United States', lat: 40.629654, lng: -74.151394 },
//   { id: 21, name: 'Calabrese Pizzeria', address: '132 Franklin St, Bloomfield, NJ 07003, United States', lat: 40.795748, lng: -74.198437 },
//   { id: 22, name: 'Frank’s Pizza', address: '189 Route 46 W, Saddle Brook, NJ 07663, United States', lat: 40.896101, lng: -74.098120 }, 
//   { id: 23, name: 'Cuisine Africa Carribbean Monas', address: '360 Targee St, Staten Island, NY 10304, United States', lat: 40.619407, lng: -74.080209 },
//   { id: 24, name: 'Joanne’s Guormet', address: '1373 Bay St, Staten Island, NY 10305, United States', lat: 40.598080, lng: -74.075798 },
//   { id: 25, name: 'Targee Food Corp', address: '438 Targee St, Staten Island, NY 10304, United States', lat: 40.618045, lng: -74.079377 },
//   { id: 26, name: 'T & A Grocery', address: '523 Targee St, Staten Island, NY 10304, United States', lat: 40.617364, lng: -74.079548 },
//   { id: 27, name: 'Pastosa Raviolli', address: '764 Forest Ave, Staten Island, NY 10310, United States', lat: 40.630855, lng: -74.112661 },
//   { id: 28, name: 'Milk Things', address: '843 Forest Ave, Staten Island, NY 10303, United States', lat: 40.630409, lng: -74.146511 },
//   { id: 29, name: 'HER Corp Grocery', address: '151 Port Richmond Ave, Staten Island, NY 10302, United States', lat: 40.635897, lng: -74.129120 },
//   { id: 30, name: 'RD&R Deli Grocery', address: '612 Richmond Rd, Staten Island, NY 10304, United States', lat: 40.610352, lng: -74.085768 },
//   { id: 31, name: 'LM Unidos', address: '202 Port Richmond Ave, Staten Island, NY 10302, United States', lat: 40.636507, lng: -74.128594 },
//   { id: 32, name: 'Richmond 5-Eleven', address: '220 Port Richmond Ave, Staten Island, NY 10302, United States', lat: 40.635743, lng: -74.129423 },
//   { id: 33, name: 'Key Foods', address: '331 Port Richmond Ave, Staten Island, NY 10302, United States', lat: 40.637733, lng: -74.128279 },
//   { id: 34, name: 'Forest Smoke & Vapes', address: '1106 Forest Ave, Staten Island, NY 10310, United States', lat: 40.630783, lng: -74.117744 },
//   { id: 35, name: 'Olive Tree Market', address: '1490 Clove Rd, Staten Island, NY 10301, United States', lat: 40.615256, lng: -74.101853 },
//   { id: 36, name: 'Leo’s Sandwich', address: '1153 Forest Ave, Staten Island, NY 10303, United States', lat: 40.630558, lng: -74.153940 },
//   { id: 37, name: 'Milk & Things', address: '183A McClean Ave, Staten Island, NY 10305, United States', lat: 40.597986, lng: -74.066140 },
//   { id: 38, name: 'Ocean Deli Ave', address: '112-114 Ocean Ave, Staten Island, NY 10305, United States', lat: 40.599983, lng: -74.066597 },
//   { id: 39, name: 'B Maggio’s', address: '281 McClean Ave, Staten Island, NY 10305, United States', lat: 40.599940, lng: -74.069717 },
//   { id: 40, name: 'EZ Grocery', address: '9 Walker St, Staten Island, NY 10301, United States', lat: 40.637510, lng: -74.075960 },
//   { id: 41, name: 'Dina Corp', address: '128 Sand Ln, Staten Island, NY 10305, United States', lat: 40.602800, lng: -74.066362 },
//   { id: 42, name: 'K&K Bagel Deli Grill', address: '1150 Hylan Blvd, Staten Island, NY 10305, United States', lat: 40.598564, lng: -74.073868 },
//   { id: 43, name: 'Shop & Save', address: '1174 Hylan Blvd, Staten Island, NY 10305, United States', lat: 40.598900, lng: -74.075334 },
//   { id: 44, name: 'Sand Lane Deli', address: '278 Sands Ln, Staten Island, NY 10305, United States', lat: 40.594378, lng: -74.065559 },
//   { id: 45, name: 'Terminal 1', address: '323 Sands Ln, Staten Island, NY 10305, United States', lat: 40.594688, lng: -74.066052 },
//   { id: 46, name: 'Key Food', address: '300 Sand Ln, Staten Island, NY 10305, United States', lat: 40.594598, lng: -74.066444 },
//   { id: 47, name: 'Quality #1 Food', address: '2894 Richmond Terr, Staten Island, NY 10310, United States', lat: 40.629982, lng: -74.129940 },
//   { id: 48, name: 'Bella Vita Pork Store', address: '1718 Victory Blvd, Staten Island, NY 10314, United States', lat: 40.612076, lng: -74.123500 }
// ];

import React, { useEffect, useRef, useState } from 'react';

function Locations() {
    const mapRef = useRef(null);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredStores, setFilteredStores] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const [radius, setRadius] = useState('');
    const [resultLimit, setResultLimit] = useState('');
    
    const stores = [
      { id: 1, name: 'Barzini’s', address: '2451 Broadway, NYC, NY 10024, United States', lat: 40.792891, lng: -73.973672 },
      { id: 2, name: 'Westside Market', address: '2589 Broadway, NYC, NY 10025, United States', lat: 40.798772, lng: -73.969194 },
      { id: 3, name: 'Losurdo’s Italian Deli & Bread Bakery', address: '410 Second St, Hoboken, NJ 07030, United States', lat: 40.743802, lng: -74.029214 },
      { id: 4, name: 'Westside Market', address: '2840 Broadway, NYC, NY 10025, United States', lat: 40.799889, lng: -73.968877 },
      { id: 5, name: 'Xtra Convenience', address: '710 Anderson Avenue, Cliffside Park, NJ 07010, United States', lat: 40.819639, lng: -73.988427 },
      { id: 6, name: 'Jhonny’s Pizzeria', address: '520 Bergen Blvd, Palisades Park, NJ 07650, United States', lat: 40.847281, lng: -73.999419 },
      { id: 7, name: '7-Eleven', address: '272 Liberty Street, Little Ferry, NJ 07643, United States', lat: 40.845717, lng: -74.042694 },
      { id: 8, name: '7-Eleven', address: '231 Main Street, Ridgefield Park, NJ 07660, United States', lat: 40.854021, lng: -74.020739 },
      { id: 9, name: 'Annabella’s House of Mozzarella', address: '900 Paterson Plank Rd, East Rutherford, NJ 07073, United States', lat: 40.833389, lng: -74.066000 },
      { id: 10, name: 'The Original Mr.Brunos Pizzeria & Restaurant', address: '439 Valley Brook Ave, Lyndhurst, NJ 07071, United States', lat: 40.814365, lng: -74.108230 },
      { id: 11, name: '86th Food Emporium', address: '82-35 153rd St, Howard Beach, NY 11420, United States', lat: 40.669672, lng: -73.839884 },
      { id: 12, name: 'Minthorne Restaurant', address: '2 Minthorne St, Staten Island, NY 10301, United States', lat: 40.642014, lng: -74.075127 },
      { id: 13, name: 'Western Beef', address: '425 Bay St, Staten Island, NY 10303, United States', lat: 40.634255, lng: -74.167475 },
      { id: 14, name: 'Blondie Deli Grill Lotto', address: '466 Bay St, Staten Island, NY 10304, United States', lat: 40.631852, lng: -74.076229 },
      { id: 15, name: 'New York Lanka', address: '313 Victory Blvd, Staten Island, NY 10301, United States', lat: 40.637619, lng: -74.093241 },
      { id: 16, name: 'Victory Convenience Smoke', address: '320 Victory Blvd, Staten Island, NY 10301, United States', lat: 40.638184, lng: -74.093124 },
      { id: 17, name: 'Food Dynasty', address: '1525 86th St, Brooklyn, NY 11228, United States', lat: 40.613190, lng: -74.007373 },
      { id: 18, name: 'Baris Pizza', address: '596 Bay St, Staten Island, NY 10304, United States', lat: 40.625014, lng: -74.073716 },
      { id: 19, name: 'Vinum WineBar', address: '704 Bay St, Staten Island, NY 10304, United States', lat: 40.625728, lng: -74.072556 },
      { id: 20, name: 'Santino’s Gourmet', address: '409 Forest Ave, Staten Island, NY 10303, United States', lat: 40.629654, lng: -74.151394 },
      { id: 21, name: 'Calabrese Pizzeria', address: '132 Franklin St, Bloomfield, NJ 07003, United States', lat: 40.795748, lng: -74.198437 },
      { id: 22, name: 'Frank’s Pizza', address: '189 Route 46 W, Saddle Brook, NJ 07663, United States', lat: 40.896101, lng: -74.098120 }, 
      { id: 23, name: 'Cuisine Africa Carribbean Monas', address: '360 Targee St, Staten Island, NY 10304, United States', lat: 40.619407, lng: -74.080209 },
      { id: 24, name: 'Joanne’s Guormet', address: '1373 Bay St, Staten Island, NY 10305, United States', lat: 40.598080, lng: -74.075798 },
      { id: 25, name: 'Targee Food Corp', address: '438 Targee St, Staten Island, NY 10304, United States', lat: 40.618045, lng: -74.079377 },
      { id: 26, name: 'T & A Grocery', address: '523 Targee St, Staten Island, NY 10304, United States', lat: 40.617364, lng: -74.079548 },
      { id: 27, name: 'Pastosa Raviolli', address: '764 Forest Ave, Staten Island, NY 10310, United States', lat: 40.630855, lng: -74.112661 },
      { id: 28, name: 'Milk Things', address: '843 Forest Ave, Staten Island, NY 10303, United States', lat: 40.630409, lng: -74.146511 },
      { id: 29, name: 'HER Corp Grocery', address: '151 Port Richmond Ave, Staten Island, NY 10302, United States', lat: 40.635897, lng: -74.129120 },
      { id: 30, name: 'RD&R Deli Grocery', address: '612 Richmond Rd, Staten Island, NY 10304, United States', lat: 40.610352, lng: -74.085768 },
      { id: 31, name: 'LM Unidos', address: '202 Port Richmond Ave, Staten Island, NY 10302, United States', lat: 40.636507, lng: -74.128594 },
      { id: 32, name: 'Richmond 5-Eleven', address: '220 Port Richmond Ave, Staten Island, NY 10302, United States', lat: 40.635743, lng: -74.129423 },
      { id: 33, name: 'Key Foods', address: '331 Port Richmond Ave, Staten Island, NY 10302, United States', lat: 40.637733, lng: -74.128279 },
      { id: 34, name: 'Forest Smoke & Vapes', address: '1106 Forest Ave, Staten Island, NY 10310, United States', lat: 40.630783, lng: -74.117744 },
      { id: 35, name: 'Olive Tree Market', address: '1490 Clove Rd, Staten Island, NY 10301, United States', lat: 40.615256, lng: -74.101853 },
      { id: 36, name: 'Leo’s Sandwich', address: '1153 Forest Ave, Staten Island, NY 10303, United States', lat: 40.630558, lng: -74.153940 },
      { id: 37, name: 'Milk & Things', address: '183A McClean Ave, Staten Island, NY 10305, United States', lat: 40.597986, lng: -74.066140 },
      { id: 38, name: 'Ocean Deli Ave', address: '112-114 Ocean Ave, Staten Island, NY 10305, United States', lat: 40.599983, lng: -74.066597 },
      { id: 39, name: 'B Maggio’s', address: '281 McClean Ave, Staten Island, NY 10305, United States', lat: 40.599940, lng: -74.069717 },
      { id: 40, name: 'EZ Grocery', address: '9 Walker St, Staten Island, NY 10301, United States', lat: 40.637510, lng: -74.075960 },
      { id: 41, name: 'Dina Corp', address: '128 Sand Ln, Staten Island, NY 10305, United States', lat: 40.602800, lng: -74.066362 },
      { id: 42, name: 'K&K Bagel Deli Grill', address: '1150 Hylan Blvd, Staten Island, NY 10305, United States', lat: 40.598564, lng: -74.073868 },
      { id: 43, name: 'Shop & Save', address: '1174 Hylan Blvd, Staten Island, NY 10305, United States', lat: 40.598900, lng: -74.075334 },
      { id: 44, name: 'Sand Lane Deli', address: '278 Sands Ln, Staten Island, NY 10305, United States', lat: 40.594378, lng: -74.065559 },
      { id: 45, name: 'Terminal 1', address: '323 Sands Ln, Staten Island, NY 10305, United States', lat: 40.594688, lng: -74.066052 },
      { id: 46, name: 'Key Food', address: '300 Sand Ln, Staten Island, NY 10305, United States', lat: 40.594598, lng: -74.066444 },
      { id: 47, name: 'Quality #1 Food', address: '2894 Richmond Terr, Staten Island, NY 10310, United States', lat: 40.629982, lng: -74.129940 },
      { id: 48, name: 'Bella Vita Pork Store', address: '1718 Victory Blvd, Staten Island, NY 10314, United States', lat: 40.612076, lng: -74.123500 }
    ];

    useEffect(() => {
        const fetchFilteredStores = () => {
            if (!userLocation) {
                return [];
            }

            return stores.filter(store => {
                const distance = calculateDistance(userLocation.lat, userLocation.lng, store);
                return (!searchTerm || store.address.toLowerCase().includes(searchTerm.toLowerCase())) &&
                      (!radius || parseFloat(distance) <= parseFloat(radius));
            }).slice(0, resultLimit ? parseInt(resultLimit) : Infinity);
        };

        setFilteredStores(fetchFilteredStores());
    }, [searchTerm, radius, resultLimit, userLocation]);

    useEffect(() => {
        const googleMapsScriptId = 'google-maps-script';

        window.initMap = () => {
            setIsMapLoaded(true);
            if (!mapRef.current) return;
            const initialCenter = userLocation || { lat: 40.7128, lng: -74.0060 }; // Default to NYC if user location is not available
            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 10,
                center: initialCenter,
            });

            stores.forEach(store => {
                new window.google.maps.Marker({
                    position: { lat: store.lat, lng: store.lng },
                    map: map,
                    title: store.name,
                });
            });
        };

        if (!document.getElementById(googleMapsScriptId) && !window.google) {
            const script = document.createElement('script');
            script.id = googleMapsScriptId;
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBrr9EO81znawNvQ2GEDTe3K2aKsCs8vHQ&callback=initMap`;
            script.async = true;
            script.onerror = () => setIsMapLoaded(false);

            document.head.appendChild(script);

            return () => {
                const script = document.getElementById(googleMapsScriptId);
                if (script) {
                    document.head.removeChild(script);
                }
            };
        } else {
            setIsMapLoaded(true);
        }
    }, [userLocation]);

    useEffect(() => {
        // Get user's location using geolocation
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ lat: latitude, lng: longitude });
            },
            error => {
                console.error('Error getting user location:', error);
                // Handle error, maybe set default location
            }
        );
    }, []);

    // Function to calculate distance using Haversine formula
    function calculateDistance(userInputLat, userInputLng, store) {
        const lat1 = deg2rad(userInputLat);
        const lat2 = deg2rad(store.lat);
        const lng1 = deg2rad(userInputLng);
        const lng2 = deg2rad(store.lng);

        const earthRadius = 3958.8; // Earth radius in miles
        const dLat = lat2 - lat1;
        const dLng = lng2 - lng1;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;

        return distance.toFixed(2);
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

     return (
      <>
          <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Dino Luzzi Energy Drink</h1>
          <h1 style={{ textAlign: 'center', color: '#C4A00E', textDecoration: 'underline', marginBottom: '30px' }}>Store Locations</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
              <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter address"
                  style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '30%' }}
              />
              <input
                  type="number"
                  min="0"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  placeholder="Radius in miles"
                  style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '20%' }}
              />
              <input
                  type="number"
                  min="1"
                  value={resultLimit}
                  onChange={(e) => setResultLimit(e.target.value)}
                  placeholder="Max results"
                  style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '20%' }}
              />
          </div>
          <div ref={mapRef} className="map-container" style={{ height: '400px', width: '100%' }}></div>
          <ul>
              {filteredStores.map((store, index) => (
                  <li key={store.id}>
                      {index + 1}. {store.name} - {store.address} - {userLocation && `${calculateDistance(userLocation.lat, userLocation.lng, store)} miles`}
                  </li>
              ))}
          </ul>
      </>
    );
}

export default Locations;