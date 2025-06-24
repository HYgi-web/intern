const db = require('../config/db');

exports.getAllStudents = (req, res) => {
  res.status(200).json(db.students);
};

exports.createStudent = (req, res) => {
  const { name, rollNumber, branch, year, category, distanceFromHome } = req.body;

  if (!name || !rollNumber) {
    return res.status(400).json({ error: 'Name and Roll Number are required' });
  }

  const newStudent = {
    id: db.students.length + 1,
    name,
    rollNumber,
    branch,
    year,
    category,
    distanceFromHome
  };

  db.students.push(newStudent);

  res.status(201).json({
    message: '✅ Student created successfully',
    studentId: newStudent.id
  });
};

exports.getStudentById = (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = db.students.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  res.status(200).json(student);
};

exports.updateStudent = (req, res) => {
  const studentId = parseInt(req.params.id);
  const { name, rollNumber, branch, year, category, distanceFromHome } = req.body;

  const index = db.students.findIndex(s => s.id === studentId);
  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  db.students[index] = {
    id: studentId,
    name,
    rollNumber,
    branch,
    year,
    category,
    distanceFromHome
  };

  res.status(200).json({ message: '✅ Student updated successfully' });
};

exports.deleteStudent = (req, res) => {
  const studentId = parseInt(req.params.id);

  const index = db.students.findIndex(s => s.id === studentId);
  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  db.students.splice(index, 1);

  res.status(200).json({ message: '✅ Student deleted successfully' });
};
