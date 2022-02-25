const productsModels = require('../models/products.models');

const create = async (name, quantity) => {
  const product = await productsModels.findByName(name);
  const nameExists = product.find((n) => n.name === name);

  if (nameExists) return { code: 409, message: 'Product already exists' };

  const createProduct = await productsModels.create(name, quantity);
  return { code: 201, product: createProduct };
};

const update = async (name, quantity, id) => {
  const product = await productsModels.getById(id);

  if (product.length === 0) return { code: 404, message: 'Product not found' };

  await productsModels.update(name, quantity, id);

  return { code: 200, product: { id, name, quantity } };
};

module.exports = {
  create,
  update,
};
