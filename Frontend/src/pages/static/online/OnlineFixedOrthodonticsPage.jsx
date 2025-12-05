import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function OnlineFixedOrthodonticsPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-2">Online Fixed Orthodontics</h1>
                <p className="text-xl text-slate-600 mb-8">Course Fee: <span className="font-semibold text-slate-900">$500 USD</span> – 12 Months unlimited access</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Course Outline</h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                <li>Introduction to fixed orthodontics and straight wire technique</li>
                                <li>Instrumentation and Armamentarium</li>
                                <li>Diagnosis and Treatment plan</li>
                                <li>Dealing with class1, class2, class3 malocclusions</li>
                                <li>Cephalometrics tracing Practice</li>
                                <li>Biomechanics</li>
                                <li>Growth And Development</li>
                                <li>Model Analysis Practice on different casts</li>
                                <li>Removable Appliances</li>
                                <li>Welding Exercises</li>
                                <li>Principles of fixed orthodontics</li>
                                <li>Banding Technique & exercises</li>
                                <li>Bonding Technique & exercises</li>
                                <li>Arch Wire Bending Exercises</li>
                                <li>Making of Separators</li>
                                <li>Wire Separators and elastic separators placing Exercises on Models & patients</li>
                                <li>Practicing of different Arch wire Placement</li>
                                <li>Permanent Anchorage Preparation with SS Wire Making Exercises</li>
                                <li>Habit Breaking Appliances fabrication</li>
                                <li>Soldering technique</li>
                                <li>Retention appliance Making Exercises</li>
                                <li>Expansion appliances</li>
                                <li>Applications of auxiliaries such as Elastics, E-Chain, open coil springs, closed coil springs, Elastic Modules, Ligature tying</li>
                                <li>Case discussions, dealing with complicated cases</li>
                                <li>Surgical orthodontics</li>
                                <li>Recent Advancements in Orthodontics</li>
                            </ul>
                        </section>

                        <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Course Includes</h3>
                            <ul className="list-circle pl-5 space-y-1 text-slate-700">
                                <li>Whiteboard lecture presentations</li>
                                <li>Case Discussions</li>
                                <li>Hundreds of pictures</li>
                                <li>Demo on Models</li>
                                <li>Demo on Patients</li>
                                <li>Subtitles in your own language</li>
                            </ul>
                            <p className="mt-4 text-slate-600">
                                Training covers all aspects of clinical orthodontics simplified for general practitioners. Post-training support provided online for one year.
                            </p>
                            <p className="mt-2 text-slate-600">
                                Study material, Seminars, and participation certificate provided at the end of the course.
                            </p>
                        </section>
                    </div>

                    {/* Right Column: Video and Enquire */}
                    <div className="space-y-6">
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/ZWj-WLgHQAc"
                                title="Online Fixed Orthodontics Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-sm text-center text-slate-500">Demo Video: Online Orthodontics</p>

                        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100 text-center">
                            <p className="text-lg font-semibold text-cyan-900 mb-2">Get Started Today</p>
                            <p className="text-cyan-700 mb-4">12 months unlimited access and support @ $500 USD only.</p>
                            {user ? (
                                <button
                                    onClick={() => navigate('/payment/online-fixed-orthodontics')}
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
                    </div>
                </div>
            </div>
        </div>
    );
}
