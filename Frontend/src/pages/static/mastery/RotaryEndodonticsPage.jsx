import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function RotaryEndodonticsPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Rotary Endodontics Course</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 5 days</p>
                        <p><strong>Course Venue:</strong> IDA Dental Academy, Hyderabad</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Course Outline</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Fundamental aspects in RCT</li>
                            <li>Access cavity preparation for each tooth</li>
                            <li>Tips to locate canal orifices</li>
                            <li>Cleaning & shaping of root canals</li>
                            <li>Knowledge about different irrigating solutions</li>
                            <li>Various intra canal medicaments used in RCT</li>
                            <li>Obturation methods both theory and practical demonstration</li>
                            <li>Tips in RCT (problems faced in access cavity preparation, cleaning & shaping and obturation)</li>
                            <li>How to deal with calcified canals, separated instruments</li>
                            <li>Single sitting RCT</li>
                            <li>Rotary Endodontics</li>
                        </ul>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Hands-on Training</h3>
                        <p>
                            Participant will practice on dummies & extracted teeth.
                        </p>
                        <p className="mt-2 font-medium text-amber-700">
                            WE REQUEST PARTICIPANTS TO GET AS MANY AS EXTRACTED TEETH, HAND PIECE AND SOME ROOT CANAL OPENING BURS.
                        </p>
                        <p className="mt-4">
                            Study material, CDs, Seminars and participation certificate provided at the end of the course.
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
