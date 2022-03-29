import { Request, Response } from 'express';
import productServices from '../services/product.services';

class ProductController {
  getAllProducts = async (req: Request, res: Response) => {
    const { code, products } = await productServices.getAllProducts();
    return res.status(code).json(products);
  };

  createProduct = async (req: Request, res: Response) => {
    const { code, item } = await productServices.createProduct(req.body);

    return res.status(code).json({ item });
  };
}

export default new ProductController();