// tests/finance.test.js

const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app');
const { db, createTable } = require('../src/database/connection');

describe('API de Finanças', () => {
  before(async () => {
    await createTable();
  });

  beforeEach(async () => {
    const db = require('../src/database/connection').sequelize;
    await db.query('DELETE FROM finances');
  });

  it('deve cadastrar um novo produto/transação', async () => {
    const res = await request(app)
      .post('/finances')
      .send({ description: 'Produto Teste', amount: 100.00, date: '2024-06-10' });
    console.log('Resposta de cadastro:', res.body);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('message').to.equal('Produto/Transação cadastrado com sucesso');
    expect(res.body).to.have.property('id');
  });

  it('deve listar todos os produtos/transações', async () => {
    await request(app)
      .post('/finances')
      .send({ description: 'Produto 1', amount: 50.00, date: '2024-06-10' });
    await request(app)
      .post('/finances')
      .send({ description: 'Produto 2', amount: 75.00, date: '2024-06-11' });
    const res = await request(app)
      .get('/finances');
    console.log('Resposta de listagem:', res.body);
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.equal(2);
  });

  it('deve atualizar um produto/transação existente', async () => {
    const createRes = await request(app)
      .post('/finances')
      .send({ description: 'Produto Teste', amount: 100.00, date: '2024-06-10' });
    const productId = createRes.body.id;
    const res = await request(app)
      .put(`/finances/${productId}`)
      .send({ description: 'Produto Atualizado', amount: 150.00, date: '2024-06-11' });
    console.log('Resposta de atualização:', res.body);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message').to.equal('Produto/Transação atualizado com sucesso');
  });

  it('deve excluir um produto/transação existente', async () => {
    const createRes = await request(app)
      .post('/finances')
      .send({ description: 'Produto Teste', amount: 100.00, date: '2024-06-10' });
    const productId = createRes.body.id;
    const res = await request(app)
      .delete(`/finances/${productId}`);
    console.log('Resposta de exclusão:', res.body);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message').to.equal('Produto/Transação deletado com sucesso');
  });
});
