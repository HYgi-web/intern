const express = require('express');
const router = express.Router();
const wardenController = require('../controllers/detailController');

router.get('/students', wardenController.getAllStudents);

router.get('/students/:hostelId', wardenController.getStudentById);

router.post('/students', wardenController.addStudent);

module.exports = router;
