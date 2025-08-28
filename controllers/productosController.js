const categories = require("../data/categorias")
const productos = require("../data/productos")

const productosController = {
    productDetail: (req, res) => {
        const producto = productos.find(p => p.id === req.params.id);
        const related = productos.filter(p => p.categoria === producto.categoria && p.id !== producto.id);
        if (!producto) return res.redirect('/');
        res.render('producto', { title: producto.nombre, categories, producto, related });
    }
}

module.exports = productosController;