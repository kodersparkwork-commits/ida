import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DentalImplantologyPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Fellowship In Dental Implantology</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Introduction</h3>
                        <p>
                            The Fellowship in Dental Implantology is an advanced and comprehensive program designed for dental professionals who wish to gain specialized knowledge and hands-on skills in the field of dental implantology. Dental implants have revolutionized the field of dentistry, providing effective solutions for tooth replacement and enhancing patients’ oral health and quality of life. This fellowship program aims to equip participants with the expertise required to plan, place, and manage dental implants successfully.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Course Duration</h3>
                        <p>
                            The Fellowship in Dental Implantology is typically a one-year program.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-4">Key Learning Objectives</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-slate-900">Comprehensive Understanding of Dental Implantology:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Explore the history and evolution of dental implants.</li>
                                    <li>Learn the fundamentals of implant biology and biomechanics.</li>
                                    <li>Understand the various types of dental implants and their applications.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Diagnosis and Treatment Planning:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Develop the skills to evaluate patients for implant treatment.</li>
                                    <li>Create personalized treatment plans based on patient needs.</li>
                                    <li>Consider factors such as bone quality, quantity, and patient medical history.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Surgical Techniques:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Master implant placement techniques, including flapless and flapped procedures.</li>
                                    <li>Understand the use of surgical guides for precise implant positioning.</li>
                                    <li>Gain proficiency in bone grafting and sinus lift procedures.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Prosthodontics and Restorative Dentistry:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Learn how to design and fabricate implant-supported restorations.</li>
                                    <li>Explore prosthetic options, such as crowns, bridges, and dentures.</li>
                                    <li>Understand the importance of occlusion and aesthetics in implant dentistry.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Complications and Management:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Identify common complications and their solutions.</li>
                                    <li>Develop the ability to manage peri-implantitis and other implant-related issues.</li>
                                    <li>Explore strategies for long-term implant maintenance and follow-up.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Digital Dentistry and Emerging Technologies:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Utilize digital tools, including CBCT scans and CAD/CAM technology.</li>
                                    <li>Stay updated on the latest trends and advancements in implantology.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Clinical Experience:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Gain hands-on experience through supervised clinical sessions.</li>
                                    <li>Perform implant placements and restoration procedures under guidance.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Ethical and Legal Aspects:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Understand the ethical and legal considerations in implant dentistry.</li>
                                    <li>Learn about informed consent, patient documentation, and professional responsibilities.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Certification</h3>
                        <p>
                            Upon successful completion of the program, participants will receive a Fellowship in Dental Implantology certificate, which demonstrates their expertise in implant dentistry.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Who Should Attend</h3>
                        <p>
                            This fellowship program is designed for licensed dentists who have completed their BDS/MDS / equitant degree.
                        </p>
                    </section>

                    <p className="font-medium text-cyan-700">
                        For course dates and fees contact us
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
