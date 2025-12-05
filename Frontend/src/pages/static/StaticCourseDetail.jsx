import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function StaticCourseDetail({ title, description, topics = [] }) {
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

                <h1 className="text-4xl font-bold text-slate-900 mb-6">{title}</h1>

                <div className="prose max-w-none text-slate-600">
                    <p className="text-lg mb-8">{description}</p>

                    {topics.length > 0 && (
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Course Topics</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {topics.map((topic, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-cyan-500 mt-1">•</span>
                                        <span>{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="mt-10">
                    {user ? (
                        <button
                            onClick={() => navigate('/contact')}
                            className="btn-brand"
                        >
                            Buy Now
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate('/auth')}
                            className="btn-brand"
                        >
                            Sign In
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
