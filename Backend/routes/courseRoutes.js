// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// public endpoints
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.get('/slug/:slug', courseController.getCourseBySlug);

module.exports = router;
