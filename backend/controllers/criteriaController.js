const db = require('../config/db');

// Get all existing criteria
exports.getAllCriteria = (req, res) => {
  res.status(200).json(db.criteria);
};

// Add or update criteria
exports.setCriteria = (req, res) => {
  const { type, value } = req.body;

  if (!type || !value) {
    return res.status(400).json({ error: 'Both type and value are required' });
  }

  // Check if this type already exists
  const index = db.criteria.findIndex(c => c.type === type);

  if (index !== -1) {
    db.criteria[index].value = value; // update
  } else {
    const newCriteria = {
      id: db.criteria.length + 1,
      type,
      value
    };
    db.criteria.push(newCriteria);
  }

  res.status(200).json({ message: 'Criteria set successfully', criteria: db.criteria });
};
