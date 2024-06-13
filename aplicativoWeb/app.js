// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');
const financeRoutes = require('./src/routes/financeRoutes'); // Certifique-se de importar as rotas de finanças corretamente

const app = express();

app.use(bodyParser.json());

// Rotas de autenticação
app.use('/auth', authRoutes);

// Rotas de finanças
app.use('/finances', financeRoutes); // Certifique-se de usar as rotas de finanças corretamente

// Middleware para lidar com erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app; // Exporte o objeto app

app.listen(4200, () => {
  console.log('Server is running on port 4200');
});
