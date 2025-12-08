import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function OnlineEndodonticsPage() {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="text-cyan-600 hover:text-cyan-700 font-medium mb-6"
                >
                    ← Back
                </button>

                <h1 className="text-4xl font-bold text-slate-900 mb-2">Online Endodontics Course</h1>
                {!user?.enrolledCourses?.includes('online-endodontics') && (
                    <p className="text-xl text-slate-600 mb-8">Course Fee: <span className="font-semibold text-slate-900">$500 USD</span> – 12 Months unlimited access</p>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Course Overview</h3>
                            <p className="text-slate-700 mb-4">
                                <strong>Duration:</strong> 1 YEAR - ONLINE
                            </p>
                            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Course Outline</h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                <li>Fundamental aspects in RCT</li>
                                <li>Access cavity preparation for each tooth</li>
                                <li>Tips to locate canal orifices</li>
                                <li>Cleaning & shaping of root canals</li>
                                <li>Knowledge about different irrigating solutions</li>
                                <li>Various intra canal medicaments used in RCT</li>
                                <li>Obturation methods both theory and practical demonstration</li>
                                <li>Tips in RCT (problems faced in access cavity preparation, cleaning & shaping and obturation)</li>
                                <li>How to deal with calcified canals, separated instruments</li>
                                <li>Single sitting RCT</li>
                                <li>Rotary Endodontics</li>
                            </ul>
                        </section>

                        <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Practical Training</h3>
                            <p className="text-slate-700 mb-4">
                                Participant will practice on dummies & extracted teeth.
                            </p>
                            <p className="text-sm text-slate-500 italic">
                                WE REQUEST PARTICIPANTS TO GET AS MANY AS EXTRACTED TEETH, HAND PIECE AND SOME ROOT CANAL OPENING BURS.
                            </p>
                        </section>
                    </div>

                    {/* Right Column: Enquire */}
                    <div className="space-y-6">
                        {/* Video Section with Access Control */}
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black relative group">
                            {user && user.enrolledCourses && user.enrolledCourses.includes('online-endodontics') ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/OdVtIUQhycg"
                                    title="Endodontics Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center p-6 text-center z-10">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Premium Content Locked</h3>
                                    <p className="text-slate-300 mb-6 max-w-sm">Purchase this course to access the full video lectures and study details.</p>
                                    <button
                                        onClick={() => navigate('/payment/online-endodontics')}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Enroll Now to Unlock
                                    </button>
                                </div>
                            )}
                        </div>
                        <p className="text-sm text-center text-slate-500">Video Lecture: Endodontics Course</p>

                        {!user?.enrolledCourses?.includes('online-endodontics') && (
                            <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100 text-center">
                                <p className="text-lg font-semibold text-cyan-900 mb-2">Get Started Today</p>
                                <p className="text-cyan-700 mb-4">12 months unlimited access @ $500 USD.</p>
                                {user ? (
                                    <button
                                        onClick={() => navigate('/payment/online-endodontics')}
                                        className="btn-brand w-full"
                                    >
                                        Buy Now
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => navigate('/auth')}
                                        className="btn-brand w-full"
                                    >
                                        Sign In
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
