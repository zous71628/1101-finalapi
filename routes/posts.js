var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController');

//CREAT 
router.post('/create', postController.create);

// READ 
router.get('/', postController.read);

//UPDATE
router.post('/update', postController.update);

//DELETE 
router.delete('/delete/:id', postController.delete);

module.exports = router;
