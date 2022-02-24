const DB = require('./connection.models');

const getAll = async () => {
  const SQL = 'SELECT * FROM StoreManager.products';
  const products = await DB.execute(SQL);

  return products;
};

const getById = async (id) => {
  const SQL = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const product = await DB.execute(SQL, [id]);
  return product;
};

module.exports = {
  getAll,
  getById,
};
