
let students = [
  {
    hostelId: "H001",
    name: "Priya Sharma",
    rollNo: "24/CS/001",
    roomNo: "101",
    phone: "9876543240",
    email: "priya.sharma@dtu.ac.in",
    pdfUrl: "path/to/priya-form.pdf"
  },
];

exports.getAllStudents = (req, res) => {
  res.status(200).json(students);
};

exports.getStudentById = (req, res) => {
  const student = students.find(s => s.hostelId === req.params.hostelId);
  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};

exports.addStudent = (req, res) => {
  const { hostelId, name, rollNo, roomNo, phone, email, pdfUrl } = req.body;
  if (!hostelId || !name || !rollNo) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newStudent = { hostelId, name, rollNo, roomNo, phone, email, pdfUrl };
  students.push(newStudent);
  res.status(201).json({ message: "Student added", student: newStudent });
};
