// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Use authentication routes
app.use('/api', authRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
