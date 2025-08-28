const categories = require("../data/categorias")
const productos = require("../data/productos")

const productosController = {
    productDetail: (req, res) => {
        const producto = productos.find(p => p.id === req.params.id);
        if (!producto) return res.redirect('/');
        res.render('producto', { title: producto.nombre, categories, producto});
    }
}

module.exports = productosController;