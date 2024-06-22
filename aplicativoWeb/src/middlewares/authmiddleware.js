exports.verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); 
    console.log("Token recebido:", token); 

    if (!token) {
        return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Token inválido.' });
    }
};
