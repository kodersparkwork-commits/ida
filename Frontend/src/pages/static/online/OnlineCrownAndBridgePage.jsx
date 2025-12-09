import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function OnlineCrownAndBridgePage() {
    const navigate = useNavigate();
    const { user } = useAuth();

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
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Online Crown and Bridge Course</h1>
                    {!user?.enrolledCourses?.includes('online-crown-and-bridge') && (
                        <p className="text-xl text-slate-600">Course Fee: <span className="font-semibold text-slate-900">$500 USD</span> – 12 Months unlimited access</p>
                    )}
                </div>
            </div>

            {/* Theater Mode Video Section */}
            <div className="bg-slate-900 py-12 shadow-inner">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black relative group ring-1 ring-white/10">
                        {user && user.enrolledCourses && user.enrolledCourses.includes('online-crown-and-bridge') ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/nDhNoo2mIDM"
                                title="Crown and Bridge Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                                <p className="text-slate-300 mb-8 max-w-md text-lg">Purchase this course to access the full video lectures and study details.</p>
                                <button
                                    onClick={() => navigate('/payment/online-crown-and-bridge')}
                                    className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-cyan-500/25"
                                >
                                    Enroll Now to Unlock
                                </button>
                            </div>
                        )}
                    </div>
                    <p className="text-center text-slate-400 mt-4 text-sm font-medium tracking-wide uppercase">Demo Video: Crown and Bridge Course</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Course Overview</h3>
                            <p className="text-slate-700 mb-6 text-lg">
                                <strong>Duration:</strong> 1 YEAR ONLINE
                            </p>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Course Topics</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5 text-slate-700">
                                <li>Diagnosis and Treatment Planning</li>
                                <li>Principles of tooth preparation</li>
                                <li>Impression making</li>
                                <li>Shade selection</li>
                                <li>Full Metal Crowns</li>
                                <li>Metal Ceramics</li>
                                <li>Zirconium crowns</li>
                                <li>E-max crowns</li>
                                <li>Gingival Retraction</li>
                                <li>Elastomeric Impression making</li>
                                <li>Temporization techniques</li>
                                <li>Luting & cementing procedures</li>
                                <li>Design & fabrication techniques</li>
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: CTA */}
                    <div className="space-y-8">
                        {!user?.enrolledCourses?.includes('online-crown-and-bridge') && (
                            <div className="bg-white p-6 rounded-2xl border border-cyan-100 shadow-xl shadow-cyan-900/5 sticky top-24">
                                <div className="text-center mb-6">
                                    <span className="inline-block px-4 py-1.5 bg-cyan-50 text-cyan-700 text-sm font-semibold rounded-full mb-3">Limited Access</span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Started Today</h3>
                                    <p className="text-slate-500">12 months unlimited access</p>
                                </div>

                                <div className="text-center mb-8">
                                    <span className="text-4xl font-bold text-cyan-600">$500</span>
                                    <span className="text-slate-400 text-sm ml-2">USD</span>
                                </div>

                                {user ? (
                                    <button
                                        onClick={() => navigate('/payment/online-crown-and-bridge')}
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
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
