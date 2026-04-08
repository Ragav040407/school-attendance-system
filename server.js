const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/school-attendance', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Teacher Authentication
app.post('/auth/teacher', (req, res) => {
    const { username, password } = req.body;
    // Authentication logic here, e.g., find teacher in database
    // Return JWT or session token on success
    res.json({ message: 'Teacher authenticated' });
});

// Student Management
app.post('/students', (req, res) => {
    const student = req.body;
    // Logic to add a student to the database
    res.json({ message: 'Student added', student });
});

app.get('/students', (req, res) => {
    // Logic to fetch all students from the database
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});

// Attendance Tracking
app.post('/attendance', (req, res) => {
    const { studentId, date, status } = req.body;
    // Logic to track attendance in database
    res.json({ message: 'Attendance recorded', studentId, date, status });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});