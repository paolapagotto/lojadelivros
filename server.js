const express = require('express');
const app = express();

const port = 3000;

app.listen(port, function(){
    console.log('Servidor rodando: http://localhost:'+port)
})

app.get('/', function(req, resp){
    resp.send(`
    <html>
        <head>
            <meta charset = "utf-8">
        </head>
        <body>
            <h1>Casa do Código </h1>
        </body>
    </html>
    `)
})


app.get('/livros', function(req, resp){
    resp.send(`
    <html>
        <head>
            <meta charset = "utf-8">
        </head>
        <body>
            <h1>Listagem de Livros</h1>
        </body>
    </html>
    `)
})
