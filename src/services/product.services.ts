import prisma from '../models/prismaClient';

class ProductService {
  getAllProducts = async () => {
    const products = await prisma.product.findMany();
    return { code: 200, products };
  };
}

export default new ProductService();