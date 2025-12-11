const express = require('express');
const router = express.Router();
const VideoFolder = require('../models/VideoFolder');

// @route   GET /api/video-folders
// @desc    Get all folders with videos
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { studentCourseId } = req.query;
        let query = {};
        if (studentCourseId) {
            query.studentCourseId = studentCourseId;
        }

        const folders = await VideoFolder.find(query).populate('courseId', 'title slug').sort({ createdAt: -1 });
        res.json(folders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   POST /api/video-folders
// @desc    Create a new folder
// @access  Admin (Protected in server.js or check here)
// Note: We'll assume admin protection is handled by middleware if needed, 
// or we can add a middleware check here. For now keeping it simple as per request.
router.post('/', async (req, res) => {
    try {
        const { name, courseId, studentCourseId } = req.body;
        if (!name) return res.status(400).json({ message: 'Folder name is required' });

        // Check if exists
        const existing = await VideoFolder.findOne({ name });
        if (existing) {
            return res.status(400).json({ message: 'Folder already exists' });
        }

        const newFolder = new VideoFolder({ name, courseId, studentCourseId });
        await newFolder.save();
        res.json(newFolder);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   DELETE /api/video-folders/:id
// @desc    Delete a folder
// @access  Admin
router.delete('/:id', async (req, res) => {
    try {
        const folder = await VideoFolder.findById(req.params.id);
        if (!folder) return res.status(404).json({ message: 'Folder not found' });

        await folder.deleteOne();
        res.json({ message: 'Folder removed' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   PUT /api/video-folders/:id
// @desc    Update a folder (name, courseId)
// @access  Admin
router.put('/:id', async (req, res) => {
    try {
        const { name, courseId, studentCourseId } = req.body;
        const folder = await VideoFolder.findById(req.params.id);
        if (!folder) return res.status(404).json({ message: 'Folder not found' });

        if (name) folder.name = name;
        // Allow setting courseId to null/undefined to unassign, or a new ID
        if (courseId !== undefined) folder.courseId = courseId || null;
        if (studentCourseId !== undefined) folder.studentCourseId = studentCourseId || null;

        await folder.save();
        // Populate courseId before returning so frontend has updated data
        await folder.populate('courseId', 'title');

        res.json(folder);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   POST /api/video-folders/:id/videos
// @desc    Add a video to a folder
// @access  Admin
router.post('/:id/videos', async (req, res) => {
    try {
        const { title, embedTag } = req.body;
        if (!embedTag) return res.status(400).json({ message: 'Embed tag is required' });

        const folder = await VideoFolder.findById(req.params.id);
        if (!folder) return res.status(404).json({ message: 'Folder not found' });

        // Simple validation for title, default to "Untitled" if missing
        const videoTitle = title || `Video ${folder.videos.length + 1}`;

        folder.videos.push({ title: videoTitle, embedTag });
        await folder.save();

        res.json(folder);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   DELETE /api/video-folders/:id/videos/:videoId
// @desc    Remove a video from a folder
// @access  Admin
router.delete('/:id/videos/:videoId', async (req, res) => {
    try {
        const folder = await VideoFolder.findById(req.params.id);
        if (!folder) return res.status(404).json({ message: 'Folder not found' });

        folder.videos = folder.videos.filter(v => v._id.toString() !== req.params.videoId);
        await folder.save();

        res.json(folder);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
