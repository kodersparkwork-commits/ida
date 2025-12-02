import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Navbar from './components/Navbar';
import {Footer} from './components/Footer';

// user pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursePage';
import CourseDetailPage from './pages/CourseDetailPage';
import AuthPage from './pages/AuthPage';
import LMSPage from './pages/LMSPage';
import {ContactPage} from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';

// admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCourseForm from './pages/admin/AdminCourseForm';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* courses */}
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/payment/:courseId" element={<PaymentPage />} />

            {/* auth */}
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/lms" element={<LMSPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* static */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/course/new" element={<AdminCourseForm />} />
            <Route path="/admin/course/:id/edit" element={<AdminCourseForm />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
