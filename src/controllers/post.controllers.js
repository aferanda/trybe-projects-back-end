const postServices = require('../services/post.services');

const createPost = async (req, res) => {
  const { id } = req.tokenData;
  const { code, newPost, message } = await postServices.createPost(req.body, id);

  if (message) return res.status(code).json({ message });

  return res.status(code).json(newPost);
};

module.exports = {
  createPost,
};