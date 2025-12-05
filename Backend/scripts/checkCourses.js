const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('../models/Course');

dotenv.config({ path: require('path').resolve(__dirname, '../.env') });

const checkCourses = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        const courses = await Course.find({}, 'title slug is_active');
        console.log('Courses found:', courses.length);
        courses.forEach(c => {
            console.log(`- ${c.title} (Slug: ${c.slug}, Active: ${c.is_active})`);
        });

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

checkCourses();
