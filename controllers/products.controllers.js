const productsModels = require('../models/products.models');
const productsServices = require('../services/products.services');

const getAll = async (_req, res) => {
  const products = await productsModels.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsModels.getById(id);

  if (product.length === 0) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product[0]);
};

const create = async (req, res) => {
  const { name, quantity } = req.body;
  const { code, product, message } = await productsServices.create(name, quantity);

  if (!product) return res.status(code).json({ message });

  return res.status(code).json(product);
};

module.exports = {
  getAll,
  getById,
  create,
};
