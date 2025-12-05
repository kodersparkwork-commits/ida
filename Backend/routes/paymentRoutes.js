const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { protect } = require('../middleware/adminMiddleware'); // Assuming protect is exported from here or similar auth middleware

// Create Order
router.post('/order', protect, paymentController.createOrder);

// Verify Payment
router.post('/verify', protect, paymentController.verifyPayment);

module.exports = router;
