require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

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