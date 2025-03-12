import express from "express";
import { 
  getAllProducts, 
  createProduct, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} from "../Controlllers/product_Controllers.js";

const productRouter = express.Router();

// Routes for "/api/products"
productRouter
  .route("/")
  .get(getAllProducts)
  .post(createProduct);

// Routes for "/api/products/:id"
productRouter
  .route("/:id")
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProduct);

export default productRouter;
