// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express app
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Dummy database to store shortened URLs
const urls = [];

// Route to handle URL shortening
app.post('/api/v1/shorten', (req, res) => {
    // Extract originalUrl from request body
    const { originalUrl } = req.body;

    // Generate a random shortUrl (This can be improved for better uniqueness)
    const shortUrl = generateShortUrl();

    // Save the original and short URLs in the database
    urls.push({ originalUrl, shortUrl });

    // Send the response with status code 201 and JSON containing originalUrl and shortUrl
    res.status(201).json({ originalUrl, shortUrl });
});

// Generate a random short URL
function generateShortUrl() {
    return Math.random().toString(36).substring(2, 8); // Generate a random 6-character string
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
