const { User } = require('../models');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await User.create({ displayName, email, password, image });

  return res.status(201).json(user);
};

module.exports = {
  create,
};