const path = require('path');
const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
  console.log("Requisição recebida: ", req.body);
  const { num1, num2, operacao } = req.body;

  if (isNaN(num1) || isNaN(num2)) {
    return res.redirect('/?erro=valores_invalidos');
  }

  const resultado = calculadora.calcular(Number(num1), Number(num2), operacao);
  const operacaoNome = calculadora.getOperacaoNome(operacao);

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resultado da Calculadora</title>
    </head>
    <body>
      <h1>Resultado da Operação</h1>
      <p>
        A operação <strong>${operacaoNome}</strong> resultou em:
        <strong>${resultado}</strong>
      </p>
      <a href="/">Voltar</a>
    </body>
    </html>
  `);
};

