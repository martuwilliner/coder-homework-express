const express = require('express');
const app = express();

const productos = require('./productos.json')

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => console.log("Server iniciado en el http://localhost:" + app.get('port'))); 


// Rutas
app.get('/productos', (req, res) => {
return res.send(productos)
})

app.get('/productoRandom', (req,res) => {

    let number = Math.floor(Math.random() * ((productos.length) - 0) + 0)
    
    return res.send(productos[number])
})