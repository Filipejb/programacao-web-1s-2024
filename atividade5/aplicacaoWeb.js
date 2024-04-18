const express = require('express');
const app = express();


let estoque = [];


app.get('/adicionar/:id/:nome/qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, quantidade: parseInt(qtd) });
    res.send('Produto adicionado ao estoque com sucesso.');
});


app.get('/listar', (req, res) => {
    res.json(estoque);
});


app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send('Produto removido do estoque com sucesso.');
});


app.get('/editar/:id/qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(produto => produto.id === id);
    if (produto) {
        produto.quantidade = parseInt(qtd);
        res.send('Quantidade do produto editada com sucesso.');
    } else {
        res.status(404).send('Produto não encontrado no estoque.');
    }
});


app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080...');
});

