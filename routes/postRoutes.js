const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/authAdminMiddleware');

//route for creating post
router.route('/create-pos').post(postController.createPost);

//Route for handling image uploads
router.route('/upload-image').post(authenticateToken, postController.uploadMultipleImages);

module.exports = router;