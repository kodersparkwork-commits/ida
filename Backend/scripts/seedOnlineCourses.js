const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('../models/Course');
const slugify = require('slugify');

dotenv.config({ path: require('path').resolve(__dirname, '../.env') });

const courses = [
    {
        title: 'Online Periodontics Course',
        slug: 'online-periodontics',
        price_usd: 500,
        category: 'Online Programs',
        format: 'online',
        description: '12 Months unlimited access',
        short_description: 'Comprehensive online periodontics training.'
    },
    {
        title: 'Online Fixed Orthodontics',
        slug: 'online-fixed-orthodontics',
        price_usd: 500,
        category: 'Online Programs',
        format: 'online',
        description: '12 Months unlimited access',
        short_description: 'Master fixed orthodontics online.'
    },
    {
        title: 'Online Endodontics Course',
        slug: 'online-endodontics',
        price_usd: 500,
        category: 'Online Programs',
        format: 'online',
        description: '12 Months unlimited access',
        short_description: 'Advanced endodontics techniques.'
    },
    {
        title: 'Dental Implant Course - Online',
        slug: 'online-dental-implant',
        price_usd: 500,
        category: 'Online Programs',
        format: 'online',
        description: '12 Months unlimited access',
        short_description: 'Multi system Implantology training program.'
    },
    {
        title: 'Online Crown and Bridge Course',
        slug: 'online-crown-and-bridge',
        price_usd: 500,
        category: 'Online Programs',
        format: 'online',
        description: '12 Months unlimited access',
        short_description: 'Complete crown and bridge procedures.'
    },
    {
        title: 'Online Cosmetic Dentistry Course',
        slug: 'online-cosmetic-dentistry',
        price_usd: 500,
        category: 'Online Programs',
        format: 'online',
        description: '12 Months unlimited access',
        short_description: 'Master cosmetic dentistry online.'
    }
];

const seedCourses = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        for (const courseData of courses) {
            const existingCourse = await Course.findOne({ slug: courseData.slug });
            if (!existingCourse) {
                await Course.create(courseData);
                console.log(`Created course: ${courseData.title}`);
            } else {
                console.log(`Course already exists: ${courseData.title}`);
            }
        }

        console.log('Seeding complete');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedCourses();
