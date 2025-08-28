const express = require('express');
const categoriasController = require('../controllers/categoriasController');
const router = express.Router();


router.get('/:id', categoriasController.categoryDetail);


module.exports = router;
