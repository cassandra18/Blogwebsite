const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Admin = require('../models/adminSchema');


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '30d'})
};

const adminController =  {

    createAdmin:  asyncHandler(async(req, res) => {

        const { username, email, password } = req.body;
        
        
        if(!username || !email || !password) {
            res.status(400);
            throw new Error('All fields are required!');
        };


        const adminExist = await Admin.findOne({ email });

        if(adminExist) {
            res.status(400)
            throw new Error('User already exists');
        };

        //Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const newAdmin =  await Admin.create({
            username, email, password: hashedPassword
        });

        
        if(newAdmin) {
            res.status(201).json({
                _id: newAdmin.id,
                username: newAdmin.username,
                email: newAdmin.email,
                token: generateToken(newAdmin._id)
            })
    
        } else {
            res.status(400)
            throw new Error("Invalid data")
        }


    }),


    loginAdmin: asyncHandler(async (req, res) => {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if(admin && (await bcrypt.compare(password, admin.password))) {
            res.json({

                _id: admin.id,
                username: admin.username,
                email: admin.email,
                token: generateToken(admin._id)
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid credentials')
        }
    }),


    
};



module.exports = { adminController, generateToken };