var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

//LOGIN
router.post('/', loginController.login);

module.exports = router;