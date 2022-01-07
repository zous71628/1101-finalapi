var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

//CREAT 
router.post('/create', userController.create);

// READ 
router.get('/', userController.read);

//UPDATE
router.post('/update', userController.update);

//DELETE 
router.delete('/delete/:id', userController.delete);



module.exports = router;
