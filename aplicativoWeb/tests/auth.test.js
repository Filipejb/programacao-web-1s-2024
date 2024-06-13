const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app');

describe('API de Autenticação', () => {
  it('deve registrar um novo usuário', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({ username: 'testuser', email: 'teste6@example.com', password: 'password' });
    console.log('Resposta de registro:', res.body);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('message').to.equal('Usuário registrado com sucesso');
    expect(res.body).to.have.property('user');
  });

  it('deve fazer login de um usuário existente', async () => {
    await request(app)
      .post('/auth/register')
      .send({ username: 'testuser', email: 'teste6@example.com', password: 'password' });
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'teste6@example.com', password: 'password' });
    console.log('Resposta de login:', res.body);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message').to.equal('Login bem-sucedido');
    expect(res.body).to.have.property('user');
  });

  it('deve fazer logout de um usuário', async () => {
    await request(app)
      .post('/auth/register')
      .send({ username: 'testuser', email: 'teste6@example.com', password: 'password' });
    const loginRes = await request(app)
      .post('/auth/login')
      .send({ email: 'teste6@example.com', password: 'password' });
    const cookies = loginRes.headers['set-cookie'];
    const res = await request(app)
      .post('/auth/logout')
      .set('Cookie', cookies)
      .send();
    console.log('Resposta de logout:', res.body);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message').to.equal('Logout bem-sucedido');
  });

  it('deve atualizar o cadastro do usuário', async () => {
    await request(app)
      .post('/auth/register')
      .send({ username: 'testuser', email: 'teste6@example.com', password: 'password' });
    const loginRes = await request(app)
      .post('/auth/login')
      .send({ email: 'teste6@example.com', password: 'password' });
    const cookies = loginRes.headers['set-cookie'];
    const res = await request(app)
      .put('/auth/update')
      .set('Cookie', cookies)
      .send({ username: 'updateduser', email: 'updated6@example.com' });
    console.log('Resposta de atualização:', res.body);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message').to.equal('Usuário atualizado com sucesso');
    expect(res.body).to.have.property('user');
  });
});
