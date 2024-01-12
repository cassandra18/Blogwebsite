const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const asyncHandler = require("express-async-handler");

const Post = require("../models/blogPostSchema");



 // configure the multer storage engine. It specifies that uploaded files should be stored in 'diskStorage' disk. 
 const storage = multer.diskStorage({

  //set the 'uploads/' directory as the destination directory
  distination: (req, file, cb) => {
    cb(null, 'upload/');
  },

  // Generate a unique filename for each uploaded file. path.extanme() is used to get the extansion of the original file.
  fileName: (req, file, cb) => {
    const uniqueFile = `${uuidv4}${path.extname(file.originalName)}`;
    cb(null, uniqueFile);
  },

})


const uploadMultiple = multer({
  storage: storage,
  limits: { files: 5 }, //limits the number of files to be uploaded to 5
}).array('images', 5) //images is the field name in the form for multiple file




//Define a PostController object
const postController = {
  //Create a method from the parent object. This method is used to create a blog post.
  createPost: asyncHandler(async (req, res) => {
    // Destructure the parts of the blog post from the request body.
    const { title, content, author, tags } = req.body;

    //Check if all the field are filled in.
    if (!title || !content || !author || !tags) {
      res.status(400);
      throw new Error("All fields should be filled!");
    }

    const titleExist = await Post.findOne({ title });

    if (titleExist) {
      res.status(400);
      throw new Error("Title already exists");
    }


    uploadMultiple(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        res.status(400);
        throw new Error('Error uploading images');
      }
    });

    const imagePaths = req.files.map((file) => `uploads/${file.filename}`);


    // Create a new blog post
    const newPost = await Post.create({
        title, content, author, tags, imagePaths
    });

    if (newPost) {
      res.status(201).json({
        _id: newPost.id,
        title: newPost.title,
        content: newPost.content,
        author: newPost.author,
        tags: newPost.tags,
        imagePaths: newPost.imagePaths,
      });

    } else {
      res.status(400);
      throw new Error("Invalid data");
    }
    
    
  }),



  //Route handler for handling multiple images
  uploadMultipleImages: (req, res) => {
    //Access multiple files through req.file
    const imagePaths = req.files.map(file => `uploads/${file.filename}`);
    res.json({ imagePaths })
  },

};



module.exports = postController;
