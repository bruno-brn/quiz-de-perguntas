const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
        {nome: 'Doritos', preco: 3.14},
        {nome: 'Fanta', preco: 7.15},
        {nome: 'Arroz', preco: 2.69},
    ]


    res.render('index',{
        nome:nome,
        lang:lang,
        empresa: 'brn solutions',
        menssagem: exibirMsg,
        produtos:produtos
    });
});

app.listen(3000, ()=>{
    console.log('Servidor no ar');
});