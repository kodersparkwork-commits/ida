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
// unified storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    if (file.fieldname === 'thumbnail') {
      return {
        folder: 'course_thumbnails',
        allowed_formats: ['jpg', 'jpeg', 'png'],
      };
    } else if (file.fieldname === 'videos' || file.fieldname === 'video') {
      return {
        folder: 'course_videos',
        resource_type: 'video',
        allowed_formats: ['mp4', 'mov', 'm4v', 'webm'],
      };
    }
    return {
      folder: 'misc',
    };
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };
