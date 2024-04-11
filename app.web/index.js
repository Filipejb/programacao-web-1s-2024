const express = require("express");
const app = express();
const estoque = require('.src/estoque')

app.get('/adicionar/:id/:nome/:quantidade' ,function(req,res){
    let id = req.params.id;
    let nome = req.params.nome;
    let quantidade = req.params.quantidade;
    let p = estoque.criarProduto(id,nome,quantidade);
    estoque.adicionaProduto(p);
    res.send(p);
});

app.get('/listar', function(req,res){
    res.send(estoque.listarProdutos());
});
app.get('/remover/:id/:nome/:quantidade' ,function(req,res){
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(id);
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app esta rodando na porta ' + PORT)
});

