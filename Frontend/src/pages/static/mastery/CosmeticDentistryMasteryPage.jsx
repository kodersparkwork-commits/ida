import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CosmeticDentistryMasteryPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Cosmetic Dentistry Course</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 5 days</p>
                        <p><strong>Venue:</strong> IDA Dental Academy, Hyderabad, India</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Course Outline</h3>
                        <ul className="list-disc pl-5 space-y-2">
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
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Hands-on Training</h3>
                        <p>
                            Participant will be trained on dummies & simulated models.
                        </p>
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
