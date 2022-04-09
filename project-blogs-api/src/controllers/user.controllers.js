const userServices = require('../services/user.services');

const createUser = async (req, res) => {
  const { code, token, message } = await userServices.createUser(req.body);

  if (message) return res.status(code).json({ message });

  return res.status(code).json({ token });
};

const getAllUsers = async (req, res) => {
  const { code, users } = await userServices.getAllUsers();

  return res.status(code).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { code, message, user } = await userServices.getUserById(id);

  if (message) return res.status(code).json({ message });

  return res.status(code).json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.tokenData;

  const { code } = await userServices.deleteUser(id);

  return res.status(code).send();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};