const User = require("../models/User");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

// ⭐ BUY COURSE
// ⭐ BUY COURSE
exports.purchaseCourse = async (req, res) => {
  try {
    const userId = req.user._id;
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Check if already enrolled
    const existing = await Enrollment.findOne({ user_id: userId, course_id: courseId, status: 'active' });
    if (existing) {
      return res.status(400).json({ message: "Course already purchased" });
    }

    // Create Enrollment Record
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1); // Default 1 year access

    await Enrollment.create({
      user_id: userId,
      course_id: courseId,
      status: 'active',
      enrolled_at: new Date(),
      expires_at: expiresAt,
      payment_id: `MANUAL_${Date.now()}` // Or however you want to track this
    });

    res.json({ message: "Course purchased successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ⭐ MY PURCHASED COURSES
exports.getMyCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user_id: req.user._id, status: 'active' })
      .populate("course_id");

    const courses = enrollments.map(e => e.course_id).filter(Boolean);

    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ⭐ CHECK ACCESS VIDEO
exports.canWatch = async (req, res) => {
  try {
    const { courseId } = req.params;

    const enrollment = await Enrollment.findOne({
      user_id: req.user._id,
      course_id: courseId,
      status: 'active'
    });

    res.json({ canWatch: !!enrollment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
