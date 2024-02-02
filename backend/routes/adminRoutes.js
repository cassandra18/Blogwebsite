const express = require('express');
const { adminController, generateToken } = require('../controllers/adminController');
const { authenticateToken } = require('../middleware/authAdminMiddleware');
const router = express.Router();


router.route('/create-admin').post(adminController.createAdmin)
router.route('/login-admin').post(adminController.loginAdmin);
router.route('/get-admin/:adminId').get(adminController.getAdmin);
router.route('/getme').get(authenticateToken, adminController.getMe);

// Update admin
router.route('/update-admin/:adminId').put(adminController.updateAdmin);

//delete admin
router.route('delete-admin/:adminId').delete(adminController.deleteAdmin);
module.exports = router; 