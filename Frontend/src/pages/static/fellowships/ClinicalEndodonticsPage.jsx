import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function ClinicalEndodonticsPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Fellowship In Clinical Endodontics</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Introduction</h3>
                        <p>
                            The Two-Month Fellowship in Clinical Endodontics is a specialized program designed for dental professionals looking to deepen their knowledge and skills in the field of endodontics. This intensive program aims to equip participants with a comprehensive understanding of endodontic procedures, diagnostic techniques, and the latest advancements in endodontics.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-2">Course Duration</h3>
                        <p>
                            The fellowship program spans two months, providing a concentrated and focused curriculum that immerses participants in the art and science of clinical endodontics.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-4">Highlights</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-slate-900">Endodontic Diagnosis:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Develop expertise in diagnosing and assessing various endodontic conditions.</li>
                                    <li>Understand the significance of clinical and radiographic examinations.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Root Canal Therapy:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Master the principles and techniques of root canal therapy.</li>
                                    <li>Learn about access cavity preparation, instrumentation, and obturation.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Advanced Endodontic Procedures:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Explore advanced endodontic procedures such as pulp capping, apexification, and regenerative endodontics.</li>
                                    <li>Gain knowledge in the management of complex and challenging cases.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Endodontic Microscopy and CBCT:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Familiarize yourself with the use of dental microscopes and cone-beam computed tomography (CBCT) in endodontics.</li>
                                    <li>Learn how to apply these technologies for precise diagnosis and treatment planning.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Surgical Endodontics:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Understand the indications and techniques for endodontic surgery, including apicoectomy and root-end resection.</li>
                                    <li>Learn about retrograde filling and management of surgical complications.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Management of Endodontic Emergencies:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Acquire the skills to diagnose and manage endodontic emergencies, such as acute apical abscesses and traumatic injuries.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Pulpal and Periapical Pathology:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Explore the various pulpal and periapical pathologies and their implications.</li>
                                    <li>Learn about the microbiology and etiology of endodontic infections.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Pain Management and Anesthesia:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Learn effective pain management techniques and local anesthesia administration for patient comfort.</li>
                                    <li>Understand post-operative care and pain control.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Clinical Experience:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Participate in supervised clinical sessions to perform endodontic procedures on patient cases.</li>
                                    <li>Gain hands-on experience in root canal therapy, surgical endodontics, and other clinical aspects.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Certification</h3>
                        <p>
                            Upon successful completion of the program, participants will receive a Two-Month Fellowship in Clinical Endodontics certificate.
                        </p>
                    </section>

                    <p className="font-medium text-cyan-700">
                        For more details and fees contact us
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
