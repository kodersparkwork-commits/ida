import React from 'react';
import { useNavigate } from 'react-router-dom';
import { studentCourses } from '../../data/studentCourses';
import { GraduationCap, ArrowRight } from 'lucide-react';

export default function StudentCoursesPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Student Courses</h1>
                    <p className="text-lg text-slate-600">
                        Comprehensive video lectures and study materials for dental students across all years.
                        Access high-quality educational content designed to master your curriculum.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studentCourses.map((course) => (
                        <div
                            key={course.id}
                            className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="h-12 w-12 rounded-xl bg-cyan-100/50 flex items-center justify-center text-cyan-600 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                                <GraduationCap className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {course.title}
                            </h3>

                            <p className="text-slate-600 mb-6 line-clamp-2">
                                {course.description}
                            </p>

                            <button
                                onClick={() => navigate(`/courses/student/${course.id}`)}
                                className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-3 transition-all"
                            >
                                View Course
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
