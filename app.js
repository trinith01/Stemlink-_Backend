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
const allowedOrigins = [
  process.env.CLIENT_URL, // Read frontend URL from environment variable
  "http://localhost:5173", // Local development (Vite default)
];

// Configure CORS
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies/auth headers
  })
);
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
