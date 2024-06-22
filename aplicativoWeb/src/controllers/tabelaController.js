
const Tabela = require('../models/tabelaModel');


exports.buscarTodos = async (req, res) => {
    try {
        const itens = await Tabela.findAll();
        res.json(itens);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar itens.' });
    }
};


exports.adicionar = async (req, res) => {
    try {
        const { descricao, valor, tipo } = req.body;
        const novoItem = await Tabela.create({ descricao, valor, tipo });
        res.json(novoItem);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar item.' });
    }
};


exports.buscarItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Tabela.findByPk(id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: 'Item não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o item.' });
    }
};



exports.atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { descricao, valor, tipo } = req.body;
        await Tabela.update({ descricao, valor, tipo }, { where: { id } });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar item.' });
    }
};


exports.excluir = async (req, res) => {
    try {
        const { id } = req.params;
        await Tabela.destroy({ where: { id } });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir item.' });
    }
};

exports.calcularSaldoTotal = async (req, res) => {
    try {
       
        const itens = await Tabela.findAll();

        let saldoTotal = 0;
        itens.forEach(item => {
            if (item.tipo === 'Ganho') {
                saldoTotal += item.valor;
            } else if (item.tipo === 'Gasto') {
                saldoTotal -= item.valor;
            }
        });

       
        res.json({ saldo: saldoTotal });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao calcular saldo total.' });
    }
};
