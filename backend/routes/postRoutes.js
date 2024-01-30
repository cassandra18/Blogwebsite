const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/authAdminMiddleware');

//route for creating post
router.route('/create-post').post(postController.createPost);

//Route for handling image uploads
router.route('/upload-image').post(authenticateToken, postController.uploadMultipleImages);

//Route for getting all the posts
router.route('/get-posts').get(postController.getPosts);

//GEt post by id
router.route('/:postId').get(postController.getPost).put(postController.updatePost);


module.exports = router;