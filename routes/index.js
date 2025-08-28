const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController")

router.get('/', indexController.index);


router.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'Contacto' });
});

router.post('/contacto', (req, res) => {
  res.send('Formulario enviado (simulado)');
});

module.exports = router;
