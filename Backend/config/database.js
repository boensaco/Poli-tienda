const sqlServer = require('mssql');

const dbConfig = {
    user: 'sa',
    password: 'Rigoberto97',
    server: 'localhost',
    database: 'Bad_BTienda',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const conexion = async () => {
    try {
        const pool = await sqlServer.connect(dbConfig);
        console.log('Conectado a SQL Server');
        return pool;
    } catch (error) {
        console.error('========== ERROR SQL ==========');
        console.error(error);
        console.error('===============================');
        throw error;
    }
};

module.exports = conexion;