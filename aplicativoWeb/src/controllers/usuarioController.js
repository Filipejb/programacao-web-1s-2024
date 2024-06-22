const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcrypt');


exports.cadastro = async (req, res) => {
    try {
        const { email, senha } = req.body;

        
        const userExists = await Usuario.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ error: "Usuário já existe." });
        }

        
        const hashedPassword = await bcrypt.hash(senha, 10);

        
        const newUser = await Usuario.create({ email, senha: hashedPassword });

        res.status(201).json(newUser);
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        res.status(500).json({ error: 'Erro ao registrar usuário.' });
    }
};



exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const user = await Usuario.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: "Credenciais inválidas." });
        }

        const passwordMatch = await bcrypt.compare(senha, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Credenciais inválidas." });
        }

        res.json({ success: true, message: "Login bem-sucedido." });
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).json({ error: "Erro ao fazer login." });
    }
};

exports.alterarLogin = async (req, res) => {
    try {
        const { newEmail, senha } = req.body;
        const userId = req.user.id;

        console.log("ID do usuário:", userId);

        const user = await Usuario.findByPk(userId);
        if (!user) {
            console.error("Usuário não encontrado.");
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        const passwordMatch = await bcrypt.compare(senha, user.password);
        if (!passwordMatch) {
            console.error("Senha incorreta.");
            return res.status(401).json({ error: "Senha incorreta." });
        }

        console.log("Email atual do usuário:", user.email);
        
        user.email = newEmail;
        await user.save();
        
        console.log("Email alterado para:", newEmail);
        res.json({ success: true });
    } catch (error) {
        console.error("Erro ao alterar o login:", error);
        res.status(500).json({ error: "Erro ao alterar o login." });
    }
};

exports.logout = async (req, res) => {
    
    res.json({ success: true, message: 'Logout realizado com sucesso.' });
};
