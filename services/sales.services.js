const salesModels = require('../models/sales.models');

const create = async (itemsSold) => {
  const id = await salesModels.createSaleId();

  itemsSold.forEach(async (e) => {
    await salesModels.createSalesProducts(id, e.productId, e.quantity);
  });

  return { code: 201, response: { id, itemsSold } };
};

const update = async (itemUpdated, saleId) => {
  const [sale] = itemUpdated;
  const { productId, quantity } = sale;

  const result = await salesModels.update(productId, quantity, saleId);

  if (!result.affectedRows) return { code: 404, message: 'Sale/Product not found' };

  return { code: 200, response: { saleId, itemUpdated } };
};

module.exports = {
  create,
  update,
};
