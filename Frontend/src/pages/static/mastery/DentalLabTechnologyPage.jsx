import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function DentalLabTechnologyPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Dental Lab Technology Course</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p>
                            The participant will be extensively trained from basics to most advanced prosthetic work, which include acrylic work, fabrication of dentures, removal, fixed, chrome cobalt, porcelain crowns, Zirconium crowns, flexible dentures, metal work, ortho appliances, cad-cam, scan, and milling.
                        </p>
                        <p className="mt-2">
                            Our instructors are prosthodontists and certified dental technologists.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-4">Curriculum</h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">I - Acrylic Prosthesis</h4>
                                <p className="text-sm text-slate-500 mb-2">Duration: 01 to 02 months</p>
                                <ul className="list-disc pl-5">
                                    <li>Introduction to Dental Lab Technology</li>
                                    <li>Dental Anatomy & Materials</li>
                                    <li>Complete Denture processes techniques</li>
                                    <li>Dentures – Casts/Trays/Rims</li>
                                    <li>BPS dentures</li>
                                    <li>Flexible dentures</li>
                                    <li>Immediate Dentures</li>
                                    <li>Denture Repair</li>
                                    <li>Orthodontic Appliances – Removable</li>
                                    <li>Removable partial Dentures (RPD)</li>
                                    <li>RPD Survey and Design</li>
                                    <li>Over dentures</li>
                                    <li>Implant supported dentures</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">II - Fixed Prosthesis</h4>
                                <p className="text-sm text-slate-500 mb-2">Duration: 01-02 months</p>
                                <ul className="list-disc pl-5">
                                    <li>Mould preparation</li>
                                    <li>Wax Pattern Construction</li>
                                    <li>Temporary crowns making</li>
                                    <li>Metal coping Fabrication</li>
                                    <li>Chrome cobalt work</li>
                                    <li>Introduction to Porcelain</li>
                                    <li>Porcelain fused metal</li>
                                    <li>All ceramic crowns</li>
                                    <li>Advanced Porcelain Techniques</li>
                                    <li>Shade selection</li>
                                    <li>Color modifications</li>
                                    <li>Trimming and polishing</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">III - Implant Prosthesis</h4>
                                <p className="text-sm text-slate-500 mb-2">Duration: 01 month</p>
                                <ul className="list-disc pl-5">
                                    <li>Hybrid dentures</li>
                                    <li>Customized abutments</li>
                                    <li>Screw retained implants</li>
                                    <li>Abutment milling</li>
                                    <li>Full arch hybrids dentures</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">IV - CAD CAM</h4>
                                <p className="text-sm text-slate-500 mb-2">Duration: 15 days</p>
                                <ul className="list-disc pl-5">
                                    <li>CAD CAM</li>
                                    <li>Scan and milling</li>
                                </ul>
                            </div>
                        </div>
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
