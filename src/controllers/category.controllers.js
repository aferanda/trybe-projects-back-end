const categoryService = require('../services/category.services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { code, newCategory } = await categoryService.createCategory(name);

  return res.status(code).json(newCategory);
};

module.exports = {
  createCategory,
};