import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getProductsFromDB = async () => {
  const result = await Product.find({});
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

const updateProductIntoDB = async (productId: string, payload: object) => {
  const existProduct = await Product.findById(productId);
  if (!existProduct) throw new Error("Product doesn't found");
  const result = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  return result;
};
const deleteProductIntoDB = async (productId: string) => {
  const existProduct = await Product.findById(productId);
  if (!existProduct) throw new Error("Product doesn't found");
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductIntoDB,
};

export default ProductServices;
