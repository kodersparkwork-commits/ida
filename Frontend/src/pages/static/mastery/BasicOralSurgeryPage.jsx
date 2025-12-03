import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BasicOralSurgeryPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Basic Oral Surgery Course</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 5 days</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Course Topics</h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Local Anesthesia</h4>
                                <ul className="list-disc pl-5">
                                    <li>Technique and pitfall</li>
                                    <li>Methods of LA administration (demonstration and hands on in phantom head)</li>
                                    <li>Nerve block and infiltration</li>
                                    <li>Painless local anesthesia injections</li>
                                    <li>Introduction to computer controlled local anesthesia</li>
                                    <li>Extra oral nerve blocks</li>
                                    <li>Pharmacology</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Radiographic Readings</h4>
                                <ul className="list-disc pl-5">
                                    <li>Detailed discussion on IOPA</li>
                                    <li>PA mandible</li>
                                    <li>OPG</li>
                                    <li>CBCT</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Sterilization and Infection Control</h4>
                                <ul className="list-disc pl-5">
                                    <li>How to select an useful sterilizer and disclosing agents to maintain asepsis in your clinic</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Incisions and Suturing Techniques</h4>
                                <ul className="list-disc pl-5">
                                    <li>Principles of incision making</li>
                                    <li>Different types of flaps</li>
                                    <li>Suturing techniques of soft tissue (demonstration and hands on using study models)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Extractions</h4>
                                <ul className="list-disc pl-5">
                                    <li>Introduction and classification</li>
                                    <li>Mechanical principles</li>
                                    <li>Open extraction methods (demonstration and hands on using sheep mandibles)</li>
                                    <li>Closed extraction methods (demonstrations and hands on using sheep jaws)</li>
                                    <li>Chair positions</li>
                                    <li>Indications, Contraindications & complications</li>
                                    <li>
                                        <strong>Emergencies in Extraction (discussion):</strong>
                                        <ul className="list-circle pl-5 mt-1">
                                            <li>Uncontrolled Bleeding from socket</li>
                                            <li>Muco-periosteal tear</li>
                                            <li>Oro-antral Fistula</li>
                                            <li>Displacement of tooth into sinus / spaces / aspiration</li>
                                            <li>Dislocation of TMJ demonstration on fellow participants</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Impactions</h4>
                                <ul className="list-disc pl-5">
                                    <li>Introduction to dentoalveolar surgery</li>
                                    <li>Chronology</li>
                                    <li>Sequence of frequency of impacted teeth</li>
                                    <li>Etiology</li>
                                    <li>Causes of impaction</li>
                                    <li>Preoperative assessment (clinical and radiographic diagnosis, treatment Planning)</li>
                                    <li>Surgical Anatomy</li>
                                    <li>Radiographic analysis</li>
                                    <li>Indications and Contraindications for removal</li>
                                    <li>Surgical techniques to be employed for all kind of impaction</li>
                                    <li>Surgical Complications of Impacted tooth and Management</li>
                                    <li>Post extraction care</li>
                                    <li>Demonstration and hands on in the patients</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Management of Medically Compromised Patients</h4>
                                <ul className="list-disc pl-5">
                                    <li>Drugs used of medically compromised patients</li>
                                    <li>Anticoagulant therapy</li>
                                    <li>Cardiac diseases</li>
                                    <li>Hypertension</li>
                                    <li>Diabetes mellitus or insipidus</li>
                                    <li>Syncope</li>
                                    <li>Anaphylaxis</li>
                                    <li>Adrenal crisis</li>
                                    <li>Epilepsy</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Other Minor Surgical Procedures (Discussion)</h4>
                                <ul className="list-disc pl-5">
                                    <li>Apicectomy</li>
                                    <li>Hemisection</li>
                                    <li>Space Infections (complete management including treatment and drugs)</li>
                                    <li>Incision and drainage (IND)</li>
                                    <li>Frenectomy</li>
                                    <li>Alveoplasty</li>
                                    <li>Oro-antral communication</li>
                                    <li>Crown lengthening</li>
                                    <li>Platelet rich fibrin & its application</li>
                                    <li>Regeneration procedures</li>
                                    <li>Osseous wall defects</li>
                                    <li>Socket preservation</li>
                                    <li>Cystic cavity</li>
                                    <li>Cosmetic & facial reconstructive procedure</li>
                                    <li>Sinus lift procedure</li>
                                    <li>Furcation defects</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Preclinical Exercises (Goat or Pig Jaw)</h4>
                                <ul className="list-disc pl-5">
                                    <li>Suturing techniques</li>
                                    <li>Flaps</li>
                                    <li>Open extractions</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Clinical Exercises</h4>
                                <ul className="list-disc pl-5">
                                    <li>Simple extractions</li>
                                    <li>Open extractions of root sumps</li>
                                    <li>Impactions (minimum two patients)</li>
                                </ul>
                            </div>
                        </div>
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
