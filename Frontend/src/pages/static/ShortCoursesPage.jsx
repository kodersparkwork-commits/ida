import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShortCoursesPage() {
    const navigate = useNavigate();

    const courses = [
        {
            title: "Latest Trends in Dental Materials",
            duration: "2-3 hours",
            description: "Overview of new materials and advancements in restorative dentistry."
        },
        {
            title: "Effective Communication with Dental Patients",
            duration: "2 hours",
            description: "Strategies for improving patient communication and building rapport."
        },
        {
            title: "Introduction to Digital Dentistry",
            duration: "3 hours",
            description: "Basics of digital impressions, CAD/CAM technology, and intraoral scanning."
        },
        {
            title: "Emergency Procedures in Dentistry",
            duration: "2 hours",
            description: "Managing common dental emergencies and immediate care."
        },
        {
            title: "Infection Control in Dental Practice",
            duration: "2-3 hours",
            description: "Review of current infection control protocols and best practices."
        },
        {
            title: "Overview of Pediatric Dentistry",
            duration: "2-3 hours",
            description: "Key considerations and techniques for treating pediatric patients."
        },
        {
            title: "Periodontal Health and Maintenance",
            duration: "2-3 hours",
            description: "Updates on periodontal disease management and maintenance."
        },
        {
            title: "Introduction to Implant Dentistry",
            duration: "3 hours",
            description: "Basics of dental implantology, including planning and placement."
        },
        {
            title: "Introduction to Cosmetic Dentistry",
            duration: "2 hours",
            description: "Overview of aesthetic considerations and basic cosmetic procedures."
        },
        {
            title: "Endodontic Tips and Tricks",
            duration: "2-3 hours",
            description: "Insights into efficient and effective endodontic techniques."
        },
        {
            title: "Pain Management in Dentistry",
            duration: "2 hours",
            description: "Strategies for pain control and anesthesia in dental procedures."
        },
        {
            title: "Radiographic Interpretation for Dentists",
            duration: "2-3 hours",
            description: "Review of radiographic images and interpretation skills."
        },
        {
            title: "Updates in Oral Cancer Screening",
            duration: "2 hours",
            description: "Awareness and techniques for early detection of oral cancer."
        },
        {
            title: "Introduction to Sleep Dentistry",
            duration: "3 hours",
            description: "Overview of dental sleep medicine and its applications."
        },
        {
            title: "Practice Management Essentials",
            duration: "2 hours",
            description: "Tips for efficient dental practice management and organization."
        },
        {
            title: "Orthodontic Basics for General Dentists",
            duration: "3 hours",
            description: "Introduction to orthodontic principles and treatment options."
        },
        {
            title: "Ethics and Legal Considerations in Dentistry",
            duration: "2 hours",
            description: "Review of ethical issues and legal responsibilities in dental practice."
        },
        {
            title: "Introduction to Laser Dentistry",
            duration: "3 hours",
            description: "Basics of dental laser applications in various procedures"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Short Dental Courses</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Enhance your skills with our focused short-term programs. Available both Online & Offline.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-cyan-700 mb-2">{course.title}</h3>
                            <div className="flex items-center text-sm text-slate-500 mb-4">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {course.duration}
                            </div>
                            <p className="text-slate-600">{course.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-cyan-50 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold text-cyan-900 mb-4">Interested in these courses?</h2>
                    <p className="text-cyan-700 mb-8 max-w-2xl mx-auto">
                        We update our short-term programs on a regular basis. Contact us for more details on schedule and enrollment.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="btn-brand inline-flex items-center"
                    >
                        Contact Us
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
