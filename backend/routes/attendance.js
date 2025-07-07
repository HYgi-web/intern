const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.get('/:studentId/:month', attendanceController.getAttendanceByMonth);

router.post('/:studentId/:month', attendanceController.setAttendanceData);

module.exports = router;
