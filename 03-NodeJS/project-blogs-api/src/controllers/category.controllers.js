const categoryServices = require('../services/category.services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { code, newCategory } = await categoryServices.createCategory(name);

  return res.status(code).json(newCategory);
};

const getAllCategories = async (req, res) => {
  const { code, categories } = await categoryServices.getAllCategories();

  return res.status(code).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};