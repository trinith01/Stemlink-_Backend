import express from "express";
import { 
  getOrders,
  getOrdersByUserId,
  addOrder, 
  updateOrder, 
  deleteOrder 
} from "../Controlllers/order_Controllers.js";

const orderRouter = express.Router();

// Routes for "/api/orders"
orderRouter
  .route("/")
  .get(getOrders)
  .post(addOrder);

// Routes for "/api/orders/:id"
orderRouter
  .route("/:userId")
  .get( getOrdersByUserId)
  .put(updateOrder)
  .delete(deleteOrder);

export default orderRouter;
