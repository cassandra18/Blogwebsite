const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userSchema');
const { hash } = require('bcryptjs');
const { generateToken } = require('./adminController');


const generateToken = (id) => {
    return (jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '30min'} ));
}

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

        if(newUser && (crypt.compare(password, hashedPassword))) {
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

    })
};




module.exports = userController;