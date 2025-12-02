// routes/enrollmentRoutes.js
const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');
const { protect } = require('../middleware/adminMiddleware');

// purchase
router.post('/:courseId', protect, enrollmentController.purchaseCourse);

// get enrollments for current user
router.get('/', protect, enrollmentController.getUserEnrollments);
router.get('/me', protect, enrollmentController.getUserEnrollments);

module.exports = router;
