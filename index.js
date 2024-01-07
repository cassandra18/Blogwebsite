const express = require('express');
require('colors');
require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');

//connect to database
connectDB();

const port = process.env.PORT || 4000;
const app = express();

//MIddleware to log the request body
app.use((req, res, next) => {
    console.log('Request body: ', req.body);
    next();
});


//Middleware to parse incoming JSON requests used in API handle JSON  payloads.
app.use(express.json());

app.use('/api/blogs', require('./routes/postRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/user', require('./routes/userRoutes'));


app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`.blue));
