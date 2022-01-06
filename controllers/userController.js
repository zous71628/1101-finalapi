const router = require('../routes/users');
const userService = require('../services/userService');

//CREATE
exports.create = async (req, res) => {
    console.log('body', req.body);
    //res.json("create body received")
    try {
      let results = await userService.create(req.body);
      console.log('result', JSON.stringify(results));
      res.json('data:{msg:creating successful}');
    } catch (err) {
      console.log(err);
    }
  };

//READ 
exports.read = async (req, res) => {
    try {
        const data = await userService.read();
        return res.json(data);
      }catch (err) {
        console.log('Controller getCategories', err);
      }
  };

//UPDATE
exports.update = async (req, res) => {
    console.log('body', req.body);
    //res.json("create body received")
    try {
      let results = await userService.update(req.body);
      console.log('result', JSON.stringify(results));
      res.json('data:{msg:updating successful}');
    } catch (err) {
      console.log(err);
    }
  };
  
  //DELETE 
  exports.delete = async (req, res) => {
    try {
      await userService.delete(req.params.id);
    } catch (err) {
      console.log(err);
    }
  };