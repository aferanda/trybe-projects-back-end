import { Router } from 'express';
import productMiddleware from '../middlewares/product.middleware';
import productControllers from '../controllers/product.controllers';

const routes = Router();

routes.get('/products', productControllers.getAllProducts);
routes.post('/products', productMiddleware, productControllers.createProduct);

export default routes;