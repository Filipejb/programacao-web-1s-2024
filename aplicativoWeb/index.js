
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./src/db');
const tabelaRoute = require('./src/routes/tabelaRoute');
const usuarioRoute = require('./src/routes/usuarioRoute');




const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'src/views')));

app.use(tabelaRoute);
app.use('/',usuarioRoute);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src' , 'views' , 'login.html'));
});





const PORT = process.env.PORT || 4000;

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => {
  console.error('Erro ao sincronizar com o banco de dados:', error);
});
