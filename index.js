const express = require('express');
require('colors');
require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler');
const connectDB = require('./config/db');

//connect to database
connectDB();

const port = process.env.PORT || 4000;
const app = express();

//Middleware to parse incoming JSON requests used in API handle JSON  payloads.
app.use(express.json());

app.use('/api/blogs', require('./routes/postRoutes'));

app.listen(port, () => console.log(`Server running on port: ${port}`.blue));
