const Users = require('../models/users');

//CREATE
exports.create = async (body) => {
  try {
    return await Users.create(body);
  } catch (err) {
    console.log('create', err);
  }
};

//READ
exports.read = async (req, res) => {
  try {
    return await Users.read();
  } catch (err) {
    console.log('getUsers', err);
  }
};

//UPDATE
exports.update = async (body) => {
  try {
    return await Users.update(body);
  } catch (err) {
    console.log('update', err);
  }
};

//DELETE
exports.delete = async (id) => {
  try {
    await Users.delete(id);
  } catch (err) {
    console.log('delete', err);
  }
};
