import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function FellowshipPage() {
    const programs = [
        {
            title: "Fellowship in Fixed Orthodontics",
            path: "/courses/fellowship/fixed-orthodontics",
            description: "Comprehensive 6-month program designed to offer complete education in orthodontics."
        },
        {
            title: "Fellowship in General Dentistry",
            path: "/courses/fellowship/general-dentistry",
            description: "Master the art of general dental practice with our intensive fellowship."
        },
        {
            title: "Fellowship in Restorative Dentistry",
            path: "/courses/fellowship/restorative-dentistry",
            description: "Advanced training in modern restorative techniques and materials."
        },
        {
            title: "Fellowship in Clinical Endodontics",
            path: "/courses/fellowship/clinical-endodontics",
            description: "Specialized training in root canal therapy and endodontic procedures."
        },
        {
            title: "Fellowship in Dental Implantology",
            path: "/courses/fellowship/dental-implantology",
            description: "Complete guide to surgical and prosthetic aspects of dental implants."
        },
        {
            title: "Fellowship in Cosmetic Dentistry",
            path: "/courses/fellowship/cosmetic-dentistry",
            description: "Learn to create beautiful smiles with our cosmetic dentistry fellowship."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Fellowship Programs</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Advance your career with our specialized fellowship programs designed for dental professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <Link
                            key={program.path}
                            to={program.path}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group"
                        >
                            <div className="h-12 w-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                            <p className="text-slate-600 mb-4">{program.description}</p>
                            <span className="text-cyan-600 font-medium group-hover:translate-x-1 transition inline-block">
                                Learn more →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
