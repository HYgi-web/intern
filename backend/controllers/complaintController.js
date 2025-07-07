const path = require('path');
const fs = require('fs');

exports.submitComplaint = (req, res) => {
    const { name, rollno, complaint } = req.body;

    if (!name || !rollno || !complaint) {
        return res.status(400).json({ status: 'error', message: 'All fields required' });
    }

    // Simulate saving to DB
    console.log("📩 Complaint received:", { name, rollno, complaint });

    // Handle image (optional)
    if (req.file) {
        console.log("📷 Image uploaded:", req.file.filename);
    }

    return res.status(200).json({ status: 'success' });
};
