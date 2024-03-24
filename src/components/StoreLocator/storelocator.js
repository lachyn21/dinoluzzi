/* Server setup with express
TODO: Add store addresses here and connect API 
Note for myself: this is not completed yet */

const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Dummy data for stores
const stores = [
  { id: 1, name: 'Store 1', latitude: 40.712776, longitude: -74.005974 },
  { id: 2, name: 'Store 2', latitude: 34.052235, longitude: -118.243683 },
  // Add more stores as needed
];

// Endpoint to get store data
app.get('/api/stores', (req, res) => {
  res.json(stores);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

