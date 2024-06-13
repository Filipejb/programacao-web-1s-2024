// src/controllers/financeController.js

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
        res.status(201).send({ message: 'Produto/Transação cadastrado com sucesso', id });
      }
    });
  },

  updateFinance: (req, res) => {
    const { id } = req.params;
    const { description, amount, date } = req.body;
    Finance.update(id, description, amount, date, (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send({ message: 'Produto/Transação atualizado com sucesso' });
      }
    });
  },

  deleteFinance: (req, res) => {
    const { id } = req.params;
    Finance.delete(id, (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send({ message: 'Produto/Transação deletado com sucesso' });
      }
    });
  }
};

module.exports = financeController;
