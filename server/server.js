import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Route handlers
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

// Error Middleware
import { notFound, errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Standard Middlewares
const allowedOrigin = process.env.CLIENT_URL || 'http://localhost:5173';
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);
app.use(express.json());

// Root / Welcome Route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'Welcome to LUXE MERN API Backend!',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      orders: '/api/orders',
      messages: '/api/messages',
    },
  });
});

// API Root / Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'LUXE MERN API is healthy and running',
    timestamp: new Date().toISOString(),
  });
});

// Mount Resource Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/messages', messageRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 LUXE API Server running on port ${PORT} (http://localhost:${PORT})`);
});

export default app;
