// src/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers'); // Caminho relativo correto

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.put('/update', authController.updateUser);

module.exports = router;
