const { BlogPost, User, Category, PostCategory } = require('../models');
const { getAllCategories } = require('./category.services');

const createPost = async (body, id) => {
  const { title, content, categoryIds } = body;

  const { categories } = await getAllCategories();
  const categoryIdsDB = categories.map((el) => el.id);

  const checkCategories = categoryIds.every((category) => categoryIdsDB.includes(category));

  if (!checkCategories) return { code: 400, message: '"categoryIds" not found' };

  const createdPost = await BlogPost.create({ userId: id, title, content, categoryIds });

  await categoryIds.map((tag) => PostCategory.create({ postId: createdPost.id, categoryId: tag }));

  const newPost = {
    id: createdPost.id,
    userId: createdPost.userId,
    title: createdPost.title,
    content: createdPost.content,
  };

  return { code: 201, newPost };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    attributes: { exclude: ['UserId'] },
    include: [{
      model: User,
      as: 'user',
      attributes: ['id', 'displayName', 'email', 'image'],
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });

  return { code: 200, posts };
};

module.exports = {
  createPost,
  getAllPosts,
};