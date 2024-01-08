const express = require('express');
const { adminController, generateToken } = require('../controllers/adminController');
const router = express.Router();


router.route('/create-admin').post(adminController.createAdmin)
router.route('/login-admin').post(adminController.loginAdmin);

module.exports = router; 