

const express = require('express');
const router = express.Router();
const path = require('path');
const tabelaController = require('../controllers/tabelaController');


router.get('/api/itens', tabelaController.buscarTodos);


router.post('/api/itens', tabelaController.adicionar);


router.get('/api/itens/:id', tabelaController.buscarItem);


router.put('/api/itens/:id', tabelaController.atualizar);


router.delete('/api/itens/:id', tabelaController.excluir);


router.get('/api/saldoTotal', tabelaController.calcularSaldoTotal);



module.exports = router;
