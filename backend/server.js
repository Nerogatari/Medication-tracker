const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.log(err));

app.use(express.json());  // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Hello, Medication Tracker API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
