const db = requier('../config/database')

class ProductosModel{

    static async obtenerProductos(){
        const basedatos = await db()
        const resultados = await basedatos.query('SELECT * FROM productos')
        return resultados 
    }
}

module.exports = ProductosModel
//metodo rapido de prueba
//(async () => {
//   const productos = await ProductosModel.obtenerProductos()
//    console.log(productos)
//})()