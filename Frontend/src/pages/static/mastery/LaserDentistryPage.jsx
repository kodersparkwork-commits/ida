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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Laser Dentistry Course</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 3 days</p>
                        <p><strong>Course Venue:</strong> IDA Dental Academy, Hyderabad</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Course Topics</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Laser Physics</li>
                            <li>Laser Safety</li>
                            <li>Laser Tissue Interaction</li>
                            <li>Soft Tissue Lasers</li>
                            <li>Hard Tissue Lasers</li>
                            <li>Clinical Applications</li>
                            <li>Live Patient Demonstration</li>
                            <li>Hands-on on Goat Jaws</li>
                        </ul>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Certification</h3>
                        <p>
                            Certificate provided at the end of the course.
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
