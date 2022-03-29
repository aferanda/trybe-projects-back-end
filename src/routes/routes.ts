import { Router } from 'express';
import middlewares from '../middlewares';
import productControllers from '../controllers/product.controllers';
import userControllers from '../controllers/user.controllers';

const routes = Router();

const { productMiddleware, userMiddleware } = middlewares;

routes.get('/products', productControllers.getAllProducts);
routes.post('/products', productMiddleware, productControllers.createProduct);

routes.post('/users', userMiddleware, userControllers.createUser);

export default routes;