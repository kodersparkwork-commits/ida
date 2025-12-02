// /models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  short_description: { type: String },
  price_usd: { type: Number, default: 0 },
  duration: { type: String },
  format: { type: String, enum: ['online', 'offline'], default: 'online' },
  thumbnail_url: { type: String },
  is_active: { type: Boolean, default: true },
  category: { 
    type: String, 
    enum: [
      'Fellowship Programs', 
      'Mastery Programs', 
      'Exam Courses', 
      'Student Courses', 
      'Short Courses', 
      'Online Programs'
    ],
    default: 'Online Programs'
  },

  // NEW: videos
  videos: [
    {
      title: { type: String },
      video_url: { type: String },
      public_id: { type: String }, // cloudinary public_id (optional)
      createdAt: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
