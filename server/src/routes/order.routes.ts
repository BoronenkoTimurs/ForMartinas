import { Router } from "express";
import { getOrders, addOrder } from "../controllers/order";

const orderRouter = Router();

orderRouter.get("/order", getOrders);
orderRouter.post("/order", addOrder);

export default orderRouter;
