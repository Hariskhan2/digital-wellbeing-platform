const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Base route
app.get('/', (req, res) => {
  res.send('Digital Wellbeing Platform API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
