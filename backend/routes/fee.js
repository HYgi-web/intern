const express = require('express');
const router = express.Router();
const feeController = require('../controllers/feeController');

router.get('/printHostelFees',feeController.printHostelFee);
router.get('/printMessFees',feeController.printMessFee);
router.post('/hostelFeePayment',feeController.hostelFeePayment);
router.post('/messFeePayment',feeController.messFeePayment);

module.exports = router;
