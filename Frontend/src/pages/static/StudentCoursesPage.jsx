import React from 'react';

export default function StudentCoursesPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Student Courses</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6 text-slate-700">
                        <p className="text-lg font-medium text-cyan-700">
                            "Online & Offline Dental education hub for Dentists and Dental students."
                            <br />
                            We are 100% committed to quality Dentistry
                        </p>

                        <p>
                            Indian Dental Academy which is an academy leading in continuing dental education and skill enhancement programs for dental surgeons; it also offers different courses in a wide range of formats for dental students. Indian dental academy has the best team of expert’s dental specialties, who are completely dedicated to the students and keep themselves updated with the current concepts of their subject and the current trends of teaching.
                        </p>

                        <p>
                            We have large Database for Dental e-learning. A large number of dental students are accessing the internet for dental education, references, university exams, for thesis etc.
                        </p>

                        <p>
                            Considering the e-formats for almost everything in today’s time. we have prepared highly effective educational videos for dental students in all the subjects from the first to the final year of dental sciences, about 700 plus videos. The lectures are covered by the best lecturers of each subject and are presented in a simple yet elaborate way for clarity of concepts to the students.
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">The Lectures include in the following subjects:</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Head & Neck Anatomy, Histology, Embryology, Human Physiology, Biochemistry, Dental Anatomy, Dental materials, Pharmacology, General Pathology, Microbiology, Oral pathology, General medicine, General Surgery, Oral medicine & radiology, Oral surgery, Prosthodontics, Orthodontics, Endodontics, Community Dentistry, Pedodontics, Periodontics
                            </p>
                        </div>

                        <p className="text-sm italic text-slate-500">
                            For preview of sample lectures, we request you to view the following link <a href="https://www.youtube.com/playlist?list=PL4GxLqfq0Wle9L4efDGtl_9scEHKqvHqW" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">dental student courses</a>
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Placeholder for Video/Image from screenshot */}
                        <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/videoseries?list=PL4GxLqfq0Wle9L4efDGtl_9scEHKqvHqW"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-700 text-sm space-y-4">
                            <p>
                                We’ve done lot of hard work to prepare these high quality content lectures in selecting the best instructors, through series of interviews. Also best technicians were selected for this project including cameraman, audio –video editors, artists, animators, content writers and final editors.
                            </p>
                            <p>
                                As you know in India there are thousands of undergraduates studying dentistry, including all students from first to final year, interns and MDS students.
                            </p>
                            <p className="font-medium text-cyan-700">
                                These videos not only help Indian dental students but also equally help all international students those studying dentistry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
