const express = require('express');
const allotmentController = require('../controllers/allotmentController');
const router = express.Router();

router.post('/allotment/run',allotmentController.runAllotment);
router.get('/allotment',allotmentController.getAllotments);

module.exports = router;