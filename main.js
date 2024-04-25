const corsAnywhere = require('cors-anywhere');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Retrieve port number from environment variable or use a default value
const PORT = process.env.PORT || 8000;

// Create CORS Anywhere server
corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(PORT, () => {
  console.log(`CORS Anywhere server is running on port ${PORT}`);
});