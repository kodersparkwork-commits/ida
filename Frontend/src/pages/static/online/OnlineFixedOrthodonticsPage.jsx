import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function OnlineFixedOrthodonticsPage() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const [activeVideo, setActiveVideo] = useState('intro');
    const [videoFolders, setVideoFolders] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState(null);

    React.useEffect(() => {
        import('../../../api').then(module => {
            const API = module.default;
            API.get('/api/video-folders')
                .then(res => {
                    // Filter folders for this specific course
                    const courseFolders = res.data.filter(folder =>
                        folder.courseId?.slug === 'online-fixed-orthodontics'
                    );
                    setVideoFolders(courseFolders);
                })
                .catch(err => console.error("Failed to load video folders", err));
        });
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-cyan-600 hover:text-cyan-700 font-medium mb-4"
                    >
                        ← Back
                    </button>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Online Fixed Orthodontics</h1>
                    {!user?.enrolledCourses?.includes('online-fixed-orthodontics') && (
                        <p className="text-xl text-slate-600">Course Fee: <span className="font-semibold text-slate-900">$500 USD</span> – 12 Months unlimited access</p>
                    )}
                </div>
            </div>

            {/* Theater Mode Video Section */}
            <div className="bg-slate-900 py-12 shadow-inner">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Player */}
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black relative group ring-1 ring-white/10 mb-6">
                        {user && user.enrolledCourses && user.enrolledCourses.includes('online-fixed-orthodontics') ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/videoseries?list=PL4GxLqfq0Wle9L4efDGtl_9scEHKqvHqW"
                                title="Fixed Orthodontics Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        ) : (
                            <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center p-6 text-center z-10 backdrop-blur-sm">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md shadow-lg border border-white/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Premium Content Locked</h3>
                                <p className="text-slate-300 mb-8 max-w-md text-lg">Purchase this course to access the full video lectures, case studies, and mentorship.</p>
                                <button
                                    onClick={() => navigate('/payment/online-fixed-orthodontics')}
                                    className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-cyan-500/25"
                                >
                                    Enroll Now to Unlock
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Course Content / Playlist Section */}
            {user?.enrolledCourses?.includes('online-fixed-orthodontics') && videoFolders.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Playlist</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {videoFolders.map(folder => (
                            <div
                                key={folder._id}
                                onClick={() => setSelectedFolder(folder)}
                                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer transition-all group text-center"
                            >
                                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-cyan-700 transition-colors">{folder.name}</h3>
                                <p className="text-sm text-slate-500">{folder.videos?.length || 0} Videos</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Video Modal */}
            {selectedFolder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedFolder(null)}>
                    <div className="bg-slate-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col border border-slate-800" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900">
                            <h3 className="text-2xl font-bold text-white">{selectedFolder.name}</h3>
                            <button onClick={() => setSelectedFolder(null)} className="text-slate-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 bg-slate-950">
                            {selectedFolder.videos?.length === 0 ? (
                                <div className="text-center py-20 text-slate-500">
                                    <p>No videos available in this folder yet.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-8">
                                    {selectedFolder.videos.map(video => (
                                        <div key={video._id} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                                            <div className="aspect-video bg-black relative">
                                                <div
                                                    className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
                                                    dangerouslySetInnerHTML={{ __html: video.embedTag }}
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-bold text-white text-lg leading-tight">{video.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Course Details */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Course Outline</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5 text-slate-700">
                                <li>Introduction to fixed orthodontics</li>
                                <li>Instrumentation and Armamentarium</li>
                                <li>Diagnosis and Treatment plan</li>
                                <li>Dealing with class1, class2, class3 malocclusions</li>
                                <li>Cephalometrics tracing Practice</li>
                                <li>Biomechanics</li>
                                <li>Growth And Development</li>
                                <li>Model Analysis Practice</li>
                                <li>Removable Appliances</li>
                                <li>Welding Exercises</li>
                                <li>Principles of fixed orthodontics</li>
                                <li>Banding Technique & exercises</li>
                                <li>Bonding Technique & exercises</li>
                                <li>Arch Wire Bending Exercises</li>
                                <li>Making of Separators</li>
                                <li>Separators placing Exercises</li>
                                <li>Arch wire Placement</li>
                                <li>Anchorage Preparation</li>
                                <li>Habit Breaking Appliances</li>
                                <li>Soldering technique</li>
                                <li>Retention appliance Making</li>
                                <li>Expansion appliances</li>
                                <li>Applications of auxiliaries</li>
                                <li>Case discussions</li>
                                <li>Surgical orthodontics</li>
                                <li>Recent Advancements</li>
                            </ul>
                        </section>

                        <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Course Includes</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3 text-slate-700">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>Whiteboard lecture presentations</span>
                                </div>
                                <div className="flex items-center space-x-3 text-slate-700">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>Case Discussions</span>
                                </div>
                                <div className="flex items-center space-x-3 text-slate-700">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>Hundreds of pictures</span>
                                </div>
                                <div className="flex items-center space-x-3 text-slate-700">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>Demo on Models & Patients</span>
                                </div>
                                <div className="flex items-center space-x-3 text-slate-700">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>Subtitles in your language</span>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-slate-600 mb-2">
                                    Training covers all aspects of clinical orthodontics simplified for general practitioners. Post-training support provided online for one year.
                                </p>
                                <p className="text-slate-600">
                                    Study material, Seminars, and participation certificate provided at the end of the course.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: CTA */}
                    <div className="space-y-8">
                        {!user?.enrolledCourses?.includes('online-fixed-orthodontics') && (
                            <div className="bg-white p-6 rounded-2xl border border-cyan-100 shadow-xl shadow-cyan-900/5 sticky top-24">
                                <div className="text-center mb-6">
                                    <span className="inline-block px-4 py-1.5 bg-cyan-50 text-cyan-700 text-sm font-semibold rounded-full mb-3">Limited Access</span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Started Today</h3>
                                    <p className="text-slate-500">Instant access to all course materials</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                        <span className="text-slate-600">Duration</span>
                                        <span className="font-semibold text-slate-900">12 Months</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                        <span className="text-slate-600">Format</span>
                                        <span className="font-semibold text-slate-900">Online + Support</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                        <span className="text-slate-600">Access</span>
                                        <span className="font-semibold text-slate-900">Unlimited</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                        <span className="text-slate-600">Price</span>
                                        <span className="text-2xl font-bold text-cyan-600">$500</span>
                                    </div>
                                </div>

                                {user ? (
                                    <button
                                        onClick={() => navigate('/payment/online-fixed-orthodontics')}
                                        className="btn-brand w-full py-4 text-lg shadow-lg hover:shadow-cyan-500/25"
                                    >
                                        Enroll Now
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => navigate('/auth')}
                                        className="btn-brand w-full py-4 text-lg shadow-lg hover:shadow-cyan-500/25"
                                    >
                                        Sign In to Enroll
                                    </button>
                                )}
                                <p className="text-center text-xs text-slate-400 mt-4">Secure payment powered by Razorpay</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
