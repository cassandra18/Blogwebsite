const asyncHandler = require('express-async-handler');

const Admin = require('../models/adminSchema');

const adminController =  {

    createAdmin:  asyncHandler(async(req, res) => {

        const { username, email, password } = req.body;

        if(!username || !email || !password) {
            res.status(400);
            throw new Error('All fields are required!');
        };

        const newAdmin = new Admin({
            username, email, password
        });

        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);

    })
};




module.exports = adminController;