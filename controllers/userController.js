const asyncHandler = require('express-async-handler');

const User = require('../models/userSchema');

const userController =  {

    createUser:  asyncHandler(async(req, res) => {

        const { username, email, password } = req.body;

        if(!username || !email || !password) {
            res.status(400);
            throw new Error('All fields are required!');
        };

        const newUser = new User({
            username, email, password
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    })
};




module.exports = userController;