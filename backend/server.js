const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const studentRoutes = require('./routes/studentRoutes');
const hostelRoutes = require('./routes/hostelRoutes');
const criteriaRoutes = require('./routes/criteriaRoutes');
const allotmentRoutes = require('./routes/allotmentRoutes');


app.use('/api', studentRoutes);
app.use('/api', hostelRoutes);
app.use('/api', criteriaRoutes);
app.use('/api', allotmentRoutes);


const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});
app.listen(PORT,() => {
    console.log(`server running at port ${PORT}`);
})