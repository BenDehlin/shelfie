require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const productCtrl = require('./controllers/productController')

app.use(cors())
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))
}).catch(err => console.log(err))

//ENDPOINTS
app.get('/api/product/:id', productCtrl.getProduct)
app.get('/api/inventory', productCtrl.getProducts)
app.post('/api/product', productCtrl.postProduct)
app.put('/api/product/:id', productCtrl.putProduct)
app.delete('/api/product/:id', productCtrl.deleteProduct)