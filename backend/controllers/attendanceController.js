const db = require('../config/db'); // This is your dummy data source


exports.getAttendanceByMonth = (req, res) => {
  const { studentId, month } = req.params;

  if (!db.attendance[studentId] || !db.attendance[studentId][month]) {
    return res.status(404).json({ error: 'Attendance data not found' });
  }

  res.status(200).json(db.attendance[studentId][month]);
};

exports.setAttendanceData = (req, res) => {
  const { studentId, month } = req.params;
  const { total, present, absent, leave, updated } = req.body;

  if (!total || !present || absent === undefined || leave === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!db.attendance[studentId]) {
    db.attendance[studentId] = {};
  }

  db.attendance[studentId][month] = { total, present, absent, leave, updated };

  res.status(201).json({ message: 'Attendance saved successfully' });
};
