const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const purchaseController = require("../controllers/purchaseController");
const { protect } = require('../middleware/adminMiddleware');

// =============================
// USER REGISTER / LOGIN
// =============================
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

// =============================
// USER PROFILE
// =============================
router.get('/profile', protect, authController.getProfile);
router.get('/me', protect, authController.getProfile);
router.put('/profile', protect, authController.updateProfile);

// =============================
// ⭐ BUY A COURSE
// =============================
// Body: { courseId }
router.post("/buy", protect, purchaseController.purchaseCourse);

// =============================
// ⭐ GET ALL PURCHASED COURSES
// =============================
router.get("/my-courses", protect, purchaseController.getMyCourses);

// =============================
// ⭐ CHECK IF USER CAN WATCH A COURSE
// =============================
// Returns: { access: true/false }
router.get("/can-watch/:courseId", protect, purchaseController.canWatch);

module.exports = router;
