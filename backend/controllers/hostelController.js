const db = require('../config/db');

exports.getAllHostels = (req, res) => {
  res.status(200).json(db.hostels);
};

exports.applyForHostel = (req, res) => {
  const {
    name,
    rollNumber,
    gender,
    program,
    year,
    location,           // 'Delhi' or 'Outside Delhi'
    isPH,               // boolean
    isNRI,              // optional
    isForeign,          // optional
    isMedicalCase,      // boolean
    distanceFromHome,
    hasBacklogs
  } = req.body;

  // Validation
  if (!name || !rollNumber || !gender || !program || !year || !location) {
    return res.status(400).json({ error: 'Required student details missing' });
  }

  const alreadyExists = db.students.some(s => s.rollNumber === rollNumber);
  if (alreadyExists) {
    return res.status(409).json({ error: 'Student with this roll number already applied' });
  }

  const newStudent = {
    id: db.students.length + 1,
    name,
    rollNumber,
    gender,
    program,
    year,
    location,                // 'Delhi' or 'Outside Delhi'
    medical: Boolean(isMedicalCase),
    ph: Boolean(isPH),
    nri: Boolean(isNRI),
    foreign: Boolean(isForeign),
    distance: Number(distanceFromHome),
    backlogs: Boolean(hasBacklogs),
    assignedHostel: null,
    assignedRoom: null,
    allotmentDate: null,
    status: 'Applied'
  };

  db.students.push(newStudent);

  res.status(201).json({
    message: 'Hostel application submitted successfully',
    studentId: newStudent.id
  });
};
