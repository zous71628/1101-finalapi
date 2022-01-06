const Posts = require('../models/posts');

//CREATE
exports.create = async (body) => {
  try {
    return await Posts.create(body);
  } catch (err) {
    console.log('create', err);
  }
};

//READ
exports.read = async (req, res) => {
  try {
    return await Posts.read();
  } catch (err) {
    console.log('getUsers', err);
  }
};

//UPDATE
exports.update = async (body) => {
  try {
    return await Posts.update(body);
  } catch (err) {
    console.log('update', err);
  }
};

//DELETE
exports.delete = async (id) => {
  try {
    await Posts.delete(id);
  } catch (err) {
    console.log('delete', err);
  }
};
