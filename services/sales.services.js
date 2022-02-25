const salesModels = require('../models/sales.models');

const create = async (itemsSold) => {
  const id = await salesModels.createSaleId();

  itemsSold.forEach(async (e) => {
    await salesModels.createSalesProducts(id, e.productId, e.quantity);
  });

  return { code: 201, response: { id, itemsSold } };
};

module.exports = {
  create,
};
