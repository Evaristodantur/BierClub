const express = require('express');

let app = express();

app.listen(3000, () =>{ 
    console.log('Servidor Andando!');
});


app.get('/', function(req, res) {
    res.send('Bienvenido al home de BierClub!');
});