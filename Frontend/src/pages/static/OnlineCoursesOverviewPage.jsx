import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OnlineCoursesOverviewPage() {
    const navigate = useNavigate();

    const courses = [
        {
            title: "Dental implants course lectures Demo",
            demoLink: "https://youtu.be/cdPTyb5tgTU",
            path: "/courses/online/dental-implant"
        },
        {
            title: "Fixed orthodontics course lectures Demo",
            demoLink: "https://youtu.be/ZWj-WLgHQAc",
            path: "/courses/online/fixed-orthodontics"
        },
        {
            title: "Online Endodontics course lectures Demo",
            demoLink: "https://youtu.be/OdVtIUQhycg",
            path: "/courses/online/endodontics"
        },
        {
            title: "Online Dental crown & Bridge course lectures Demo",
            demoLink: "https://youtu.be/nDhNoo2mIDM",
            path: "/courses/online/crown-and-bridge"
        },
        {
            title: "Clinical Periodontics course lectures Demo",
            demoLink: "https://youtu.be/AuNvciOnxLo",
            path: "/courses/online/periodontics"
        }
    ];

    const fees = [
        { name: "Fixed orthodontics", price: "500 USD" },
        { name: "Dental implants course", price: "500 USD" },
        { name: "Clinical Endontics course", price: "500 USD" },
        { name: "Fixed Partial Dentures course", price: "500 USD" },
        { name: "Clinical Periodontics course", price: "500 USD" },
        { name: "Dental assistant course", price: "500 USD" },
        { name: "Orthodontic Assistant course", price: "500 USD" }
    ];

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6 uppercase tracking-wide">Online Courses</h1>
                    <div className="max-w-4xl mx-auto space-y-4 text-lg text-slate-700 leading-relaxed">
                        <p className="font-medium text-cyan-800">
                            Indian Dental academy now offers following online Dental courses.
                        </p>
                        <p>
                            These are recorded videos and you can watch it for unlimited times in 1 year subscription.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Col: Demos */}
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-center">Course Demos</h2>
                            <p className="text-sm text-slate-500 text-center mb-6">Click to watch preview on YouTube</p>
                            <div className="space-y-6">
                                {courses.map((course, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-cyan-200 transition-colors">
                                        <span className="font-medium text-slate-800">{course.title}</span>
                                        <div className="flex gap-2">
                                            <a
                                                href={course.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                                Watch
                                            </a>
                                            <button
                                                onClick={() => navigate(course.path)}
                                                className="text-cyan-700 hover:text-cyan-800 hover:bg-cyan-50 px-3 py-1 rounded-md text-sm font-medium transition-colors"
                                            >
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Fees & Payment */}
                    <div className="space-y-8">
                        <div className="bg-cyan-50 p-8 rounded-2xl border border-cyan-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-center">Course Fees</h2>
                            <ul className="space-y-3 mb-8">
                                {fees.map((item, idx) => (
                                    <li key={idx} className="flex justify-between items-center border-b border-cyan-200 pb-2 last:border-0 last:pb-0">
                                        <span className="text-slate-700 font-medium">{item.name}</span>
                                        <span className="text-cyan-800 font-bold">{item.price}</span>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-xl font-bold text-cyan-900 mb-4 text-center mt-10">Payment Options</h2>
                            <div className="bg-white p-4 rounded-xl border border-cyan-200 text-center space-y-2">
                                <p className="text-slate-600 font-medium">You can make payment through:</p>
                                <div className="flex flex-wrap justify-center gap-2 text-cyan-700 font-semibold">
                                    <span className="bg-cyan-100 px-3 py-1 rounded-full">Western Union</span>
                                    <span className="bg-cyan-100 px-3 py-1 rounded-full">Money Gram</span>
                                    <span className="bg-cyan-100 px-3 py-1 rounded-full">Bank Account</span>
                                    <span className="bg-cyan-100 px-3 py-1 rounded-full">Paypal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl text-center space-y-6">
                    <p className="text-lg md:text-xl text-slate-300">
                        We provide online assistance for <span className="text-white font-bold">1 year</span> after completing the course.
                    </p>
                    <div className="inline-block border-2 border-cyan-500 px-6 py-3 rounded-lg">
                        <p className="font-bold tracking-widest text-cyan-400 uppercase">
                            WE PROVIDE ONLINE COURSE COMPLETION CERTIFICATE FROM OUR ACADEMY.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
