import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from "./apiRoutes/product.js";
import orderRouter from './apiRoutes/orderRoutes.js';
import categoryRouter from './apiRoutes/categories.js';
import connectDB from './db_connection.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Allowed origins (from environment variables and local development)
const allowedOrigins = [
  process.env.CLIENT_URL,  // Your frontend URL from .env
  "http://localhost:5173"  // Local development (Vite default)
];

// CORS Configuration
app.use(cors({ origin: "https://fed-storefrontend-frontend-trinith.netlify.app/" }));
// Handle preflight requests
app.options("*", cors());

// Middleware
app.use(express.json());

// Connect to database
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// API routes
app.use("/products", productRoutes);
app.use("/orders", orderRouter);
app.use("/categories", categoryRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running successfully on port ${PORT}`);
});
