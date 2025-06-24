const db = require('../config/db');

// Utility function to assign a room
function assignRoom(student, hostels) {
  const eligibleHostels = hostels.filter(h =>
    h.gender === student.gender &&
    h.programQuotas?.[student.program] > 0 &&
    h.rooms?.some(r => r.occupants < r.capacity)
  );

  for (const hostel of eligibleHostels) {
    const room = hostel.rooms.find(r => r.occupants < r.capacity);
    if (room) {
      room.occupants++;
      hostel.programQuotas[student.program]--;

      student.assignedHostel = hostel.name;
      student.assignedRoom = room.roomNumber;
      student.allotmentDate = new Date().toISOString().split('T')[0];

      db.allotments.push({
        id: db.allotments.length + 1,
        studentId: student.id,
        roomId: room.id
      });

      return;
    }
  }

  student.assignedHostel = null;
  student.status = 'Waiting List';
}

exports.runAllotment = (req, res) => {
  const students = db.students;
  const hostels = db.hostels;

  // Example: split by gender
  const maleStudents = students.filter(s => s.gender === 'male');
  const femaleStudents = students.filter(s => s.gender === 'female');

  const maleHostels = hostels.filter(h => h.gender === 'male');
  const femaleHostels = hostels.filter(h => h.gender === 'female');

  [...maleStudents, ...femaleStudents].forEach(student => {
    assignRoom(student, student.gender === 'male' ? maleHostels : femaleHostels);
  });

  res.status(200).json({ message: '✅ Allotment process completed.' });
};

exports.getAllotments = (req, res) => {
  const fullAllotments = db.allotments.map(allot => {
    const student = db.students.find(s => s.id === allot.studentId);
    const room = db.rooms.find(r => r.id === allot.roomId);
    return {
      studentId: student.id,
      name: student.name,
      roomNumber: room?.roomNumber || 'N/A',
      hostel: student.assignedHostel || 'Not Allotted',
      date: student.allotmentDate || 'N/A'
    };
  });

  res.status(200).json(fullAllotments);
};
