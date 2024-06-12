const express = require('express');
const router = express.Router();
const financeController = require('../controllers/financeController');

router.get('/finances', financeController.getAllFinances);
router.post('/finances', financeController.createFinance);
router.delete('/finances/:id', financeController.deleteFinance);

module.exports = router;
