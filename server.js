// server.js

const express = require('express');
const app = express();

// Use environment variable or default port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('🚀 Server is running successfully!');
});

// Example API route
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
