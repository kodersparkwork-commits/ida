// models/Enrollment.js
const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  status: { type: String, enum: ['active', 'completed', 'cancelled'], default: 'active' },
  enrolled_at: { type: Date, default: () => new Date() },
  expires_at: { type: Date, default: null },
  completed_at: { type: Date, default: null },
  payment_id: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
