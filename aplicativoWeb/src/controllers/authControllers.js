const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log('Tentando registrar usuário:', { username, email, password });

    if (!username || !email || !password) {
      console.log('Erro: Todos os campos são obrigatórios');
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log('Erro: Email já está em uso');
      return res.status(400).json({ message: 'Email já está em uso' });
    }

    const user = await User.create({ username, email, password });
    res.status(201).json({ message: 'Usuário registrado com sucesso', user });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Tentando logar usuário:', { email, password });

    if (!email || !password) {
      console.log('Erro: Todos os campos são obrigatórios');
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      console.log('Erro: Email ou senha inválido');
      return res.status(401).json({ message: 'Email ou senha inválido' });
    }

    res.status(200).json({ message: 'Login bem-sucedido', user });
  } catch (error) {
    console.error('Erro ao logar usuário:', error);
    res.status(400).json({ message: error.message });
  }
};
