const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Bem Vindo ao chat');
});

const server = app.listen(8080, ()=> {
    console.log("Servidor iniciado na porta 8080:")
});

