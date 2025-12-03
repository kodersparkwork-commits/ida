import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OnlineCosmeticDentistryPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="text-cyan-600 hover:text-cyan-700 font-medium mb-6"
                >
                    ← Back
                </button>

                <h1 className="text-4xl font-bold text-slate-900 mb-2">Online Cosmetic Dentistry Course</h1>
                <p className="text-xl text-slate-600 mb-8">Course Fee: <span className="font-semibold text-slate-900">$500 USD</span> – 12 Months unlimited access</p>

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
                                <li>Aesthetic Restorations</li>
                                <li>Smile evaluation, aesthetic considerations and treatment planning</li>
                                <li>Anterior and posterior direct composites</li>
                                <li>All-ceramic systems: preparation, impression and temporisation of all-ceramic crowns and veneers</li>
                                <li>Cementation of all-ceramic crowns, Laminates & veneers</li>
                                <li>Managing Tooth sensitivity</li>
                                <li>Tooth Bleaching procedures (home and office)</li>
                                <li>Dental Jewellery</li>
                                <li>Interdisciplinary Aesthetics</li>
                                <li>Treatment planning for various aesthetic problems</li>
                            </ul>
                        </section>

                        <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Practical Training</h3>
                            <p className="text-slate-700">
                                Participant will be trained on dummies & simulated models.
                            </p>
                        </section>
                    </div>

                    {/* Right Column: Enquire */}
                    <div className="space-y-6">
                        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100 text-center">
                            <p className="text-lg font-semibold text-cyan-900 mb-2">Get Started Today</p>
                            <p className="text-cyan-700 mb-4">12 months unlimited access @ $500 USD.</p>
                            <button
                                onClick={() => navigate('/contact')}
                                className="btn-brand w-full"
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
