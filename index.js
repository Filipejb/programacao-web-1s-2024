const express = require('express');
const mustacheExpress = require('mustacheExpress');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res){
    res.render('index.html');
});

app.post('/dados', function(req, res){
    let form = rq.body
    console.log(form)
    res.render('dados.html',{dados});
});

const PORT = 8080;
app.listen (PORT, function(){
    console.log ("app executando na porta"+ PORT)
});