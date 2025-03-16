const express = require('express');
const dotenv = require('dotenv');
const app = express();

const studentRouter = require('./routes/StudentRoutes');

const mongoose = require('mongoose');
dotenv.config();
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('MongoDB connection error:', err.message));

app.use('/', studentRouter);

app.listen(process.env.PORT || 3001);