const DB = require('./connection.models');

const getAll = async () => {
  const SQL = 'SELECT * FROM StoreManager.products';
  const [products] = await DB.execute(SQL);
  return products;
};

const getById = async (id) => {
  const SQL = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await DB.execute(SQL, [id]);
  return product;
};

const findByName = async (name) => {
  const SQL = 'SELECT * FROM StoreManager.products WHERE name = ?';
  const [product] = await DB.execute(SQL, [name]);
  return product;
};

const create = async (name, quantity) => {
  const SQL = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
  const [product] = await DB.execute(SQL, [name, quantity]);
  return product;
};

const updateByName = async (name, quantity, id) => {
  const SQL = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';
  const [product] = await DB.execute(SQL, [name, quantity, id]);
  return product;
};

const updateById = async (quantity, id) => {
  const SQL = 'UPDATE StoreManager.products SET quantity = ? WHERE id = ?';
  const [product] = await DB.execute(SQL, [quantity, id]);
  return product;
};

const remove = async (id) => {
  const SQL = 'DELETE FROM StoreManager.products WHERE id = ?';
  const [product] = await DB.execute(SQL, [id]);
  return product;
};

module.exports = {
  getAll,
  getById,
  findByName,
  create,
  updateByName,
  remove,
  updateById,
};
