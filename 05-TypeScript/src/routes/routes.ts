import { Router } from 'express';
import middlewares from '../middlewares';
import controllers from '../controllers';

const routes = Router();

const { productMiddleware, userMiddleware, loginMiddleware } = middlewares;
const { productControllers, userControllers, orderControllers } = controllers;

routes.get(
  '/products',
  productControllers.getAllProducts,
);

routes.post(
  '/products',
  productMiddleware,
  productControllers.createProduct,
);

routes.post(
  '/users',
  userMiddleware,
  userControllers.createUser,
);

routes.get(
  '/orders',
  orderControllers.getAllOrders,
);

routes.post(
  '/login',
  loginMiddleware,
  userControllers.login,
);

export default routes;