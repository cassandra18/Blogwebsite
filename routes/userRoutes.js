const express = require('express');
const { userController, generateToken } = require('../controllers/userController');
const router = express.Router();


router.route('/create-user').post(userController.createUser);
router.route('/login-user').post(userController.loginUser);


module.exports = router; 