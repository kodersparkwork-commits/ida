import React from 'react';
import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';

export default function MasteryPage() {
    const programs = [
        {
            title: "Fixed Orthodontics",
            path: "/courses/mastery/fixed-orthodontics",
            description: "Advanced mastery program in fixed orthodontics."
        },
        {
            title: "Cosmetic Dentistry Course",
            path: "/courses/mastery/cosmetic-dentistry",
            description: "Master the art of cosmetic dentistry."
        },
        {
            title: "Crown and Bridge Course",
            path: "/courses/mastery/crown-and-bridge",
            description: "Comprehensive training in crown and bridge procedures."
        },
        {
            title: "Dental Implantology Course",
            path: "/courses/mastery/dental-implantology",
            description: "Advanced implantology techniques and practice."
        },
        {
            title: "Dental Lab Technician Course",
            path: "/courses/mastery/dental-lab-technician",
            description: "Training for dental lab technicians."
        },
        {
            title: "Facial Aesthetics Course",
            path: "/courses/mastery/facial-aesthetics",
            description: "Mastery in facial aesthetics and cosmetology."
        },
        {
            title: "Basic Oral Surgery Clinical Course",
            path: "/courses/mastery/basic-oral-surgery",
            description: "Clinical course on basic oral surgery."
        },
        {
            title: "Laser Dentistry Course",
            path: "/courses/mastery/laser-dentistry",
            description: "Advanced laser dentistry techniques."
        },
        {
            title: "Periodontics Clinical Course",
            path: "/courses/mastery/periodontics",
            description: "Clinical mastery in periodontics."
        },
        {
            title: "Rotary Endodontics Course",
            path: "/courses/mastery/rotary-endodontics",
            description: "Specialized course in rotary endodontics."
        },
        {
            title: "Orthodontist Assistant Course",
            path: "/courses/mastery/orthodontist-assistant",
            description: "Training program for orthodontist assistants."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Mastery Programs</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Take your skills to the highest level with our intensive mastery programs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <Link
                            key={program.path}
                            to={program.path}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group"
                        >
                            <div className="h-12 w-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition">
                                <Award className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                            <p className="text-slate-600 mb-4">{program.description}</p>
                            <span className="text-amber-600 font-medium group-hover:translate-x-1 transition inline-block">
                                Learn more →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
