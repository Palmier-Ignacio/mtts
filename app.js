const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const categoriasRouter = require("./routes/categorias")
const productosRouter = require("./routes/productos")
const expressLayouts = require('express-ejs-layouts');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);            
app.set('layout', 'layouts/layout'); 
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: 587,
  auth: {
    user: "52346dae1b601804c7b556eef83d8371",     // lo que copiaste de Mailjet
    pass: "174233c74bbb5a35225da422e3c8efb4"   // lo que copiaste de Mailjet
  }
});

app.post("/enviar", (req, res) => {
  const { nombre, emailPhone, mensaje, apellido} = req.body;

  const mailOptions = {
    from: '"Palmier Ignacio" <palmier.ignacio.nicolas@gmail.com>', 
    to: "npnaacho@gmail.com", 
    subject: `Nuevo mensaje de ${nombre + " " + apellido} desde el formulario web`,
    html: `
  <h3>Nuevo mensaje desde la web.</h3>
  <p><b>Nombre:</b> ${nombre + " " + apellido}</p>
  <p><b>Email:</b> ${emailPhone}</p>
  <p><b>Mensaje:</b> ${mensaje}</p>
`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar correo:", error);
      res.redirect("/?status=error#contacto");
    }
    console.log("Correo enviado:", info.response);
    res.redirect("/?status=ok#contacto");
  });
});

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
