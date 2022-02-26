const salesModels = require('../models/sales.models');

const create = async (itemsSold) => {
  const id = await salesModels.createSaleId();

  itemsSold.forEach(async (e) => {
    await salesModels.createSalesProducts(id, e.productId, e.quantity);
  });

  return { code: 201, response: { id, itemsSold } };
};

const update = async (itemUpdated, saleId) => {
  itemUpdated.forEach(async (e) => {
    await salesModels.update(e.productId, e.quantity, saleId);
  });

  return { code: 200, response: { saleId, itemUpdated } };
};

module.exports = {
  create,
  update,
};
