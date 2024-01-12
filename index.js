const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const connection = require('./dataBase/database')
const perguntaModel = require('./dataBase/Pergunta')

connection
    .authenticate()
    .then(() => {
    console.log("conectado")
    }).catch((msgErro) => {
        console.log(msgErro)
})


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/incluirpergunta', (req, res)  => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("recebido! título: " + titulo + " " + " descrição: " + descricao)
})

app.listen(3000, ()=>{
    console.log('Servidor no ar');
});