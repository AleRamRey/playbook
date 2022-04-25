//Usando objeto express
const express = require('express')
//App de Express
const app = express()
//Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000
//Path inicial, respondera la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hola Mundo desde mi servidor express')
})
//Con esto inicializamos la app
app.listen(port, () => {
  console.log(`Example app listening or port ${port}`)
})

//Agregan nueva ruta   
//localhost:3000/launchx
app.get('/launchx', (req, res) => {
  res.send('Bienvenidos a launchx')
})


//Agrega nueva ruta y regresa un objeto  
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
  const explorer = {name: "Alex", msg: "Hola"}
  res.send(explorer)
})


//Agrega nueva ruta que reciba query params
//http://localhost:3000/explorers/alex
//req.params = {"explorerName":"alex"}
app.get('/explorers/:explorerName', (req, res) => {
  res.send(req.params)
})