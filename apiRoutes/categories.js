import express from "express";
import { getCategories,getCategoryById, addCategory,deleteCategory, updateCategory } from "../Controlllers/category_Controller.js";

const categoryRouter = express.Router();
categoryRouter
  .route("/")
  .get(getCategories)
  .post(addCategory);

// Routes for "/api/products/:id"
categoryRouter
  .route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

export default categoryRouter;
