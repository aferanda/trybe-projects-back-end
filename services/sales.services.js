const salesModels = require('../models/sales.models');

const getAll = async () => {
  const sales = await salesModels.getAll();
  return sales;
};

const getById = async (id) => {
  const sales = await salesModels.getById(id);
  return sales;
};

module.exports = {
  getAll,
  getById,
};
