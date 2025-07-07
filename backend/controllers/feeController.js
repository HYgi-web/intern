const db = require('../config/db');

// Simulate SQL SELECT for hostel receipt
exports.printHostelFee = (req, res) => {
  const { studentId } = req.query;

  const record = db.payments.find(
    (p) => p.studentId == studentId && p.feeType === 'hostel'
  );

  if (!record) {
    return res.status(404).json({ error: 'No hostel fee record found' });
  }

  res.status(200).json({
    feeType: 'Hostel Fees',
    amount: record.amount,
    status: 'PAID',
    date: record.date,
    receiptId: record.paymentId,
  });
};

// Simulate SQL SELECT for mess receipt
exports.printMessFee = (req, res) => {
  const { studentId } = req.query;

  const record = db.payments.find(
    (p) => p.studentId == studentId && p.feeType === 'mess'
  );

  if (!record) {
    return res.status(404).json({ error: 'No mess fee record found' });
  }

  res.status(200).json({
    feeType: 'Mess Fees',
    amount: record.amount,
    status: 'PAID',
    date: record.date,
    receiptId: record.paymentId,
  });
};

// Simulate SQL INSERT for hostel fee payment
exports.hostelFeePayment = (req, res) => {
  const { studentId, amount } = req.body;

  if (!studentId || !amount) {
    return res.status(400).json({ error: 'studentId and amount are required' });
  }

  const studentExists = db.students.some((s) => s.id == studentId);
  if (!studentExists) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const alreadyPaid = db.payments.some(
    (p) => p.studentId == studentId && p.feeType === 'hostel'
  );
  if (alreadyPaid) {
    return res.status(400).json({ error: 'Hostel fee already paid' });
  }

  const record = {
    studentId,
    feeType: 'hostel',
    amount,
    date: new Date().toLocaleDateString(),
    paymentId: 'HSTL' + Date.now(),
  };

  db.payments.push(record);
  res.status(201).json({ message: 'Hostel fee payment successful', record });
};

// Simulate SQL INSERT for mess fee payment
exports.messFeePayment = (req, res) => {
  const { studentId, amount } = req.body;

  if (!studentId || !amount) {
    return res.status(400).json({ error: 'studentId and amount are required' });
  }

  const studentExists = db.students.some((s) => s.id == studentId);
  if (!studentExists) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const alreadyPaid = db.payments.some(
    (p) => p.studentId == studentId && p.feeType === 'mess'
  );
  if (alreadyPaid) {
    return res.status(400).json({ error: 'Mess fee already paid' });
  }

  const record = {
    studentId,
    feeType: 'mess',
    amount,
    date: new Date().toLocaleDateString(),
    paymentId: 'MESS' + Date.now(),
  };

  db.payments.push(record);
  res.status(201).json({ message: 'Mess fee payment successful', record });
};
