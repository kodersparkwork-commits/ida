import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function FixedOrthodonticsPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Fellowship In Fixed Orthodontics</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">The Orthodontic Fellowship Program: Detailed Overview of Components</h2>
                        <p>
                            Our six months Orthodontic Fellowship program is designed to offer a comprehensive education in orthodontics.
                            We offer the course in two components: online and on-site.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Online Component</h3>
                        <p className="mb-4">
                            In this phase we prepare you fully equip with knowledge in orthodontics, we provide recorded lectures, case presentation, step by step procedures. The videos will cover the following:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
                            <li>Instrumentation and Armamentarium</li>
                            <li>Diagnosis and Treatment plan</li>
                            <li>Dealing with class1, class2, class3 malocclusions</li>
                            <li>Cephalometrics tracing Practice</li>
                            <li>Biomechanics</li>
                            <li>Growth And Development</li>
                            <li>Model Analysis Practice on different casts</li>
                            <li>Removable Appliances Welding Exercises</li>
                            <li>Principles of fixed orthodontics</li>
                            <li>Banding Technique & exercises</li>
                            <li>Bonding Technique & exercises</li>
                            <li>Arch Wire Bending Exercises</li>
                            <li>Making of Separators Wire Separators and elastic separators placing Exercises on Models & patients</li>
                            <li>Practicing of different Arch wire Placement</li>
                            <li>Permanent Anchorage Preparation with SS Wire Making Exercises</li>
                            <li>Habit Breaking Appliances fabrication</li>
                            <li>Soldering technique</li>
                            <li>Retention appliance Making Exercises</li>
                            <li>Expansion appliances</li>
                            <li>Applications of auxiliaries such as Elastics, E-Chain, open coil springs, closed coil springs, Elastic Modules, Ligature tying</li>
                            <li>Case discussions, dealing with complicated cases</li>
                            <li>Surgical orthodontics</li>
                            <li>Recent Advancements in Orthodontics</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">On-Site Component</h3>
                        <p>
                            The on-site component of the fellowship program provides you with the opportunity to apply the knowledge gained during the online phase. This is where you will work directly with patients under the supervision of experienced orthodontists. It’s a crucial part of your training that allows you to refine your clinical skills and apply what you’ve learned in a real clinical setting.
                        </p>
                    </section>

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Enrollment</h3>
                        <p>
                            We recognize that everyone’s schedule is different. To accommodate your convenience, we offer flexible enrollment dates throughout the year. You can join the course whenever it suits your schedule, ensuring that you can balance your personal and professional commitments with your educational goals.
                        </p>
                    </section>

                    <p className="font-medium text-cyan-700">
                        Please feel free to contact us for more information on program details.
                    </p>
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
