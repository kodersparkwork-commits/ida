const User = require("../models/User");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

// ⭐ BUY COURSE
exports.purchaseCourse = async (req, res) => {
  try {
    const userId = req.user._id;
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const user = await User.findById(userId);

    if (user.purchasedCourses.includes(courseId)) {
      return res.status(400).json({ message: "Course already purchased" });
    }

    user.purchasedCourses.push(courseId);
    await user.save();

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
    const user = await User.findById(req.user._id)
      .populate("purchasedCourses");

    res.json(user.purchasedCourses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ⭐ CHECK ACCESS VIDEO
exports.canWatch = async (req, res) => {
  try {
    const { courseId } = req.params;

    const user = await User.findById(req.user._id);

    const hasAccess = user.purchasedCourses.includes(courseId);

    res.json({ canWatch: hasAccess });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
