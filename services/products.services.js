const productsModels = require('../models/products.models');

const getAll = async () => {
  const products = await productsModels.getAll();
  return products;
};

const getById = async (id) => {
  const [product] = await productsModels.getById(id);
  return product;
};

module.exports = {
  getAll,
  getById,
};
