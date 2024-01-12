const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/authMIddleware');

//route for creating post
router.route('/create-post').post(postController.createPost);

//Route for handling image uploads
router.route('/upload-image').post(
    authenticateToken,
    postController.uploadMultiple,
    postController.uploadMultipleImages
    );

module.exports = router;