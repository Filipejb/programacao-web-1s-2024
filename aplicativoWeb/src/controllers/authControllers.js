// src/controllers/authControllers.js
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json({ message: 'Usuário registrado com sucesso', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    res.cookie('session', user.id, { httpOnly: true });
    res.status(200).json({ message: 'Login bem-sucedido', user });
  } catch (error) {
    res.status(401).json({ message: 'Email ou senha inválido' });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('session');
  res.status(200).json({ message: 'Logout bem-sucedido' });
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.session.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    const { username, email, password } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;
    await user.save();

    res.status(200).json({ message: 'Cadastro atualizado com sucesso', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
