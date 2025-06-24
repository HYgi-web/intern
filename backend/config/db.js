// mock database for testing hostel allotment in VS Code

const db = {
  students: [
    {
      id: 1,
      name: 'Chitra Kadyan',
      gender: 'female',
      program: 'B.Tech',
      year: 1,
      category: 'General',
      distanceFromHome: 25,
      hasBacklogs: false
    },
    {
      id: 2,
      name: 'Aarohi Sharma',
      gender: 'female',
      program: 'M.Tech',
      year: 1,
      category: 'OBC',
      distanceFromHome: 45,
      hasBacklogs: false
    }
  ],

  hostels: [
    {
      id: 1,
      name: 'Aryabhatt Hostel',
      gender: 'female',
      location: 'North Campus',
      programQuotas: { 'B.Tech': 2, 'M.Tech': 1 },
      rooms: [
        { id: 1, roomNumber: 'A101', capacity: 2, occupants: 1 },
        { id: 2, roomNumber: 'A102', capacity: 2, occupants: 0 }
      ]
    },
    {
      id: 2,
      name: 'Ramanujan Hostel',
      gender: 'female',
      location: 'South Campus',
      programQuotas: { 'B.Tech': 1, 'M.Tech': 2 },
      rooms: [
        { id: 3, roomNumber: 'R101', capacity: 3, occupants: 2 },
        { id: 4, roomNumber: 'R102', capacity: 3, occupants: 1 }
      ]
    }
  ],

  criteria: [
    { id: 1, type: 'Distance Priority', value: 'High' },
    { id: 2, type: 'Category Reservation', value: 'SC:15,OBC:27,GEN:58' }
  ],

  allotments: [
    // populated by runAllotment
  ]
};

module.exports = db;
