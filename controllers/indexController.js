const categories = require("../data/categorias")

const indexController = {
    index: (req, res) => {
        res.render('index', {
            title: 'Metalúrgica Tesei',
            categories,
            environmentalPolicy: 'Metalúrgica Tesei S.A. asume el desarrollo sostenible como un compromiso hacia el medio ambiente.'
        });
    }
}

module.exports = indexController;