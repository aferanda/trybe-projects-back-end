const salesModels = require('../models/sales.models');
const salesServices = require('../services/sales.services');

const getAll = async (_req, res) => {
  const sales = await salesModels.getAll();
  return res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sales = await salesModels.getById(id);

  if (sales.length === 0) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(sales);
};

const create = async (req, res) => {
  const { code, response, message } = await salesServices.create(req.body);
  if (message) return res.status(code).json({ message });
  return res.status(code).json(response);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { code, response, message } = await salesServices.update(req.body, id);

  if (message) return res.status(code).json({ message });

  return res.status(code).json(response);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { code, message } = await salesServices.remove(id);

  if (message) return res.status(code).json({ message });

  return res.status(code).end();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
