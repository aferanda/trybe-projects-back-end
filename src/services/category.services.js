const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  return { code: 201, newCategory };
};

module.exports = {
  createCategory,
};