const loginServices = require('../services/login.services');

const login = async (req, res) => {
  const { code, token, message } = await loginServices.login(req.body);

  if (message) return res.status(code).json({ message });

  return res.status(code).json({ token });
};

module.exports = {
  login,
};