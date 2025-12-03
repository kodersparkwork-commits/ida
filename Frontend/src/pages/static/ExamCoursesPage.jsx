import React from 'react';

export default function ExamCoursesPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Exam Courses</h1>

                <div className="space-y-8 text-slate-700">
                    <section>
                        <h2 className="text-2xl font-semibold text-cyan-700 mb-3">United States:</h2>
                        <p className="leading-relaxed">
                            <strong className="font-semibold">National Board Dental Examination (NBDE):</strong> Indian dentists seeking to practice in the U.S. typically need to pass the NBDE, which is a two-part examination. Part I covers basic biomedical sciences, and Part II focuses on clinical dentistry. After successfully completing these exams, dentists may be required to pass a clinical examination administered by individual states.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-cyan-700 mb-3">Canada:</h2>
                        <p className="leading-relaxed">
                            <strong className="font-semibold">National Dental Examining Board of Canada (NDEB):</strong> Dentists must pass the NDEB equivalency process, which consists of written and clinical examinations. The Written Examination (WREB) assesses knowledge, while the Objective Structured Clinical Examination (OSCE) evaluates clinical skills.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-cyan-700 mb-3">United Kingdom:</h2>
                        <p className="leading-relaxed">
                            <strong className="font-semibold">Overseas Registration Examination (ORE):</strong> Dentists wishing to practice in the UK need to pass the ORE. It consists of two parts, ORE Part 1 (written multiple-choice questions) and ORE Part 2 (practical Objective Structured Clinical Examinations – OSCE).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-cyan-700 mb-3">Australia:</h2>
                        <p className="leading-relaxed">
                            <strong className="font-semibold">Australian Dental Council (ADC) Examination:</strong> The ADC examination assesses the knowledge and clinical skills of foreign-trained dentists. It includes a written examination and a practical examination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-cyan-700 mb-3">New Zealand:</h2>
                        <p className="leading-relaxed">
                            <strong className="font-semibold">New Zealand Dentists Registration Examination (NZDREX):</strong> Dentists need to pass the NZDREX to practice in New Zealand. The exam includes both written and clinical components.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-cyan-700 mb-3">European Union Countries:</h2>
                        <p className="leading-relaxed">
                            Requirements vary by country, but generally involve language proficiency tests and recognizing qualifications.
                        </p>
                    </section>

                    <div className="bg-cyan-50 p-6 rounded-xl mt-8">
                        <p className="text-lg font-medium text-cyan-900">
                            We prepare students for all international exams, we have expert dentists who are experienced to train for international examinations. For more details and fee structure contact us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
