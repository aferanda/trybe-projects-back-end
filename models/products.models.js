const DB = require('./connection.models');

const getAll = async () => {
  const SQL = 'SELECT * FROM StoreManager.products';
  const [products] = await DB.execute(SQL);

  return products;
};

module.exports = {
  getAll,
};
