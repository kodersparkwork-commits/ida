import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { studentCourses } from '../../data/studentCourses';
import { BookOpen, ArrowRight, PlayCircle, X, ExternalLink } from 'lucide-react';

export default function StudentCoursesPage() {
    const [playingCourseId, setPlayingCourseId] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl">
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                            Department of Orthodontics
                        </span>
                        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Courses</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Master the fundamentals of orthodontics with our comprehensive video curriculum designed specifically for dental students.
                        </p>
                    </div>
                </div>
            </div>

            {/* Video Preview Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 h-[300px]">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <a
                            href="https://www.youtube.com/playlist?list=PL4GxLqfq0Wle9L4efDGtl_9scEHKqvHqW"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-20 w-20 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300 mb-4"
                        >
                            <PlayCircle className="h-10 w-10 ml-1" />
                        </a>
                        <h2 className="text-3xl font-bold text-white mb-2">Watch Sample Lectures</h2>
                        <p className="text-slate-300 text-lg max-w-2xl">
                            Preview our comprehensive video library.
                        </p>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studentCourses.map((course) => (
                        <div
                            key={course.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                        >
                            {/* Image Aspect Ratio Container */}
                            <div className="relative aspect-video overflow-hidden bg-slate-100">
                                {playingCourseId === course.id && course.youtubePlaylist ? (
                                    <iframe
                                        src={
                                            (course.youtubePlaylist.includes('playlist?list=')
                                                ? course.youtubePlaylist.replace('playlist?list=', 'embed/videoseries?list=')
                                                : course.youtubePlaylist.includes('youtu.be/')
                                                    ? `https://www.youtube.com/embed/${course.youtubePlaylist.split('youtu.be/')[1].split('?')[0]}`
                                                    : course.youtubePlaylist) + '?autoplay=1'
                                        }
                                        title={course.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <>
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPlayingCourseId(course.id);
                                                }}
                                                className="text-white font-medium flex items-center gap-2 hover:text-blue-400 transition-colors"
                                            >
                                                <PlayCircle className="w-8 h-8" />
                                                <span className="text-lg">Watch Video</span>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>
                                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                                        <BookOpen className="w-4 h-4" />
                                        Module {course.id}
                                    </span>
                                    <button
                                        onClick={() => setSelectedCourse(course)}
                                        className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                                    >
                                        View Content
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chapters Modal */}
            {selectedCourse && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
                    <div
                        className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white rounded-t-2xl z-10">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">{selectedCourse.title}</h3>
                                <p className="text-slate-500 text-sm mt-1">Course Content & Chapters</p>
                            </div>
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {selectedCourse.syllabus && selectedCourse.syllabus.length > 0 ? (
                                <div className="space-y-4">
                                    {selectedCourse.syllabus.map((chapter, index) => (
                                        <div key={index} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50/50 hover:border-blue-100 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <p className="text-slate-700 leading-relaxed font-medium">
                                                    {chapter}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-slate-500">
                                    <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                    <p>No detailed chapters available for this course yet.</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex justify-end gap-3">
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="px-6 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-200 transition-colors"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => navigate(`/courses/student/${selectedCourse.id}`)}
                                className="px-6 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                Go to Course Page
                                <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
