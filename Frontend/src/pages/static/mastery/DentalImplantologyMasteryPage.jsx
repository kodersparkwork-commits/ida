import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DentalImplantologyMasteryPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Multi System Implantology Training Program</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 6 days</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Training Covers</h3>
                        <ul className="list-disc pl-5 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
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
                            <li>Participant home task Presentations</li>
                            <li>Live demo prosthesis delivery</li>
                            <li>Participant Clinics- Impression making & Prosthesis delivery</li>
                            <li>Implant Aesthetics</li>
                        </ul>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Post Training Support</h3>
                        <p>
                            Post training support shall be given to participants via online for next six months for you to accommodate Implant dentistry into your practice.
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
