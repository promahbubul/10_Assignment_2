import express from "express";
import OrderController from "./order.controller";


const route = express.Router();

route.post('/', OrderController.createOrder);
route.get('/revenue', OrderController.getRevenue);
const OrderRoutes = route

export default OrderRoutes