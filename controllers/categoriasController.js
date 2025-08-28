const categories = require("../data/categorias")
const productos = require("../data/productos")

const categoriasController = {
    categoryDetail: (req, res) => {
        const cat = categories.find(c => c.id === req.params.id);
        const prods = productos.filter( p => p.categoria === cat.id)
        if (!cat) return res.redirect('/');
        res.render('category', { title: cat.title, category: cat, categories, productos: prods });
    }
}

module.exports = categoriasController;