import { Router } from "express";
import { getOrders, addOrder } from "../controllers/order";

const orderRouter = Router();

orderRouter.get("/orders", getOrders);
orderRouter.post("/orders", addOrder);

export default orderRouter;
