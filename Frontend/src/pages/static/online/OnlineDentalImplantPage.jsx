import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function OnlineDentalImplantPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-2">Dental Implant Course - Online</h1>
                <p className="text-lg text-slate-500 mb-4">A multi system Implantology training program</p>
                <p className="text-xl text-slate-600 mb-8">Course Fee: <span className="font-semibold text-slate-900">$500 USD</span> – 12 Months unlimited access</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Course Overview</h3>
                            <p className="text-slate-700 mb-4">
                                <strong>Duration:</strong> 1 year online
                            </p>
                            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Training Covers</h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                <li>Introduction to Implant Dentistry</li>
                                <li>History of Implant Dentistry</li>
                                <li>Material science of Dental Implants</li>
                                <li>Various designs of Dental Implants</li>
                                <li>Basic bone anatomy and physiology (Maxilla and Mandible)</li>
                                <li>Concepts of Integration</li>
                                <li>Case selection and planning for implant surgery</li>
                                <li>Armamentarium for implant surgery</li>
                                <li>Prosthetic planning for different edentulous situations (partial and complete)</li>
                                <li>Investigation to evaluate a implant case</li>
                                <li>Surgical principles for implant Dentistry</li>
                                <li>Demonstration of various Armamentarium for implant dentistry</li>
                                <li>Step by step drill sequence for implant placement</li>
                                <li>Cover screw, healing abutment, implant abutment placement</li>
                                <li>Impression analog, implant analog, various impression procedures</li>
                                <li>Radiographs and CBCT reading exercises</li>
                                <li>Complete laboratory steps demonstration</li>
                                <li>Case Selection, preparation of a case for implant surgery</li>
                                <li>Selection of proper Diameter and length of the implant for selected case</li>
                                <li>Surgical placement of implant live (step by step demonstration)</li>
                                <li>Hands on surgical placement by the participant</li>
                                <li>Post operative care of implant case</li>
                                <li>Second stage surgery</li>
                                <li>Healing abutment placement</li>
                                <li>Implant impression procedure step by step demonstration</li>
                                <li>Cementation procedures</li>
                                <li>Implant Occlusion</li>
                                <li>Follow up of Implant Case</li>
                                <li>Immediate Post extraction Implantation</li>
                            </ul>
                        </section>

                        <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Additional Highlights</h3>
                            <ul className="list-circle pl-5 space-y-1 text-slate-700">
                                <li>Participant home task Presentations</li>
                                <li>Live demo prosthesis delivery</li>
                                <li>Participant Clinics - Impression making & Prosthesis delivery</li>
                                <li>Implant Aesthetics</li>
                            </ul>
                            <p className="mt-4 text-slate-600">
                                Post training support shall be given to participants via online for next six months for you to accommodate Implant dentistry into your practice.
                            </p>
                        </section>
                    </div>

                    {/* Right Column: Enquire */}
                    <div className="space-y-6">
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/cdPTyb5tgTU"
                                title="Dental Implant Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-sm text-center text-slate-500">Demo Video: Dental Implant Course</p>

                        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100 text-center">
                            <p className="text-lg font-semibold text-cyan-900 mb-2">Get Started Today</p>
                            <p className="text-cyan-700 mb-4">12 months unlimited access @ $500 USD.</p>
                            {user ? (
                                <button
                                    onClick={() => navigate('/payment/online-dental-implant')}
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
