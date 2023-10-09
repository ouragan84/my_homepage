const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get the port from the environment variable
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
