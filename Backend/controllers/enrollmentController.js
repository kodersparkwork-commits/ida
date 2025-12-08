// controllers/enrollmentController.js
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

exports.purchaseCourse = async (req, res, next) => {
  try {
    const user = req.user;
    const courseId = req.params.courseId;

    const course = await Course.findOne({ _id: courseId, is_active: true });
    if (!course) return res.status(404).json({ message: 'Course not found' });

    // check if already enrolled
    const existing = await Enrollment.findOne({ user_id: user._id, course_id: courseId, status: 'active' });
    if (existing) return res.status(400).json({ message: 'Already enrolled' });

    // simulate payment success
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

    const enrollment = new Enrollment({
      user_id: user._id,
      course_id: courseId,
      status: 'active',
      enrolled_at: new Date(),
      expires_at: expiresAt,
      payment_id: `PAY_${Date.now()}`,
    });

    await enrollment.save();
    res.status(201).json({ enrollment });
  } catch (err) {
    next(err);
  }
};

exports.getUserEnrollments = async (req, res, next) => {
  try {
    const user = req.user;

    // populate full course including videos
    const enrollments = await Enrollment.find({ user_id: user._id })
      .populate({
        path: 'course_id',
        match: { is_active: true },
        select: 'title short_description description price_usd thumbnail_url videos slug', // include videos and slug
      });

    const normalized = enrollments
      .filter(enrollment => enrollment.course_id)
      .map(enrollment => ({
        _id: enrollment._id,
        status: enrollment.status,
        enrolled_at: enrollment.enrolled_at,
        expires_at: enrollment.expires_at,
        payment_id: enrollment.payment_id,
        course: enrollment.course_id, // already populated with videos
      }));

    res.json({ enrollments: normalized });
  } catch (err) {
    next(err);
  }
};

exports.getAllEnrollments = async (req, res, next) => {
  try {
    const enrollments = await Enrollment.find()
      .populate('user_id', 'fullName email')
      .populate('course_id', 'title price_usd')
      .sort({ enrolled_at: -1 });

    res.json({ enrollments });
  } catch (err) {
    next(err);
  }
};
