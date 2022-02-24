const DB = require('./connection.models');

const getAll = async () => {
  const SQL = `SELECT SProd.sale_id AS saleId, S.date AS date,
              SProd.product_id AS productId, SProd.quantity AS quantity
              FROM StoreManager.sales_products AS SProd
              INNER JOIN StoreManager.sales AS S
              ON SProd.sale_id = S.id`;
  const sales = await DB.execute(SQL);
  return sales;
};

const getById = async (id) => {
  const SQL = `SELECT S.date AS date,
              SProd.product_id AS productId, SProd.quantity AS quantity
              FROM StoreManager.sales_products AS SProd
              INNER JOIN StoreManager.sales AS S
              ON SProd.sale_id = S.id WHERE SProd.sale_id = ?`;
  const sales = await DB.execute(SQL, [id]);
  return sales;
};

module.exports = {
  getAll,
  getById,
};
