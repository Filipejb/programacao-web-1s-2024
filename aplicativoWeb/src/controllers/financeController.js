const Finance = require('../models/financeModel');

const financeController = {
    getAllFinances: (req, res) => {
        Finance.getAll((err, finances) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(finances);
            }
        });
    },
    createFinance: (req, res) => {
        const { description, amount, date } = req.body;
        Finance.create(description, amount, date, (err, id) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.status(201).send({ id });
            }
        });
    },
    deleteFinance: (req, res) => {
        const { id } = req.params;
        Finance.delete(id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.status(200).send({ message: 'Registro financeiro excluído' });
            }
        });
    }
};

module.exports = financeController;
