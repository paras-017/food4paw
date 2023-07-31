require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const productRoutes = require('./routes/products')

app.use('/api/products', productRoutes)

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Example app listening on port http://localhost:${port}`)
          })
    } catch (error) {
        console.log(`app.js ${error}`)
    }
}
start()