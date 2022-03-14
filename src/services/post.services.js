const { BlogPost } = require('../models');
const { getAllCategories } = require('./category.services');

const createPost = async (body, id) => {
  const { title, content, categoryIds } = body;

  const { categories } = await getAllCategories();
  const categoryIdsDB = categories.map((el) => el.id);

  const checkCategories = categoryIds.every((category) => categoryIdsDB.includes(category));

  if (!checkCategories) return { code: 400, message: '"categoryIds" not found' };

  const createdPost = await BlogPost.create({ userId: id, title, content });

  const newPost = {
    id: createdPost.id,
    userId: createdPost.userId,
    title: createdPost.title,
    content: createdPost.content,
  };

  return { code: 201, newPost };
};

module.exports = {
  createPost,
};