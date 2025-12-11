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

                        {/* Access Control Check */}
                        {user ? (
                            <div className="space-y-8">
                                {/* Vimeo Video Player */}
                                <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg relative">
                                    {loadingInfo && (
                                        <div className="absolute inset-0 z-10 bg-slate-900 flex items-center justify-center">
                                            <Loader text="Loading video..." />
                                        </div>
                                    )}
                                    {selectedVideo ? (
                                        <div className="w-full h-full">
                                            <div
                                                className="w-full h-full"
                                                dangerouslySetInnerHTML={{ __html: selectedVideo.embedTag }}
                                            />
                                        </div>
                                    ) : course.vimeoId ? (
                                        <iframe
                                            src={`https://player.vimeo.com/video/${course.vimeoId}?h=00000000&badge=0&autopause=0&player_id=0&app_id=58479`}
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                            title={course.title}
                                        ></iframe>
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-white/50 bg-slate-900">
                                            <PlayCircle className="h-16 w-16 mb-4 opacity-50" />
                                            <p>Select a video to start watching</p>
                                        </div>
                                    )}
                                </div>

                                <div className="prose max-w-none text-slate-700">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{selectedVideo ? selectedVideo.title : 'Course Description'}</h3>
                                    <p>{course.description}</p>
                                </div>
                            </div>
                        ) : (
                            /* Locked State */
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-6">
                                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto text-slate-500">
                                    <Lock className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Restricted Access</h3>
                                    <p className="text-slate-600 max-w-md mx-auto">
                                        You need to be signed in to view the course content and videos for {course.title}.
                                    </p>
                                </div>
                                <button
                                    onClick={() => navigate('/auth')}
                                    className="btn-brand inline-flex items-center gap-2 px-8"
                                >
                                    Sign In to Access
                                </button>
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
