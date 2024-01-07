const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.route('/create-user').post(userController.createUser);

module.exports = router; 