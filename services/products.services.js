const productsModels = require('../models/products.models');

const getAll = async () => {
  const products = await productsModels.getAll();
  return products;
};

module.exports = {
  getAll,
};
