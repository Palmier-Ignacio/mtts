const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const categoriasRouter = require("./routes/categorias")
const productosRouter = require("./routes/productos")
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);            
app.set('layout', 'layouts/layout'); 


const categories = [
  { id: 'madera', title: 'Tornillos y fijaciones para madera', description: 'Gran variedad de productos con stock permanente.', image: 'tornillos_madera.jpg' },
  { id: 'especiales', title: 'Piezas de fijación especiales', description: 'Diseños a medida según la necesidad del cliente.', image: 'piezas_especiales.jpg' },
  { id: 'plasticos', title: 'Fijaciones para plásticos', description: 'Tornillos y fijaciones de alta precisión.', image: 'fijaciones_plasticos.jpg' },
  { id: 'motores', title: 'Fijaciones para motores eléctricos', description: 'Amplia línea de tornillos, bulones y espárragos.', image: 'fijaciones_motores.jpg' }
];
app.use((req, res, next) => {
  res.locals.categories = categories;
  next();
});

app.use('/', indexRouter);
app.use('/categoria', categoriasRouter);
app.use('/producto', productosRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
