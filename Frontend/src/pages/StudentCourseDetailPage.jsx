import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import API from '../api';
import { studentCourses } from '../data/studentCourses';
import { Lock, PlayCircle } from 'lucide-react';
import Loader from '../components/Loader';

export default function StudentCourseDetailPage() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    // Find the course from data
    const [folders, setFolders] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loadingInfo, setLoadingInfo] = useState(true);

    // Find the course from data
    const course = studentCourses.find(c => c.id === courseId);

    useEffect(() => {
        if (courseId) {
            fetchFolders();
        }
    }, [courseId]);

    const fetchFolders = async () => {
        try {
            const res = await API.get(`/api/video-folders?studentCourseId=${courseId}`);
            setFolders(res.data);
            // Default to first video of first folder if available
            if (res.data.length > 0 && res.data[0].videos.length > 0) {
                setSelectedVideo(res.data[0].videos[0]);
            }
        } catch (err) {
            console.error("Failed to fetch folders", err);
        } finally {
            setLoadingInfo(false);
        }
    };

    // Redirect if course not found
    useEffect(() => {
        if (!course) {
            navigate('/courses/student');
        }
    }, [course, navigate]);

    if (!course) return null;

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/courses/student')}
                    className="text-cyan-600 hover:text-cyan-700 font-medium mb-6 flex items-center gap-2"
                >
                    ← Back to Student Courses
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2 space-y-8">
                        <h1 className="text-4xl font-bold text-slate-900">{course.title}</h1>

                        {/* Enrollment CTA - Visible to All */}
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-12 text-center space-y-6">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Enroll Now</h3>
                                <p className="text-slate-600 max-w-md mx-auto">
                                    Interested in this course? Contact us via WhatsApp to complete your enrollment for {course.title}.
                                </p>
                            </div>
                            <a
                                href={`https://wa.me/9032018887?text=Hello, I am interested in enrolling for the student course: ${course.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-emerald-200"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Description (Moved out of conditional) */}
                        <div className="prose max-w-none text-slate-700 mt-8">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Course Description</h3>
                            <p>{course.description}</p>
                        </div>


                        {/* Syllabus Section - Visible to All */}
                        {course.syllabus && course.syllabus.length > 0 && (
                            <div className="mt-12 border-t border-slate-200 pt-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Detailed Syllabus</h2>
                                <div className="space-y-4">
                                    {course.syllabus.map((item, index) => (
                                        <div key={index} className="bg-slate-50 border border-slate-100 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                            <p className="text-slate-700 leading-relaxed font-medium">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="space-y-6">
                        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
                            <h3 className="text-lg font-semibold text-cyan-900 mb-3">Course Details</h3>
                            <ul className="space-y-3 text-cyan-800 text-sm">
                                <li className="flex justify-between">
                                    <span>Access:</span>
                                    <span className="font-semibold">{user ? 'Unlocked' : 'Restricted'}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Type:</span>
                                    <span className="font-semibold">Video Lecture</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Level:</span>
                                    <span className="font-semibold">Dental Student</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Modules:</span>
                                    <span className="font-semibold">{folders.length}</span>
                                </li>
                            </ul>
                        </div>

                        {/* YouTube Playlist Button */}
                        {course.youtubePlaylist && (
                            <a
                                href={course.youtubePlaylist}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <div className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl shadow-sm transition-colors flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight">Watch Playlist</h3>
                                            <p className="text-red-100 text-sm">View full course videos on YouTube</p>
                                        </div>
                                    </div>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </a>
                        )}

                        {/* Video Playlist - Only show if logged in */}
                        {user && folders.length > 0 && (
                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                                <div className="p-4 bg-slate-50 border-b border-slate-200">
                                    <h3 className="font-bold text-slate-800">Course Content</h3>
                                </div>
                                <div className="max-h-[500px] overflow-y-auto">
                                    {folders.map(folder => (
                                        <div key={folder._id}>
                                            <div className="px-4 py-2 bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider sticky top-0">
                                                {folder.name}
                                            </div>
                                            <div className="divide-y divide-slate-100">
                                                {folder.videos.map(video => (
                                                    <button
                                                        key={video._id}
                                                        onClick={() => setSelectedVideo(video)}
                                                        className={`w-full text-left p-3 hover:bg-slate-50 transition-colors flex items-start gap-3 ${selectedVideo?._id === video._id ? 'bg-cyan-50 border-l-4 border-cyan-500' : ''}`}
                                                    >
                                                        <PlayCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${selectedVideo?._id === video._id ? 'text-cyan-600' : 'text-slate-400'}`} />
                                                        <div>
                                                            <p className={`text-sm font-medium ${selectedVideo?._id === video._id ? 'text-cyan-900' : 'text-slate-700'}`}>
                                                                {video.title}
                                                            </p>
                                                            <p className="text-xs text-slate-400 mt-1">
                                                                Video
                                                            </p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
