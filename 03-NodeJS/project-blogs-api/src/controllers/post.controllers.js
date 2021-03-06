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

const updatePost = async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.tokenData;
  const { title, content } = req.body;

  const { code, message, updatedPost } = await postServices
    .updatePost(postId, userId, title, content);

  if (message) return res.status(code).json({ message });

  return res.status(code).json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.tokenData;

  const { code, message } = await postServices.deletePost(postId, userId);

  if (message) return res.status(code).json({ message });

  return res.status(code).send();
};

const searchPost = async (req, res) => {
  const { q: queryParam } = req.query;

  const { code, posts } = await postServices.searchPost(queryParam);

  return res.status(code).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};