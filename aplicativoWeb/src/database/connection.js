const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

const createTable = async () => {
  await sequelize.sync();
  console.log('Tabelas criadas com sucesso');
};

module.exports = { sequelize, createTable };
