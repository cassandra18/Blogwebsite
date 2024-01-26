const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const asyncHandler = require("express-async-handler");

const Post = require("../models/blogPostSchema");
const { response } = require('express');


 // configure the multer storage engine. It specifies that uploaded files should be stored in 'diskStorage' disk. 
 const storage = multer.diskStorage({

  //set the 'uploads/' directory as the destination directory
  destination: (req, file, cb) => {
    const uploadDir = '/uploads';

    if(!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },

  // Generate a unique filename for each uploaded file. path.extanme() is used to get the extansion of the original file.
  filename: (req, file, cb) => {
    const uniqueFile = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFile);
  },

});



//Handle multiple file uploads
const uploadMultiple = multer({
  storage: storage, //the uploaded images will be stored in the diskStorage in the server
  limits: { files: 5 }, //limits the number of files to be uploaded to 5
}).array('images', 5); //images is the field name in the form for multiple file




//Define a PostController object
const postController = {
  //Create a method from the parent object. This method is used to create a blog post.
  createPost: asyncHandler(async (req, res) => {
    // Destructure the parts of the blog post from the request body.
    const { title, content, imageUrl, authorId, authorName, category, tags } = req.body;

    //Check if all the field are filled in.
    if (!title || !content || !imageUrl || !authorId || !authorName || !category || !tags) {
      res.status(400);
      throw new Error("All fields should be filled!");
    }

    const titleExist = await Post.findOne({ title });

    if (titleExist) {
      res.status(400);
      throw new Error("Title already exists");
    }


    uploadMultiple(req, res, async (err) => {
      if (err){
        res.status(400).json({ error: 'Error uploading images' });
      }
    });

    const imagePaths = req.files ? req.files.map((file) => `uploads/${file.fileName}`) : [];

    // Create a new blog post
    const newPost = await Post.create({
        title, content, authorId, imageUrl, authorName,category, tags, imagePaths
    });

    if (newPost) {
      res.status(201).json({
        _id: newPost.id,
        title: newPost.title,
        imageUrl: newPost.imageUrl,
        content: newPost.content,
        authorId: newPost.authorId,
        authorName: newPost.authorName,
        category: newPost.category,
        tags: newPost.tags,
        imagePaths: newPost.imagePaths,
      });

    } else {
      res.status(400);
      throw new Error("Invalid data");
    }
  }),

  getPosts: asyncHandler(async(req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });

    if (posts) {
      res.status(200).json(posts);

    } else {
      res.status(500);
      throw new Error('Internal server error')
    }
    
  }),
  

  //Route handler for handling multiple images
  uploadMultipleImages: (req, res) => {
    //Access multiple files through req.file
    const imagePaths = req.files.map(file => `uploads/${file.fileName}`);
    res.json({ imagePaths })
  },

  getPost: asyncHandler(async (req, res) => {
    const postId = req.params.postId;

    const post = await Post.findById(postId);
    
    if(post) {
      res.status(200).json(post);
    } else {
      res.status(404);
      throw new Error('Blog not found:', error);
    }
  })

};



module.exports = postController;
