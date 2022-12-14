const userService = require('../services/user.service.js');

const getAll = async (req, res) => {
  const result = await userService.getAll();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await userService.getById(id);
  if (!result) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(result);
};

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  return res.status(201).json({ token: result });
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  await userService.deleteUser(id);
  return res.status(204).send();
};

module.exports = {
  getAll,
  getById,
  createUser,
  deleteUser,
};