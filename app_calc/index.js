const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/calculadora', calculadoraRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

