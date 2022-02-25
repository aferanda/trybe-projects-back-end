const schema = require('../schemas/sales');

module.exports = (req, res, next) => {
  const { error } = schema.validate({ value: req.body });

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  return next();
};
