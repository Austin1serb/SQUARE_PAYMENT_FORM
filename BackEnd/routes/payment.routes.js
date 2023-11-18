const express = require('express');
const router = express.Router();
const squarePaymentController = require('../controllers/squarePayment.controller');


router.post('/process-payment', squarePaymentController.processPayment);

module.exports = router;
