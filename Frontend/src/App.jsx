import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { setAdminToken } from './api';

import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

// user pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursePage';
import CourseDetailPage from './pages/CourseDetailPage';
import AuthPage from './pages/AuthPage';
import LMSPage from './pages/LMSPage';
import { ContactPage } from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';

// static pages
import FellowshipPage from './pages/static/FellowshipPage';
import MasteryPage from './pages/static/MasteryPage';
import ExamCoursesPage from './pages/static/ExamCoursesPage';
import StudentCoursesPage from './pages/static/StudentCoursesPage';
import StaticCourseDetail from './pages/static/StaticCourseDetail';

// fellowship pages
import FixedOrthodonticsPage from './pages/static/fellowships/FixedOrthodonticsPage';
import GeneralDentistryPage from './pages/static/fellowships/GeneralDentistryPage';
import RestorativeDentistryPage from './pages/static/fellowships/RestorativeDentistryPage';
import ClinicalEndodonticsPage from './pages/static/fellowships/ClinicalEndodonticsPage';
import DentalImplantologyPage from './pages/static/fellowships/DentalImplantologyPage';
import CosmeticDentistryPage from './pages/static/fellowships/CosmeticDentistryPage';

// mastery pages
import FixedOrthodonticsMasteryPage from './pages/static/mastery/FixedOrthodonticsMasteryPage';
import CosmeticDentistryMasteryPage from './pages/static/mastery/CosmeticDentistryMasteryPage';
import CrownAndBridgePage from './pages/static/mastery/CrownAndBridgePage';
import DentalImplantologyMasteryPage from './pages/static/mastery/DentalImplantologyMasteryPage';
import DentalLabTechnologyPage from './pages/static/mastery/DentalLabTechnologyPage';
import FacialAestheticsPage from './pages/static/mastery/FacialAestheticsPage';
import BasicOralSurgeryPage from './pages/static/mastery/BasicOralSurgeryPage';
import LaserDentistryPage from './pages/static/mastery/LaserDentistryPage';
import PeriodonticsPage from './pages/static/mastery/PeriodonticsPage';
import RotaryEndodonticsPage from './pages/static/mastery/RotaryEndodonticsPage';
import OrthodontistAssistantPage from './pages/static/mastery/OrthodontistAssistantPage';

// online course pages
import OnlineFixedOrthodonticsPage from './pages/static/online/OnlineFixedOrthodonticsPage';
import OnlineDentalImplantPage from './pages/static/online/OnlineDentalImplantPage';
import OnlineCrownAndBridgePage from './pages/static/online/OnlineCrownAndBridgePage';
import OnlineEndodonticsPage from './pages/static/online/OnlineEndodonticsPage';
import OnlinePeriodonticsPage from './pages/static/online/OnlinePeriodonticsPage';
import ShortCoursesPage from './pages/static/ShortCoursesPage';
import OnlineCosmeticDentistryPage from './pages/static/online/OnlineCosmeticDentistryPage';
import OnlineCoursesOverviewPage from './pages/static/OnlineCoursesOverviewPage';

// admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCourseForm from './pages/admin/AdminCourseForm';

function App() {
  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      setAdminToken(adminToken);
    }
  }, []);

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Online Courses (Static Overview) */}
            <Route path="/online-courses" element={<OnlineCoursesOverviewPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/payment/:courseId" element={<PaymentPage />} />

            {/* Static Course Categories */}
            <Route path="/courses/fellowship" element={<FellowshipPage />} />
            <Route path="/courses/mastery" element={<MasteryPage />} />
            <Route path="/courses/exam" element={<ExamCoursesPage />} />
            <Route path="/courses/student" element={<StudentCoursesPage />} />

            {/* Static Course Details */}
            <Route path="/courses/fellowship/fixed-orthodontics" element={<FixedOrthodonticsPage />} />
            <Route path="/courses/fellowship/general-dentistry" element={<GeneralDentistryPage />} />
            <Route path="/courses/fellowship/restorative-dentistry" element={<RestorativeDentistryPage />} />
            <Route path="/courses/fellowship/clinical-endodontics" element={<ClinicalEndodonticsPage />} />
            <Route path="/courses/fellowship/dental-implantology" element={<DentalImplantologyPage />} />
            <Route path="/courses/fellowship/cosmetic-dentistry" element={<CosmeticDentistryPage />} />

            <Route path="/courses/mastery/fixed-orthodontics" element={<FixedOrthodonticsMasteryPage />} />
            <Route path="/courses/mastery/cosmetic-dentistry" element={<CosmeticDentistryMasteryPage />} />
            <Route path="/courses/mastery/crown-and-bridge" element={<CrownAndBridgePage />} />
            <Route path="/courses/mastery/dental-implantology" element={<DentalImplantologyMasteryPage />} />
            <Route path="/courses/mastery/dental-lab-technician" element={<DentalLabTechnologyPage />} />
            <Route path="/courses/mastery/facial-aesthetics" element={<FacialAestheticsPage />} />
            <Route path="/courses/mastery/basic-oral-surgery" element={<BasicOralSurgeryPage />} />
            <Route path="/courses/mastery/laser-dentistry" element={<LaserDentistryPage />} />
            <Route path="/courses/mastery/periodontics" element={<PeriodonticsPage />} />
            <Route path="/courses/mastery/rotary-endodontics" element={<RotaryEndodonticsPage />} />
            <Route path="/courses/mastery/orthodontist-assistant" element={<OrthodontistAssistantPage />} />

            {/* online courses */}
            <Route path="/courses/online/fixed-orthodontics" element={<OnlineFixedOrthodonticsPage />} />
            <Route path="/courses/online/dental-implant" element={<OnlineDentalImplantPage />} />
            <Route path="/courses/online/crown-and-bridge" element={<OnlineCrownAndBridgePage />} />
            <Route path="/courses/online/endodontics" element={<OnlineEndodonticsPage />} />
            <Route path="/courses/online/periodontics" element={<OnlinePeriodonticsPage />} />
            <Route path="/courses/short-courses" element={<ShortCoursesPage />} />
            <Route path="/courses/online/cosmetic-dentistry" element={<OnlineCosmeticDentistryPage />} />

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
