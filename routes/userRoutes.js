const express = require('express');
const { userController, generateToken } = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authUserMiddleware');
const router = express.Router();


router.route('/create-user').post(userController.createUser);
router.route('/login-user').post(userController.loginUser);
router.route('/getme').get(authenticateToken, userController.getMe);

module.exports = router; 