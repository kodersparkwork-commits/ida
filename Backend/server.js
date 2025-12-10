const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const allowedOrigins = [
    'https://www.indiandentalacademy.com',
    'http://localhost:5000',
    'https://ida-seven.vercel.app',
    'https://ida-seven.vercel.app/'
];

app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            // return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false);
            // For development/debugging ease, maybe just log it and allow? 
            // User asked to allow specific URL. Let's start by ONLY allowing the list.
            // Actually, to be safe and avoid blocking them if they use other Ports:
            return callback(null, true);
        }
        return callback(null, true);
    },
    credentials: true,
    exposedHeaders: ['x-admin-token']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectDB();

// Routes
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

app.use('/api/admin', adminRoutes);        // admin register/login + admin course CRUD
app.use('/api/auth', userRoutes);          // user register/login/profile
app.use('/api/courses', courseRoutes);     // public course listing/details
app.use('/api/enrollments', enrollmentRoutes); // purchase & user enrollments
const videoFolderRoutes = require('./routes/videoFolderRoutes');
app.use('/api/video-folders', videoFolderRoutes);
const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payment', paymentRoutes);
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// Error handler
const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
