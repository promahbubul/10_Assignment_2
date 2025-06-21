import { Request, Response } from 'express';
import { TOrder } from './order.interface';
import OrderService from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order: TOrder = req.body;
    const result = await OrderService.createOrderIntoDB(order);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};
const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getRevenueOrder();

    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};

const OrderController = {
  createOrder,
  getRevenue,
};

export default OrderController;
