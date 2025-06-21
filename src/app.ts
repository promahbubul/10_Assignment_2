import express from 'express';
import cors from 'cors';
import OrderRoutes from './app/modules/order/order.route';
import ProductRoutes from './app/modules/product/product.route';

// initialization
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/orders/', OrderRoutes);
app.use('/api/products/', ProductRoutes);

export default app;
