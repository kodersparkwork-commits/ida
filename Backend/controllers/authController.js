// controllers/authController.js
const User = require("../models/User");
const Enrollment = require("../models/Enrollment");
const generateToken = require("../utils/generateToken");
const {
  registerSchema,
  loginSchema,
  profileUpdateSchema,
} = require("../utils/validation");

const formatUserResponse = (user) => ({
  id: user._id,
  fullName: user.fullName,
  email: user.email,
  isAdmin: user.isAdmin,
  role: user.role,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
  enrolledCourses: user.enrolledCourses || [],
});

const getEnrolledCourses = async (userId) => {
  try {
    const enrollments = await Enrollment.find({ user_id: userId }).populate('course_id');
    return enrollments.filter(e => e.course_id).map(e => e.course_id.slug);
  } catch (err) {
    console.error("Error fetching enrollments:", err);
    return [];
  }
};

exports.registerUser = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    if (payload.full_name && !payload.fullName)
      payload.fullName = payload.full_name;

    const parsed = registerSchema.parse(payload);

    const exists = await User.findOne({ email: parsed.email });
    if (exists)
      return res.status(400).json({ message: "Email already registered" });

    const user = new User(parsed);
    await user.save();

    // New user has no enrollments
    res.status(201).json({
      user: formatUserResponse({ ...user.toObject(), enrolledCourses: [] }),
      token: generateToken(user),
    });
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const parsed = loginSchema.parse(req.body);
    const user = await User.findOne({ email: parsed.email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(parsed.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const enrolledCourses = await getEnrolledCourses(user._id);
    res.json({
      user: formatUserResponse({ ...user.toObject(), enrolledCourses }),
      token: generateToken(user),
    });
  } catch (err) {
    next(err);
  }
};

exports.loginAdmin = async (req, res, next) => {
  try {
    const parsed = loginSchema.parse(req.body);
    const user = await User.findOne({ email: parsed.email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(parsed.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    if (!user.isAdmin) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const enrolledCourses = await getEnrolledCourses(user._id);
    res.json({
      user: formatUserResponse({ ...user.toObject(), enrolledCourses }),
      token: generateToken(user),
    });
  } catch (err) {
    next(err);
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    const enrolledCourses = await getEnrolledCourses(user._id);
    res.json({ user: formatUserResponse({ ...user.toObject(), enrolledCourses }) });
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const parsed = profileUpdateSchema.parse(req.body);
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (parsed.email && parsed.email !== user.email) {
      const emailExists = await User.findOne({
        email: parsed.email,
        _id: { $ne: user._id },
      });
      if (emailExists) {
        return res.status(400).json({ message: "Email already in use" });
      }
    }

    if (parsed.fullName !== undefined) user.fullName = parsed.fullName;
    if (parsed.email !== undefined) user.email = parsed.email;
    if (parsed.password) user.password = parsed.password;

    await user.save();
    const enrolledCourses = await getEnrolledCourses(user._id);
    res.json({ user: formatUserResponse({ ...user.toObject(), enrolledCourses }) });
  } catch (err) {
    next(err);
  }
};
