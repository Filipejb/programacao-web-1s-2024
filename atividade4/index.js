const express = require(`express`);

const {somar, subtrair, multiplicar, dividir} = require('./util/calculadora');
const app = express();



app.get('/somar/:a/:b', (req, res) =>{
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = somar(a,b);
  res.send(resultado.toString());
});

app.get('/subtrair/:a/:b', (req, res) =>{
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = subtrair(a,b);
  res.send(resultado.toString());
});

app.get('/multiplicar/:a/:b', (req, res) =>{
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = multiplicar(a,b);
  res.send(resultado.toString());
});

app.get('/dividir/:a/:b', (req, res) =>{
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  try{
    const resultado = dividir(a,b);
    res.send(resultado.toString());
  }catch (erro){
    res.status(400).send(erro.message);
  }
});

app.listen(4000, () =>{
  console.log('Servidor rodando na porta 4000');
});
