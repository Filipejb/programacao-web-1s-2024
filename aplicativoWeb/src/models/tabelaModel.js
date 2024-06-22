
const Sequelize = require('sequelize');
const db = require('../db');

const Tabela = db.define('tabela', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    valor: { 
        type: Sequelize.FLOAT,
        allowNull: false
    },
    tipo: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Tabela;
