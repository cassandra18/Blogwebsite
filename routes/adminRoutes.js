const express = require('express');
const { adminController, generateToken } = require('../controllers/adminController');
const { authenticateToken } = require('../middleware/authMIddleware');
const router = express.Router();


router.route('/create-admin').post(adminController.createAdmin)
router.route('/login-admin').post(adminController.loginAdmin);
router.route('/getme').get(authenticateToken, adminController.getMe);
module.exports = router; 