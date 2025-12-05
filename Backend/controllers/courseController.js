// controllers/courseController.js
const Course = require('../models/Course');
const { courseSchema } = require('../utils/validation');
const slugify = require('slugify');

const isAdminRequest = (req) => Boolean(req.user?.isAdmin);

// Create course (admin)
exports.createCourse = async (req, res, next) => {
  try {
    const thumbnailFile = req.files?.['thumbnail']?.[0];
    const thumbnail = thumbnailFile?.path || req.body.thumbnail_url || null;
    const payload = { ...req.body };

    if (payload.price_usd !== undefined) payload.price_usd = Number(payload.price_usd);
    if (!payload.slug && payload.title) payload.slug = slugify(payload.title, { lower: true, strict: true });

    // Parse JSON string of videos from frontend if sent
    let videos = [];
    if (req.body.video_data) {
      videos = JSON.parse(req.body.video_data); // [{title,url}]
    }

    // Include uploaded video files
    if (req.files?.['videos']?.length) {
      const uploadedVideos = req.files['videos'].map(file => ({
        title: file.originalname,
        video_url: file.path
      }));
      videos = [...videos, ...uploadedVideos];
    }

    const parsed = courseSchema.parse(payload);

    const course = new Course({
      ...parsed,
      thumbnail_url: thumbnail,
      videos
    });

    await course.save();
    res.status(201).json({ course });
  } catch (err) {
    next(err);
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    const thumbnailFile = req.files?.['thumbnail']?.[0];
    const thumbnail = thumbnailFile?.path;
    const payload = { ...req.body };
    if (payload.price_usd !== undefined) payload.price_usd = Number(payload.price_usd);
    if (!payload.slug && payload.title) payload.slug = slugify(payload.title, { lower: true, strict: true });

    const parsed = courseSchema.partial().parse(payload);

    Object.assign(course, parsed);
    if (thumbnail) course.thumbnail_url = thumbnail;

    // Merge uploaded videos
    let videos = course.videos || [];
    if (req.body.video_data) videos = [...videos, ...JSON.parse(req.body.video_data)];
    if (req.files?.['videos']?.length) {
      const uploadedVideos = req.files['videos'].map(file => ({
        title: file.originalname,
        video_url: file.path
      }));
      videos = [...videos, ...uploadedVideos];
    }
    course.videos = videos;

    await course.save();
    res.json({ course });
  } catch (err) {
    next(err);
  }
};



exports.deleteCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findByIdAndDelete(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course removed' });
  } catch (err) {
    next(err);
  }
};

exports.getAllCourses = async (req, res, next) => {
  try {
    const allowInactive = isAdminRequest(req) || req.query.includeInactive === 'true';
    const filter = allowInactive ? {} : { is_active: true };
    const courses = await Course.find(filter).sort({ createdAt: -1 });
    res.json({ courses });
  } catch (err) {
    next(err);
  }
};

exports.getCourseById = async (req, res, next) => {
  try {
    const allowInactive = isAdminRequest(req);
    const course = await Course.findOne({
      _id: req.params.id,
      ...(allowInactive ? {} : { is_active: true }),
    });
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ course });
  } catch (err) {
    next(err);
  }
};
exports.addVideo = async (req, res, next) => {
  try {
    const { title, video_url } = req.body; // <-- use video_url

    if (!title || !video_url) {
      return res.status(400).json({ message: "Title and video_url are required" });
    }

    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    course.videos.push({
      title,
      video_url,     // <--- correct field name
      createdAt: new Date(),
    });

    await course.save();

    res.json({
      message: "Video added successfully",
      course,
    });
  } catch (err) {
    next(err);
  }
};

exports.getCourseBySlug = async (req, res, next) => {
  try {
    const allowInactive = isAdminRequest(req);
    const course = await Course.findOne({
      slug: req.params.slug,
      ...(allowInactive ? {} : { is_active: true }),
    });
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ course });
  } catch (err) {
    next(err);
  }
};
