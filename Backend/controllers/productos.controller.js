const model = require('../models/productos.model');

class ProductosController{
    static async obtenerProductos(req, res){
        const productos = await model.obtenerProductos()
        res.json({data: productos})
    }
}

module.exports = ProductosController