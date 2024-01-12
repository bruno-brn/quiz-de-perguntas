const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const connection = require('./dataBase/database')
const pergunta = require('./dataBase/Pergunta')

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
    pergunta.findAll({ raw: true, order:[
        ['id','DESC']
    ]}).then(perguntas => {
        res.render('index',{
            pergunta: perguntas
        })
    })
});

app.get('/incluirpergunta', (req, res)  => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })
})

app.listen(3000, ()=>{
    console.log('Servidor no ar');
});