const loginService = require('../services/loginService');

//LOGIN
exports.login = async (req, res) => {
  console.log('body', req.body);
  let { account, password } = req.body;
  //res.json("create body received")
  try {
    const data = await loginService.login(account, password);
    return res.json(data);
    // await loginService.login();
    // return console.log("exist");
  } catch (err) {
    console.log(err);
  }
};
