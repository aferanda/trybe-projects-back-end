const salesServices = require('../services/sales.services');

const getAll = async (_req, res) => {
  const [sales] = await salesServices.getAll();
  return res.status(200).json(sales);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const [sales] = await salesServices.getById(id);

    if (sales.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
    }

    return res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
};
