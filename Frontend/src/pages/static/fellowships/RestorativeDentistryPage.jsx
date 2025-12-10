import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function RestorativeDentistryPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Fellowship in Restorative Dentistry</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Introduction</h3>
                        <p>
                            The Two-Month Fellowship in Restorative Dentistry is a specialized program designed for dental professionals seeking to enhance their knowledge and expertise in the field of restorative dentistry. This program is aimed at providing a comprehensive understanding of advanced restorative techniques, materials, and clinical skills.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Course Duration</h3>
                        <p>
                            The fellowship program spans two months, offering an intensive and focused curriculum that equips participants with the proficiency required for restorative dentistry.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-4">Key Learning Objectives</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-slate-900">Fundamentals of Restorative Dentistry:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Review the foundational principles of restorative dentistry.</li>
                                    <li>Explore the importance of diagnosis, treatment planning, and patient communication.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Composite Resin Restorations:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Gain proficiency in direct and indirect composite resin restorations.</li>
                                    <li>Learn advanced techniques for achieving optimal esthetics and longevity.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Dental Materials:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Understand the characteristics and applications of various restorative materials.</li>
                                    <li>Explore the latest developments in materials for restorative dentistry.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Ceramic Restorations:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Master the design, preparation, and placement of ceramic restorations, including inlays, onlays, and crowns.</li>
                                    <li>Explore the esthetic considerations in ceramic restorations.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Endodontic and Restorative Integration:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Learn the importance of endodontic treatment in the context of restorative dentistry.</li>
                                    <li>Understand the role of post and core build-up in restoring endodontically treated teeth.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Implant-Supported Restorations:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Gain knowledge of implant restorations, including abutment selection and crown placement.</li>
                                    <li>Learn to create harmonious restorations in implant cases.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Esthetic Smile Makeovers:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Explore the principles of smile design and full-mouth rehabilitation.</li>
                                    <li>Understand treatment planning for comprehensive esthetic cases.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Occlusion and TMD:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Learn about occlusal principles and their importance in restorative dentistry.</li>
                                    <li>Understand temporomandibular joint (TMJ) disorders and their management.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Clinical Experience:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Participate in supervised clinical sessions to practice restorative techniques on patient cases.</li>
                                    <li>Gain hands-on experience in planning, preparing, and placing restorations.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Certification</h3>
                        <p>
                            Upon successful completion of the program, participants will receive a Two-Month Fellowship in Restorative Dentistry certificate.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Who Should Attend</h3>
                        <p>
                            This fellowship program is suitable for licensed dentists who wish to specialize in restorative dentistry, BDS/MDS/ Equivalent Degree holders.
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
