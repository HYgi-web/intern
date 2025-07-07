const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');

router.post('/', leaveController.submitLeaveApplication);

router.get('/', leaveController.getAllLeaveApplications);

module.exports = router;
