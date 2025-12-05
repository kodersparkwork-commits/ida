import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function FixedOrthodonticsMasteryPage() {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Fixed Orthodontics (Mastery)</h1>

                <div className="prose max-w-none text-slate-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Overview</h2>
                        <p><strong>Course Duration:</strong> 06 days</p>
                        <p><strong>Course Venue:</strong> IDA Dental Academy, Hyderabad-India</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-cyan-700 mb-3">Course Outline</h3>
                        <ul className="list-disc pl-5 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
                            <li>Introduction to fixed orthodontics and straight wire technique</li>
                            <li>Instrumentation and Armamentarium</li>
                            <li>Diagnosis and Treatment plan</li>
                            <li>Dealing with class1, class2, class3 malocclusions</li>
                            <li>Cephalometrics tracing Practice</li>
                            <li>Biomechanics</li>
                            <li>Growth And Development</li>
                            <li>Model Analysis Practice on different casts</li>
                            <li>Removable Appliances</li>
                            <li>Welding Exercises</li>
                            <li>Principles of fixed orthodontics</li>
                            <li>Banding Technique & exercises</li>
                            <li>Bonding Technique & exercises</li>
                            <li>Arch Wire Bending Exercises</li>
                            <li>Making of Separators</li>
                            <li>Wire Separators and elastic separators placing Exercises on Models & patients</li>
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

                    <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Training Highlights</h3>
                        <p>
                            Training shall be extensive hands-on, covering all aspects of clinical orthodontics simplified for general practitioners to practice orthodontics. Post-training support shall be given to participants via online for the next one year for a participant to accommodate orthodontics into practice.
                        </p>
                        <p className="mt-4">
                            All the materials and instruments will be supplied by Indian Dental Academy for training purposes; the participant need not bring any items from their side.
                        </p>
                        <p className="mt-4">
                            Study material, CDs, Seminars, and participation certificate provided at the end of the course.
                        </p>
                    </section>
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
