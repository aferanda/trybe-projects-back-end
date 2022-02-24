const salesServices = require('../models/sales.models');

const getAll = async (_req, res) => {
  const sales = await salesServices.getAll();
  return res.status(200).json(sales);
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = await salesServices.getById(id);

    if (sales.length === 0) return res.status(404).json({ message: 'Sale not found' });

    return res.status(200).json(sales);
  } catch (error) {
      return next(error);
  }
};

module.exports = {
  getAll,
  getById,
};
