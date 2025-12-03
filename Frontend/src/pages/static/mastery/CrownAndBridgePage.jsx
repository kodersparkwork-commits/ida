import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CrownAndBridgePage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Crown & Bridge Course</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 5 days</p>
                        <p><strong>Course Venue:</strong> IDA Dental Academy, Hyderabad</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Course Topics</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Diagnosis and Treatment Planning, design & fabrication techniques</li>
                            <li>Principles of tooth preparation</li>
                            <li>Impression making</li>
                            <li>Shade selection</li>
                            <li>
                                <span className="font-semibold">Tooth preparation for various crowns:</span>
                                <ul className="list-circle pl-5 mt-1">
                                    <li>Full Metal Crowns</li>
                                    <li>Metal Ceramics</li>
                                    <li>Zirconium crowns</li>
                                    <li>E-max crowns</li>
                                </ul>
                            </li>
                            <li>Gingival Retraction</li>
                            <li>Elastomeric Impression making</li>
                            <li>Temporization techniques</li>
                            <li>Luting & cementing procedures</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-10">
                    <button
                        onClick={() => navigate('/contact')}
                        className="btn-brand w-full"
                    >
                        Enquire Now
                    </button>
                </div>
            </div>
        </div>
    );
}
