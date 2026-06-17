const sqlServer = require('mssql')

const dbConfig = {
    user: '',
    password: '',
    server: 'localhost',
    database: 'Bad_BTienda',
    options: {
        encrypt: false,
        TrustServerCertificate: true
    }
}

const conexion = async()=>{
    try {
        const pool = await sqlServer.connect(dbConfig)
        return pool
        
    } catch (error) {
        console.log('Error en la conexion: ',error)
    }
}

module.exports = conexion