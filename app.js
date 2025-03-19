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




// CORS Configuration
app.use(cors({ origin: "https://fed-storefrontend-frontend-trinith.netlify.app/" }));



// Middleware
app.use(express.json());

// Connect to database
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// API routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRouter);
app.use("/api/categories", categoryRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running successfully on port ${PORT}`);
});
