const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');
const sequelize = require('./src/database/connection');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

sequelize.sync().then(() => {
  app.listen(8900, () => {
    console.log('Servidor rodando na porta 9900');
  });
}).catch(err => {
  console.error('Erro ao sincronizar banco de dados:', err);
});

module.exports = app;

