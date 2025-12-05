import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function OrthodontistAssistantPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Orthodontist Assistant Course</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                            <div className="space-y-6 text-slate-700">
                                <div>
                                    <h4 className="font-semibold text-slate-900">1. Introduction to Orthodontics</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Definition of orthodontics</li>
                                        <li>Goals of orthodontic treatment</li>
                                        <li>The orthodontic team</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">2. Oral Anatomy</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Teeth and their functions</li>
                                        <li>Tooth numbering systems</li>
                                        <li>Supporting structures</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">3. Orthodontic Appliances</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Basic orthodontic appliance parts</li>
                                        <li>Elastomeric ligatures</li>
                                        <li>Steel ligatures</li>
                                        <li>Intraoral auxiliaries</li>
                                        <li>Non-traditional orthodontic appliances</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">4. Archwire Selection</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Placement and termination</li>
                                        <li>Archwire selection</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">5. Headgears and Elastics</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Extra-oral auxiliaries – Headgears</li>
                                        <li>Intra-oral auxiliaries – Elastics</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">6. Secondary Appliances</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Categories of secondary appliances</li>
                                        <li>Introduction to appliance fabrication</li>
                                        <li>Types of appliances</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">7. Application of Orthodontic Appliances</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Separators or spacers</li>
                                        <li>Orthodontic bands</li>
                                        <li>Bonding of orthodontic appliances</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">8. Removal and Retention</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Removal of braces</li>
                                        <li>Retention</li>
                                        <li>Post-treatment procedures</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">9. Diagnostic Records</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Introduction to diagnostic records</li>
                                        <li>Impressions</li>
                                        <li>Bite registration</li>
                                        <li>Orthodontic x-ray techniques</li>
                                        <li>Photographic techniques</li>
                                        <li>Digital records</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">10. Radiation and X-ray Safety</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Introduction</li>
                                        <li>Radiation safety</li>
                                        <li>The x-ray cassette – extra-oral film</li>
                                        <li>The darkroom</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">11. Orthodontic Models</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Types of models</li>
                                        <li>Pouring models</li>
                                        <li>Separating models</li>
                                        <li>Trimming models</li>
                                        <li>Alternatives to standard study models</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">12. Patient Management</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Chair, patient, and body positioning</li>
                                        <li>Physical interaction with patients</li>
                                        <li>Checking appliances</li>
                                        <li>Patient instructions</li>
                                        <li>Charting</li>
                                        <li>Parent communication</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">13. Infection Control in Orthodontics</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>What is infection control?</li>
                                        <li>Sterilization and disinfection</li>
                                        <li>Protecting our patients and ourselves</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">14. Professionalism in Orthodontics</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>What to expect</li>
                                        <li>Interviews and resumes</li>
                                        <li>Professionalism in the office</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">15. PVS Impressions</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Oral anatomy</li>
                                        <li>Uses of PVS</li>
                                        <li>Preparing for impressions</li>
                                        <li>Methods for success</li>
                                        <li>Evaluating a PVS impression</li>
                                        <li>Bite registration</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">16. Infection Control in the Orthodontic Office</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Infectious diseases</li>
                                        <li>Modes of disease transmission</li>
                                        <li>Protection agencies</li>
                                        <li>Preventing infection</li>
                                        <li>Exposure prevention</li>
                                        <li>Standard precautions</li>
                                        <li>Hand hygiene</li>
                                        <li>Personal protective equipment (PPE)</li>
                                        <li>Sterilization and disinfection</li>
                                        <li>Environmental infection control</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">17. Adjustment of Headgears and Retainers</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Adjusting wire retainers</li>
                                        <li>Adjusting and inserting retainers</li>
                                        <li>Adjusting clear retainers</li>
                                        <li>Retainer instructions for the patient</li>
                                        <li>Fitting headgear</li>
                                        <li>Headgear instructions for the patient</li>
                                        <li>Adjusting headgear</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">18. Identification of Cephalometric Landmarks</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>What are cephs?</li>
                                        <li>What are landmarks based on?</li>
                                        <li>Soft tissue landmarks</li>
                                        <li>Hard tissue landmarks</li>
                                        <li>Key anatomy</li>
                                        <li>Soft and hard tissue counterparts</li>
                                        <li>Introduction to tracing cephs</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">19. Risk Management for Orthodontics</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Malpractice</li>
                                        <li>What is risk management?</li>
                                        <li>Handling an incident in the office</li>
                                        <li>Main points</li>
                                        <li>Why do people sue doctors?</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">20. The Assistant’s Role in Soft Tissue Laser Procedures</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Classification of lasers</li>
                                        <li>Orthodontic laser procedures</li>
                                        <li>Safety with lasers</li>
                                        <li>Assistant’s role during the procedures</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">21. The Assistant’s Role in Mini-Implants</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Introduction to Mini-Implants (TADs)</li>
                                        <li>The assistant’s role</li>
                                        <li>Placing TADs</li>
                                        <li>Post treatment</li>
                                        <li>Removal of mini-implants</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">22. The Biological Basis of Tooth Movement</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Review of dentoalveolar anatomy</li>
                                        <li>Influences on tooth position</li>
                                        <li>Types of tooth movement</li>
                                        <li>Advanced dental anatomy</li>
                                        <li>Components of the PDL</li>
                                        <li>Bone formation</li>
                                        <li>Overview of the tooth movement process</li>
                                        <li>Forces in tooth movement</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">23. Analyzing, Tracking, & Preventing Unnecessary Repairs & Emergencies</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Emergency vs. repair</li>
                                        <li>Effects of unnecessary repairs</li>
                                        <li>Benchmarking</li>
                                        <li>Common repairs</li>
                                        <li>Employee roles in prevention</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">24. Predictable Bonding to A-Typical Tooth Surfaces</h4>
                                    <ul className="list-disc pl-5 text-sm">
                                        <li>Bonding to a-typical tooth enamel</li>
                                        <li>General preparation</li>
                                        <li>Key terms</li>
                                        <li>Use and care of products</li>
                                        <li>Bonding to challenging enamel surfaces</li>
                                        <li>Bonding to non-enamel surfaces</li>
                                        <li>Using self-etching primer</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Enquire */}
                    <div className="space-y-6">
                        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100 text-center">
                            <p className="text-lg font-semibold text-cyan-900 mb-2">Get Started Today</p>
                            <p className="text-cyan-700 mb-4">Contact us for course fees and details.</p>
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
            </div>
        </div>
    );
}
