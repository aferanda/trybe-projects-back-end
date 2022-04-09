import prisma from '../models/prismaClient';
import { IProduct } from '../interfaces/interfaces';

class ProductService {
  getAllProducts = async () => {
    const products = await prisma.product.findMany();
    return { code: 200, products };
  };

  createProduct = async (product: IProduct) => {
    const newProduct = await prisma.product.create({
      data: product,
    });

    return { code: 201, item: newProduct };
  };
}

export default new ProductService();