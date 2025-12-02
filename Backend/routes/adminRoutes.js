// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const courseController = require("../controllers/courseController");
const upload = require("../middleware/uploadMiddleware");
const { protect, adminOnly } = require("../middleware/adminMiddleware");

const multer = require("multer");
const uploadVideo = multer({ storage: multer.memoryStorage() }).single("video");
const Course = require("../models/Course");
const cloudinary = require("cloudinary").v2;
const { imageUpload, videoUpload } = require('../config/cloudinary');

// =========================
// ADMIN REGISTER (POSTMAN)
// =========================
router.post("/register", async (req, res, next) => {
  try {
    const fullName = req.body.fullName || req.body.full_name;
    const { email, password } = req.body;
    if (!fullName || !email || !password)
      return res.status(400).json({ message: "Provide name, email, password" });

    const User = require("../models/User");
    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Email already exists" });

    const user = new User({
      fullName,
      email,
      password,
      role: "admin",
      isAdmin: true,
    });
    await user.save();
    res.status(201).json({ message: "Admin created", adminId: user._id });
  } catch (err) {
    next(err);
  }
});

// =========================
// ADMIN LOGIN
// =========================
router.post("/login", authController.loginUser);

// =========================
// COURSE IMAGE UPLOAD
// =========================
const uploadCourseImage = upload.single("thumbnail");

// =========================
// COURSE CRUD
// =========================
router.post(
  '/courses',
  protect,
  adminOnly,
  imageUpload.single('thumbnail'),
  videoUpload.array('videos', 10), // allow max 10 videos at once
  courseController.createCourse
);

// Update course
router.put(
  '/courses/:id',
  protect,
  adminOnly,
  imageUpload.single('thumbnail'),
  videoUpload.array('videos', 10),
  courseController.updateCourse
);
router.delete("/courses/:id", protect, adminOnly, courseController.deleteCourse);
router.get("/courses", protect, adminOnly, courseController.getAllCourses);
router.get("/courses/:id", protect, adminOnly, courseController.getCourseById);

// ======================================================================
// ⭐ VIDEO UPLOAD (ADMIN ONLY)
// ======================================================================
router.post(
  "/upload-video",
  protect,
  adminOnly,
  uploadVideo,
  async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: "No video uploaded" });

      // Upload video to Cloudinary using Stream
      const uploadPromise = () =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              resource_type: "video",
              folder: "course_videos",
            },
            (err, result) => {
              if (err) reject(err);
              else resolve(result);
            }
          );
          stream.end(req.file.buffer);
        });

      const result = await uploadPromise();

      res.json({
        message: "Video uploaded",
        video_url: result.secure_url,
        public_id: result.public_id,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Video upload failed" });
    }
  }
);

// ======================================================================
// ⭐ ADD VIDEO TO COURSE
// ======================================================================
router.post(
  "/courses/:id/add-video",
  protect,
  adminOnly,
  async (req, res) => {
    try {
      const { title, video_url, public_id } = req.body;

      if (!title || !video_url)
        return res.status(400).json({ message: "title and video_url required" });

      const course = await Course.findById(req.params.id);
      if (!course)
        return res.status(404).json({ message: "Course not found" });

      // Push into Course model
      course.videos.push({
        title,
        video_url,
        public_id: public_id || null,
      });

      await course.save();

      res.json({
        message: "Video added successfully",
        videos: course.videos,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Could not add video to course" });
    }
  }
);

module.exports = router;
