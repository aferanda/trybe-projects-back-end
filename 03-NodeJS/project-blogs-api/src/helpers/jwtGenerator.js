const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const token = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);

module.exports = token;