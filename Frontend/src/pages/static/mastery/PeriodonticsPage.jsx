import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PeriodonticsPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Periodontics Clinical Course</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 05 days</p>
                        <p><strong>Venue:</strong> IDA Dental Academy, Hyderabad</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Course Topics</h3>
                        <ul className="list-disc pl-5 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
                            <li>Principles of diagnosis and treatment planning</li>
                            <li>To understand Gingival and periodontal diseases</li>
                            <li>Prescribing medications in periodontal diseases</li>
                            <li>Techniques of curettage & root planning</li>
                            <li>Periodontal surgeries</li>
                            <li>Understanding surgical instruments</li>
                            <li>Incisions and suturing techniques</li>
                            <li>Flap types, flap designs</li>
                            <li>Gingivectomy</li>
                            <li>Flap surgery</li>
                            <li>Crown lengthening procedures</li>
                            <li>Local drug delivery</li>
                            <li>Tissue guided regeneration</li>
                            <li>Gingival recession and treatment</li>
                            <li>Bone graft selections and placement techniques</li>
                        </ul>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Hands-on Training</h3>
                        <p>
                            Participants will perform procedures on dummies and also on patients.
                        </p>
                        <p className="mt-4">
                            Post training support shall be given to participant via online for next six months for participant to accommodate Periodontics into practice.
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
