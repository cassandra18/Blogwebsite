const asyncHandler = require('express-async-handler');

const Post = require('../models/blogPostSchema');

//Define a PostController object
const postController = {


    //Create a method from the parent object. This method is used to create a blog post. 
    createPost: asyncHandler(async (req, res) => {

        // Destructure the parts of the blog post from the request body.
        const { title, content, author, tags }= req.body;

        //Check if all the field are filled in.
        if(!title || !content || !author || !tags) {
            res.status(400);
            throw new Error('All fields should be filled!');
        }
        

        // Create a new blog post
        const newPost = new Post({
            title,
            content,
            author,
            tags
        });


        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    })
    
};

module.exports = postController;