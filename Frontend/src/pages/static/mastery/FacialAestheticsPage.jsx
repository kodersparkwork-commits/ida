import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function FacialAestheticsPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Facial Aesthetics Course</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 4 days</p>
                        <p><strong>Course Venue:</strong> IDA Dental Academy, Hyderabad, India</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Course Outline</h3>
                        <ul className="list-disc pl-5 space-y-4">
                            <li>
                                <strong>Hands on:</strong> Microdermabrasion
                            </li>
                            <li>
                                <strong>Demonstration:</strong> Chemical Peel, Dermal Filler, and Toxin if available
                            </li>
                            <li>
                                <strong>Lecture 1 – Skin: structure and function:</strong> Skin anatomy, sebaceous gland, sweat gland, hair, skin color, skin texture, age related wrinkles
                            </li>
                            <li>
                                <strong>Lecture 2 – Chemical peels:</strong> Types of peel, mechanism of action, detail about each type, indications, complications, protocol for use
                            </li>
                            <li>
                                <strong>Lecture 3 – Micro-dermabrasion:</strong> Mechanism of action, types of machines, advantages, complications, protocol for use
                            </li>
                            <li>
                                <strong>Demonstration:</strong> Chemical Peel and hand on of Micro-dermabrasion.
                            </li>
                            <li>
                                <strong>Lecture 4 – Muscles of facial expression: function:</strong> Anatomy of face, muscles of facial expression, esthetic units of face, dynamic wrinkles
                            </li>
                            <li>
                                <strong>Lecture 5 – Botulinum toxin:</strong> Basic composition, mechanism of action, indications, complications, protocol for use
                            </li>
                            <li>
                                <strong>Lecture 6 – Dermal fillers:</strong> Types of fillers, mechanism of action, indications, complications, protocol for use
                            </li>
                            <li>
                                <strong>Demonstration:</strong> Dermal fillers and Botulinum toxin.
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="mt-10">
                    {user ? (
                        <button
                            onClick={() => navigate('/contact')}
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
    );
}
