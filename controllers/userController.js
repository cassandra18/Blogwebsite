const asyncHandler = require('express-async-handler');

const User = require('../models/userSchema');

const userController =  {

    createUser:  asyncHandler(async(req, res) => {

        const { username, email, password } = req.body;

        if(!username || !email || !password) {
            res.status(400);
            throw new Error('All fields are required!');
        };

        const newUser = await User.create({
            username, email, password
        });

        if(user) {
            res.status(201).json({
                _id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                password: newUser.password
            })


        } else {
            res.status(400);
            throw new Error('Invalid data');
        };

    })
};




module.exports = userController;