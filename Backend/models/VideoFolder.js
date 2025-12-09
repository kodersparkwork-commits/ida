const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    embedTag: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const videoFolderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    videos: [videoSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('VideoFolder', videoFolderSchema);
