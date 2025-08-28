const express = require('express');
const productosController = require('../controllers/productosController');
const router = express.Router();


router.get('/:categoria/:id', productosController.productDetail);


module.exports = router;
