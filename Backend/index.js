const express = require('express')
const router = require('./routes/router')
const app = express()


app.use('/api',router)

app.listen(4000, () => {
    console.log('Prendi el servidor y esta en el puerto 4000')
}) 