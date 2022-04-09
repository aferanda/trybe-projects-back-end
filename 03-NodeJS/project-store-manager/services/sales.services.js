const salesModels = require('../models/sales.models');
const productsModels = require('../models/products.models');

const create = async (itemsSold) => {
  const id = await salesModels.createSaleId();

  const inventory = await Promise.all(itemsSold.map(async (i) => {
    const [item] = await productsModels.getById(i.productId);
    return item.quantity - i.quantity;
  }));

  if (inventory.some((i) => i < 0)) {
    return { code: 422, message: 'Such amount is not permitted to sell' };
  }

  await Promise.all(itemsSold.map(async (i, index) => {
    await productsModels.updateById(inventory[index], i.productId);
    await salesModels.createSalesProducts(id, i.productId, i.quantity);
  }));

  return { code: 201, response: { id, itemsSold } };
};

const update = async (itemUpdated, saleId) => {
  const [sale] = itemUpdated;
  const { productId, quantity } = sale;

  const result = await salesModels.update(productId, quantity, saleId);

  if (!result.affectedRows) return { code: 404, message: 'Sale/Product not found' };

  return { code: 200, response: { saleId, itemUpdated } };
};

const remove = async (id) => {
  const sale = await salesModels.getById(id);
  const removed = await salesModels.remove(id);

  if (!removed.affectedRows) return { code: 404, message: 'Sale not found' };

  await Promise.all(sale.map(async (i) => {
    const [item] = await productsModels.getById(i.productId);
    const inventory = item.quantity + i.quantity;

    await productsModels.updateById(inventory, i.productId);
  }));

  return { code: 204 };
};

module.exports = {
  create,
  update,
  remove,
};
