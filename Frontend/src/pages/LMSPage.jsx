import React, { useEffect, useState } from 'react';
import API from '../api';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, GraduationCap } from 'lucide-react';

export default function LMSPage() {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    let isMounted = true;

    (async () => {
      try {
        const { data } = await API.get('/api/enrollments/me');
        if (!isMounted) return;

        // Ensure only enrollments with a course
        const filtered = (data.enrollments || data).filter(e => Boolean(e.course));
        setEnrollments(filtered);
      } catch (err) {
        if (isMounted) console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => { isMounted = false; };
  }, [user, navigate]);

  if (loading) return <div className="py-20 text-center">Loading...</div>;

  if (!enrollments.length) {
    return (
      <div className="min-h-screen py-24 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-semibold text-slate-900">No active courses yet</h1>
          <p className="text-slate-600">
            Your enrolled programs will appear here as soon as you confirm your seat. Explore our catalog to get started.
          </p>
          <button onClick={() => navigate('/courses')} className="btn-brand">
            Discover Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        <div className="flex flex-col gap-3 mb-10 text-center">
          <p className="badge-pill self-center">
            <CalendarDays className="h-4 w-4" />
            Personalized portal
          </p>
          <h1 className="text-3xl font-bold text-slate-900">My Courses</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Access on-demand content, clinical checklists, and live mentor calls for every track you are enrolled in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrollments.map((enrollment) => {
            const course = enrollment.course;
            const courseId = course?._id || enrollment.course_id;

            return (
              <div key={enrollment._id || enrollment.id} className="card-glass p-6 flex flex-col gap-4 border border-white/70">
                
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Enrolled {new Date(enrollment.enrolled_at).toLocaleDateString()}
                    </p>
                    <h2 className="text-xl font-semibold mt-1 text-slate-900">{course?.title}</h2>
                  </div>
                  <span className="badge-pill text-xs bg-emerald-50 text-emerald-700">
                    {enrollment.status}
                  </span>
                </div>

                <p className="text-slate-600 line-clamp-3">
                  {course?.short_description || course?.description || 'Immersive, mentor-led curriculum.'}
                </p>

                {/* Videos Section */}
                {course?.videos?.length > 0 && (
                  <div className="mt-4 space-y-3">
                    <h3 className="font-semibold text-slate-800">Videos</h3>
                    {course.videos.map((v, idx) => (
                      <div key={idx} className="rounded-lg border overflow-hidden">
                        <p className="px-3 py-1 font-semibold">{v.title}</p>
                        <video controls className="w-full" src={v.video_url} />
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex justify-between items-center">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">Access</p>
                    <p className="text-sm font-semibold text-slate-700">
                      Active until {new Date(enrollment.expires_at || Date.now()).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate(`/courses/${courseId}`)}
                    className="btn-brand px-5 py-2 text-sm disabled:opacity-60"
                    disabled={!courseId}
                  >
                    Open Course
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
