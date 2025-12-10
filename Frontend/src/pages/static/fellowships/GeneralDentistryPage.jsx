import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function GeneralDentistryPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Fellowship In General Dentistry</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Introduction</h3>
                        <p>
                            The Six-Month Fellowship in General Dentistry is a short-term, intensive program designed to provide dental professionals with a comprehensive understanding of general dentistry concepts, practical skills, and clinical experience. This program caters to both recent dental graduates looking to enhance their foundational knowledge and practicing dentists seeking to expand their skills and stay updated with the latest developments in the field.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Course Duration</h3>
                        <p>
                            The Six-Month Fellowship in General Dentistry is a concise and focused program that typically lasts for six months, allowing participants to gain valuable insights and hands-on experience within a shorter time frame.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-4">Key Learning Objectives</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-slate-900">Fundamentals of Dentistry:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Review and strengthen the fundamental knowledge of oral anatomy, physiology, and histology.</li>
                                    <li>Understand the principles of dental materials and their applications in restorative dentistry.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Diagnosis and Treatment Planning:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Develop diagnostic skills to assess various oral health conditions.</li>
                                    <li>Learn how to formulate effective treatment plans for different dental issues, considering patient preferences and medical history.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Restorative Dentistry:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Gain proficiency in restorative procedures such as dental fillings, crowns, and bridges.</li>
                                    <li>Explore the latest advancements in restorative materials and techniques.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Periodontics and Oral Health:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Understand periodontal diseases and their management.</li>
                                    <li>Learn the basics of scaling, root planing, and non-surgical periodontal therapy.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Endodontics:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Master the art of root canal treatment, including diagnosis, instrumentation, and obturation.</li>
                                    <li>Familiarize yourself with modern endodontic techniques and equipment.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Oral Surgery:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Acquire skills in basic oral surgery procedures, such as tooth extractions.</li>
                                    <li>Learn about local anesthesia administration and surgical techniques.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Pediatric Dentistry:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Explore the unique challenges and considerations in treating pediatric patients.</li>
                                    <li>Gain insights into child behavior management and preventive dentistry.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Ethics and Patient Communication:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Understand the ethical principles of dentistry.</li>
                                    <li>Enhance communication skills to establish rapport with patients and ensure informed consent.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Clinical Experience:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Participate in supervised clinical sessions to apply theoretical knowledge in real patient cases.</li>
                                    <li>Perform a variety of dental procedures under the guidance of experienced faculty.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Certification</h3>
                        <p>
                            Upon successful completion of the program, participants will be awarded a Six-Month Fellowship in General Dentistry certificate, recognizing their achievement and dedication to advancing their skills in the field of general dentistry.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Who Should Attend</h3>
                        <p>
                            This fellowship program is open to recent dental graduates and practicing dentists with BDS/MDS qualifications.
                        </p>
                    </section>

                    <p className="font-medium text-cyan-700">
                        To find more about the course contact us
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
