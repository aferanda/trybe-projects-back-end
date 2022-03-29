import { Router } from 'express';
import productControllers from '../controllers/product.controllers';

const routes = Router();

routes.get('/products', productControllers.getAllProducts);

export default routes;