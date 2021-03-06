const express = require("express");
const path = require('path');
const Err = require('./utility/error');
const globalErrorHandler = require('./utility/globalErrorHandler');
const videoRoutes = require('./routes/videoRoutes')
const blogRoutes = require('./routes/blogRoutes')
const quizRouter = require('./routes/quizRoutes');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/videos', videoRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/quizs', quizRouter);
app.use(globalErrorHandler);

module.exports = app;