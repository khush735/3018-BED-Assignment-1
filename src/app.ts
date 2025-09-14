import express from 'express';
import { 
  calculatePortfolioPerformance, 
  findLargestHolding, 
  calculateAssetAllocation,
  Asset 
} from './portfolio/portfolioPerformance';

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

// Portfolio performance endpoint
app.get('/api/v1/portfolio/performance', (req, res) => {
  const initialInvestment = Number(req.query.initial) || 10000;
  const currentValue = Number(req.query.current) || 12000;
  
  const result = calculatePortfolioPerformance(initialInvestment, currentValue);
  res.json(result);
});

// Largest holding endpoint
app.get('/api/v1/portfolio/largest-holding', (req, res) => {
  const sampleAssets: Asset[] = [
    { name: 'Stocks', value: 5000 },
    { name: 'Bonds', value: 3000 },
    { name: 'Real Estate', value: 7000 }
  ];
  
  const result = findLargestHolding(sampleAssets);
  res.json({ largestHolding: result });
});

// Asset allocation endpoint
app.get('/api/v1/portfolio/allocation', (req, res) => {
  const sampleAssets: Asset[] = [
    { name: 'Stocks', value: 5000 },
    { name: 'Bonds', value: 3000 },
    { name: 'Real Estate', value: 7000 }
  ];
  
  const result = calculateAssetAllocation(sampleAssets);
  res.json({ allocation: result });
});

export default app;