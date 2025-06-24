const express = require('express');
const router = express.Router();
const hostelController = require('../controllers/hostelController');

router.get('/hostel', hostelController.getAllHostels);
router.post('/hostel/apply', hostelController.applyForHostel);

module.exports = router;
