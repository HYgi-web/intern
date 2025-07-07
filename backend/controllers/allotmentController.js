const db = require('../config/db');

// Assigns student to a room in eligible hostels
function assignRoom(student, hostels) {
  const eligibleHostels = hostels.filter(h =>
    h.gender === student.gender &&
    h.rooms?.some(r => r.occupants < r.capacity)
  );

  for (const hostel of eligibleHostels) {
    const room = hostel.rooms.find(r => r.occupants < r.capacity);
    if (room) {
      room.occupants++;

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

  // Sort by priority: medical → PH → FY Outside Delhi → FY Delhi (by distance DESC) → Seniors no backlogs
  const sortedStudents = students.sort((a, b) => {
    if (a.medical && !b.medical) return -1;
    if (!a.medical && b.medical) return 1;

    if (a.ph && !b.ph) return -1;
    if (!a.ph && b.ph) return 1;

    const aIsFirstYear = a.year === 1;
    const bIsFirstYear = b.year === 1;

    const aOutsideDelhi = a.location !== 'Delhi';
    const bOutsideDelhi = b.location !== 'Delhi';

    if (aIsFirstYear && bIsFirstYear) {
      if (aOutsideDelhi && !bOutsideDelhi) return -1;
      if (!aOutsideDelhi && bOutsideDelhi) return 1;

      // Both same category → sort by distance descending
      return b.distance - a.distance;
    }

    if (aIsFirstYear && !bIsFirstYear) return -1;
    if (!aIsFirstYear && bIsFirstYear) return 1;

    // Seniors: prefer those without backlogs
    if (!a.backlogs && b.backlogs) return -1;
    if (a.backlogs && !b.backlogs) return 1;

    return 0;
  });

  const maleHostels = hostels.filter(h => h.gender === 'male');
  const femaleHostels = hostels.filter(h => h.gender === 'female');

  sortedStudents.forEach(student => {
    const genderHostels = student.gender === 'male' ? maleHostels : femaleHostels;
    assignRoom(student, genderHostels);
  });

  res.status(200).json({ message: 'Allotment completed with corrected priority order.' });
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
