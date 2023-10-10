const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    // do telemetry here ...
    res.sendFile(__dirname + '/public/index.html');
});


// Serve static files from the public directory
app.use(express.static('public'));


// Get the port from the environment variable
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
