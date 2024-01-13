const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userSchema');
const Post = require('../models/blogPostSchema');
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


     // Fetch all blog posts
     getAllBlogPosts: asyncHandler(async (req, res) => {
        const blogPosts = await Post.find({});
        res.status(200).json(blogPosts);
    }),

    // Fetch a specific blog post by ID
    getBlogPostById: asyncHandler(async (req, res) => {
        const postId = req.params.postId;

        const blogPost = await Post.findById(postId);

        if (!blogPost) {
            res.status(404);
            throw new Error('Blog post not found');
        }

        res.status(200).json(blogPost);
    }),

    // Fetch blog posts by a specific criteria (e.g., author)
    getBlogPostsByCriteria: asyncHandler(async (req, res) => {
        const authorId = req.params.authorId;

        const blogPosts = await Post.find({ author: authorId });

        if (!blogPosts || blogPosts.length === 0) {
            res.status(404);
            throw new Error('No blog posts found for the specified criteria');
        }

        res.status(200).json(blogPosts);
    }),

    
};




module.exports = { userController, generateToken };