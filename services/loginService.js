const Users = require('../models/users');

//LOGIN
exports.login = async (body) => {
    try {
      return await Users.login(body);
    } catch (err) {
      console.log('login', err);
    }
  };