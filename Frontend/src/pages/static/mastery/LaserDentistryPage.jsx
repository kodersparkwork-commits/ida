import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LaserDentistryPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Lasers in Dentistry</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 02 days</p>
                        <p><strong>Course Venue:</strong> IDA Dental Academy, Hyderabad-India</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Course Outline & Hands-on</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Laser Physics</li>
                            <li>Laser Tissue Interactions, Mode of Operation & Applications</li>
                            <li>Laser Safety Regulations</li>
                            <li>Low Level Laser Therapy, Photo Dynamic Therapy and Bleaching</li>
                            <li>Laser Endodontics</li>
                            <li>Laser Prosthodontics</li>
                            <li>Laser Periodontics</li>
                            <li>Laser Esthetic Dentistry</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Practical Demos</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Frenectomy</li>
                            <li>Depigmentation</li>
                            <li>Implant recovery</li>
                            <li>Bleaching</li>
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
