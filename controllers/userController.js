const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userSchema');
const { hash } = require('bcryptjs');
const { generateToken } = require('./adminController');

const userController =  {

    createUser:  asyncHandler(async(req, res) => {

        const { username, email, password } = req.body;


        if(!username || !email || !password) {
            res.status(400);
            throw new Error('All fields are required!');
        };



        const userExist = await User.findOne(email);

        if(userExist) {
            res.status(400);
            throw new Error('User already exist')
        }
        
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username, email, password: hashedPassword
        });

        if(newUser) {
            res.status(201).json({
                _id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                token: generateToken(newUser.id)
            })


        } else {
            res.status(400);
            throw new Error('Invalid data');
        };

    }),

    loginUser: asyncHandler(async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(user && (await bcrypt.compare(password, user.password))) {
            res.json({

                _id: user.id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid credentials')
        }
    }),

};




module.exports = { userController, generateToken };