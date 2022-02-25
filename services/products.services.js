const productsModels = require('../models/products.models');

const create = async (name, quantity) => {
  const product = await productsModels.findByName(name);
  const nameExists = product.find((n) => n.name === name);

  if (nameExists) return { code: 409 };

  const createProduct = await productsModels.create(name, quantity);
  return { code: 201, product: createProduct };
};

module.exports = {
  create,
};
