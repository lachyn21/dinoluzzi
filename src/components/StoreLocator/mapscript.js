// /* Implement map initialization and store fetching */

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8,
//   });

//   fetchStores();
// }

// function fetchStores() {
//   fetch('/api/stores')
//     .then(response => response.json())
//     .then(data => {
//       data.forEach(store => {
//         new google.maps.Marker({
//           position: {lat: store.latitude, lng: store.longitude},
//           map: map,
//           title: store.name
//         });
//       });
//     });
// }

// // Add this function to mapscript.js
// function searchStores() {
//     const lat = document.getElementById('search-lat').value;
//     const lng = document.getElementById('search-lng').value;
//     const distance = document.getElementById('search-distance').value;

//     fetch(`/api/search?lat=${lat}&lng=${lng}&distance=${distance}`)
//         .then(response => response.json())
//         .then(stores => {
//             // Clear existing markers
//             clearMarkers();
//             // Place new markers
//             stores.forEach(store => {
//                 new google.maps.Marker({
//                     position: {lat: store.latitude, lng: store.longitude},
//                     map: map,
//                     title: store.name
//                 });
//             });
//         });
// }
