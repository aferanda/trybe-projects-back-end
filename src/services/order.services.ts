import prisma from '../models/prismaClient';

class OrderService {
  getAllOrders = async () => {
    const orders = await prisma.order.findMany({
      include: { products: { select: { id: true } } },
    });

    const newOrders = orders.map((order) => ({
      ...order,
      products: order.products.map(({ id }) => id),
    }));

    return { code: 200, newOrders };
  };
}

export default new OrderService();