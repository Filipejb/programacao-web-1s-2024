
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Usuario = db.define('Usuario', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
module.exports = Usuario;
