const asyncHandler = require("express-async-handler");

const Post = require("../models/blogPostSchema");

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

    // Create a new blog post
    const newPost = await Post.create({
        title, content, author, tags
    });

    if (newPost) {
      res.status(201).json({
        _id: newPost.id,
        title: newPost.title,
        content: newPost.content,
        author: newPost.author,
        tags: newPost.tags,
      });

    } else {
      res.status(400);
      throw new Error("Invalid data");
    }
    
    
  }),
};

module.exports = postController;
