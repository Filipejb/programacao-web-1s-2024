const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authmiddleware');

router.post('/api/cadastro', usuarioController.cadastro);
router.post('/api/login', usuarioController.login);
router.put('/api/alterar-login', authMiddleware.verifyToken, usuarioController.alterarLogin);
router.post('/api/logout', usuarioController.logout);


module.exports = router;
