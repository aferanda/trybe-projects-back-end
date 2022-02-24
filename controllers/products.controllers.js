const productsServices = require('../services/products.services');

const getAll = async (_req, res) => {
  const [products] = await productsServices.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const [product] = await productsServices.getById(id);

    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
};
