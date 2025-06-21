// import { TProduct } from '../product/product.interface';
import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (order: TOrder) => {
  const productId = order?.product;
  // finding product
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product doesn't found");

  // checking product quantity
  if (product.quantity < order.quantity) {
    throw new Error('Insufficient product quantity');
  }

  const result = await Order.create(order);
  product.quantity -= order.quantity;
  await product.save();
  return result;
};

const getRevenueOrder = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalPrice',
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  return result;
};

const OrderService = {
  createOrderIntoDB,
  getRevenueOrder,
};

export default OrderService;
