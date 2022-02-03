const express = require("express");
const path = require('path');
const Err = require('./utility/error');
const globalErrorHandler = require('./utility/globalErrorHandler');
const videoRoutes = require('./routes/videoRoutes')
const blogRoutes = require('./routes/blogRoutes')

const app = express();
app.use(express.json());
app.use(globalErrorHandler);

app.use('/api/videos', videoRoutes);
app.use('/api/blogs', blogRoutes);

module.exports = app;