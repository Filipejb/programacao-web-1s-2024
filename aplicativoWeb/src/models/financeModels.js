const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection').sequelize; // Adicione .sequelize aqui

const Finance = sequelize.define('Finance', {
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Finance;
