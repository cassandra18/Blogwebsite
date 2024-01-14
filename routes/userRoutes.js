const express = require('express');
const { userController, generateToken } = require('../controllers/userController');
const router = express.Router();


router.route('/create-user').post(userController.createUser);
router.route('/login-user').post(userController.loginUser);
router.route('/get-me').get(authenticateToken, userController.getMe);
router.get('/blog-posts', userController.getAllBlogPosts);
router.get('/blog-posts/:postId', userController.getBlogPostById);
router.get('/blog-posts/author/:authorId', userController.getBlogPostsByCriteria);


module.exports = router; 