const productsModels = require('../models/products.models');

const getAll = async (_req, res) => {
  const products = await productsModels.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsModels.getById(id);

    if (product.length === 0) return res.status(404).json({ message: 'Product not found' });

    return res.status(200).json(product[0]);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  getById,
};
