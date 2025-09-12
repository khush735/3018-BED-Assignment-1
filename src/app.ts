import express from 'express';

const app = express();
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});


// Health check endpoint
app.get('/api/v1/health', (req, res) => {
  const healthCheck = {
    status: 'OK',
    uptime: process.uptime(),
    timestamp: Date.now(),
    version: '1.0.0'
  };
  res.status(200).json(healthCheck);
});
export default app;