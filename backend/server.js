// backend/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from ClimCompass backend!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/api/weather', (req, res) => {
    // This is mock data. In a real app, you'd fetch this from a weather API
    res.json({
      location: 'Cyberjaya',
      temperature: 28,
      condition: 'Partly Cloudy'
    });
  });