const Users = require('../models/users');

//LOGIN
exports.login = async (account, password) => {
  try {
    return await Users.login(account, password);
  } catch (err) {
    console.log('login', err);
  }
};
