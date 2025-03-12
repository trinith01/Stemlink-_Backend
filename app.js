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

// Use CORS middleware with dynamic origin from .env
const corsOptions = {
  origin: process.env.CLIENT_URL || "*", // Allow requests from frontend URL
  credentials: true, // Allow cookies/auth headers
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to database
connectDB();

// A basic route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// API routes
app.use("/products", productRoutes);
app.use("/orders", orderRouter);
app.use("/categories", categoryRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
