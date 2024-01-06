const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();


router.route('/create-admin').post(adminController.createAdmin);

module.exports = router; 