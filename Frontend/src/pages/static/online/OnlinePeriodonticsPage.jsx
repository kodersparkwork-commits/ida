import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function OnlinePeriodonticsPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-2">Online Periodontics Course</h1>
                <p className="text-xl text-slate-600 mb-8">Course Fee: <span className="font-semibold text-slate-900">$500 USD</span> – 12 Months unlimited access</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Course Overview</h3>
                            <p className="text-slate-700 mb-4">
                                <strong>Duration:</strong> 1 YEAR-ONLINE
                            </p>
                            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Course Topics</h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700">
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
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Practical Training & Support</h3>
                            <p className="text-slate-700 mb-4">
                                Participants will perform procedures on dummies and also on patients.
                            </p>
                            <p className="text-slate-600">
                                Post training support shall be given to participant via online for next six months for participant to accommodate Periodontics into practice.
                            </p>
                        </section>
                    </div>

                    {/* Right Column: Enquire */}
                    <div className="space-y-6">
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/AuNvciOnxLo"
                                title="Periodontics Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-sm text-center text-slate-500">Demo Video: Periodontics Course</p>

                        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100 text-center">
                            <p className="text-lg font-semibold text-cyan-900 mb-2">Get Started Today</p>
                            <p className="text-cyan-700 mb-4">12 months unlimited access @ $500 USD.</p>
                            {user ? (
                                <button
                                    onClick={() => navigate('/payment/online-periodontics')}
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
