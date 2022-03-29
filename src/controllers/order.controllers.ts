import { Request, Response } from 'express';
import orderServices from '../services/order.services';

class OrderController {
  getAllOrders = async (req: Request, res: Response) => {
    const { code, newOrders } = await orderServices.getAllOrders();

    return res.status(code).json(newOrders);
  };
}

export default new OrderController();