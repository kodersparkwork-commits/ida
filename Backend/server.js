const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true, exposedHeaders: ['x-admin-token'] }));
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
const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payment', paymentRoutes);

// Error handler
const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
