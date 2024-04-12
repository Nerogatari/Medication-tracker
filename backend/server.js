const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Hello, Medication Tracker API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});