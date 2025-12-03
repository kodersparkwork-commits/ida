import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CosmeticDentistryPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Fellowship in Facial & Dental Cosmetology</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Introduction</h3>
                        <p>
                            The Two-Month Fellowship in Cosmetic Dentistry with a focus on Aesthetic Restorations is an intensive program designed for dental professionals who aspire to excel in cosmetic dentistry, specifically in the realm of aesthetic restorations. This program covers a range of topics related to smile evaluation, aesthetic considerations, and hands-on training in various aesthetic dental procedures.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Course Duration</h3>
                        <p>
                            This fellowship program spans two months, offering a concentrated curriculum that provides participants with the necessary knowledge and skills for performing aesthetic restorations.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-4">Key Course Topics</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-slate-900">Smile Evaluation and Treatment Planning:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Learn how to assess and evaluate a patient’s smile.</li>
                                    <li>Develop individualized treatment plans based on patient-specific needs and aesthetic considerations.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Anterior and Posterior Direct Composites:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Gain proficiency in the art of direct composite resin bonding for both front and back teeth.</li>
                                    <li>Master color matching, contouring, and finishing techniques.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">All-Ceramic Systems:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Explore the preparation, impression, and temporization of all-ceramic crowns and veneers.</li>
                                    <li>Understand the benefits and considerations of all-ceramic restorations.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Cementation of All-Ceramic Crowns, Laminates & Veneers:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Learn the techniques for precise cementation of various aesthetic restorations.</li>
                                    <li>Understand the importance of adhesive dentistry for long-term success.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Managing Tooth Sensitivity:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Discover strategies to manage and address tooth sensitivity in patients undergoing aesthetic restorations.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Tooth Bleaching Procedures:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Gain knowledge in both home and office tooth bleaching techniques.</li>
                                    <li>Understand the indications, contraindications, and potential complications.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Dental Jewelry:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Explore the application of dental jewelry for aesthetic enhancement.</li>
                                    <li>Understand the procedures and materials used in dental jewelry placement.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Interdisciplinary Aesthetics:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Learn how to integrate cosmetic dentistry with other aesthetic procedures.</li>
                                    <li>Develop treatment plans for comprehensive aesthetic makeovers.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Aesthetic Skin Procedures:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Understand the structure and function of the skin.</li>
                                    <li>Learn about age-related changes, wrinkles, and skin texture.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Chemical Peels and Microdermabrasion:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Gain expertise in chemical peels, including types, mechanisms, indications, and protocols.</li>
                                    <li>Learn about the mechanism of action, types of machines, and advantages of microdermabrasion.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Facial Anatomy and Aesthetics:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Explore the muscles of facial expression and their functions.</li>
                                    <li>Understand the anatomy of the face, esthetic units, and dynamic wrinkles.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Botulinum Toxin and Dermal Fillers:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Learn about botulinum toxin, its mechanism of action, and indications.</li>
                                    <li>Explore different types of dermal fillers, their mechanisms, and applications.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Certification</h3>
                        <p>
                            Upon successful completion of the program, participants will receive a Two-Month Fellowship in Cosmetic Dentistry certificate.
                        </p>
                    </section>

                    <p className="font-medium text-cyan-700">
                        For more details contact us
                    </p>
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
