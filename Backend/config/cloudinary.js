// /config/cloudinary.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// storage for images (already used in your project maybe)
const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'course_thumbnails',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

// storage for videos
const videoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'course_videos',
    resource_type: 'video',
    allowed_formats: ['mp4', 'mov', 'm4v', 'webm'],
  },
});

const imageUpload = multer({ storage: imageStorage });
const videoUpload = multer({ storage: videoStorage });

module.exports = { cloudinary, imageUpload, videoUpload };
