const express = require('express');
const router = express.Router();
const criteriaController = require('../controllers/criteriaController');

router.get('/criteria',criteriaController.getAllCriteria);
router.post('/criteria',criteriaController.setCriteria);

module.exports = router;