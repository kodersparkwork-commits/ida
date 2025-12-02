// controllers/authController.js
const User = require("../models/User");
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
});

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

    res.status(201).json({
      user: formatUserResponse(user),
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

    res.json({
      user: formatUserResponse(user),
      token: generateToken(user),
    });
  } catch (err) {
    next(err);
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json({ user: formatUserResponse(user) });
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
    res.json({ user: formatUserResponse(user) });
  } catch (err) {
    next(err);
  }
};
