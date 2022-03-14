const postServices = require('../services/post.services');

const createPost = async (req, res) => {
  const { id } = req.tokenData;
  const { code, newPost, message } = await postServices.createPost(req.body, id);

  if (message) return res.status(code).json({ message });

  return res.status(code).json(newPost);
};

const getAllPosts = async (req, res) => {
  const { code, posts } = await postServices.getAllPosts();

  return res.status(code).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { code, post, message } = await postServices.getPostById(id);

  if (message) return res.status(code).json({ message });

  return res.status(code).json(post);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};