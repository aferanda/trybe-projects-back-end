const DB = require('./connection.models');

const getAll = async () => {
  const SQL = `SELECT SProd.sale_id AS saleId, S.date AS date,
              SProd.product_id AS productId, SProd.quantity AS quantity
              FROM StoreManager.sales_products AS SProd
              INNER JOIN StoreManager.sales AS S
              ON SProd.sale_id = S.id`;
  const [sales] = await DB.execute(SQL);
  return sales;
};

const getById = async (id) => {
  const SQL = `SELECT S.date AS date,
              SProd.product_id AS productId, SProd.quantity AS quantity
              FROM StoreManager.sales_products AS SProd
              INNER JOIN StoreManager.sales AS S
              ON SProd.sale_id = S.id WHERE SProd.sale_id = ?`;
  const [sales] = await DB.execute(SQL, [id]);
  return sales;
};

const createSaleId = async () => {
  const SQL = 'INSERT INTO StoreManager.sales () VALUES ()';
  const [sale] = await DB.execute(SQL);
  return sale.insertId;
};

const createSalesProducts = async (id, productId, quantity) => {
  const SQL = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
              VALUES (?, ?, ?)`;
  const [salesProducts] = await DB.execute(SQL, [id, productId, quantity]);
  return salesProducts;
};

const update = async (productId, quantity, id) => {
  const SQL = `UPDATE StoreManager.sales_products
              SET product_id = ?, quantity = ?
              WHERE sale_id = ? AND product_id = ?`;
  const [sale] = await DB.execute(SQL, [productId, quantity, id, productId]);
  return sale;
};

const remove = async (id) => {
  const SQL = 'DELETE FROM StoreManager.sales_products WHERE sale_id = ?';
  const [sale] = await DB.execute(SQL, [id]);

  const SQLSale = 'DELETE FROM StoreManager.sales WHERE id = ?';
  await DB.execute(SQLSale, [id]);

  return sale;
};

module.exports = {
  getAll,
  getById,
  createSaleId,
  createSalesProducts,
  update,
  remove,
};
