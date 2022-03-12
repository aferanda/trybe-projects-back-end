const userServices = require('../services/user.services');

const createUser = async (req, res) => {
  const { code, token, message } = await userServices.createUser(req.body);

  if (message) return res.status(code).json({ message });

  return res.status(code).json({ token });
};

module.exports = {
  createUser,
};