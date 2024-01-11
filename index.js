const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var nome = "bruno"
    var lang = "JavaScript"
    res.render('index',{
        nome:nome,
        lang:lang,
        empresa: 'brn solutions'
    });
});

app.listen(3000, ()=>{
    console.log('Servidor no ar');
});