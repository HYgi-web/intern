let leaveApplications = [];

exports.submitLeaveApplication = (req, res) => {
    const {
        studentName,
        roomNo,
        studentId,
        leaveType,
        startDate,
        endDate,
        reason,
        personalContact,
        parentContact
    } = req.body;

    if (!studentName || !studentId || !startDate || !endDate || !reason) {
        return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    const newApplication = {
        id: leaveApplications.length + 1,
        studentName,
        roomNo,
        studentId,
        leaveType,
        startDate,
        endDate,
        reason,
        personalContact,
        parentContact,
        submittedAt: new Date()
    };

    leaveApplications.push(newApplication);

    return res.status(201).json({
        message: 'Leave application submitted successfully.',
        application: newApplication
    });
};

exports.getAllLeaveApplications = (req, res) => {
    res.status(200).json(leaveApplications);
};
