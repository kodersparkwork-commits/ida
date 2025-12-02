import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, Layers, Sparkles } from 'lucide-react';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get('/api/courses');
        setCourses(data.courses || data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="py-20 text-center">Loading...</div>;

  if (!courses.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50 py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <BookOpen className="h-12 w-12 text-cyan-600 mx-auto" />
          <h1 className="text-3xl font-semibold text-slate-900">Courses are coming soon</h1>
          <p className="text-slate-600">
            We’re updating our catalog. Check back shortly or contact us to know more.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        <section className="text-center space-y-4">
          <p className="badge-pill inline-flex">
            <Layers className="h-4 w-4" />
            Multi-format learning
          </p>

          <h1 className="text-4xl font-semibold text-slate-900">
            {category ? category : "Explore Courses"}
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Fellowships, mastery bootcamps, and on-demand tracks designed for precise dental upskilling.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses
            .filter(c => !category || c.category === category)
            .map((course) => (
              <div
                key={course._id}
                className="card-glass p-5 flex flex-col gap-4 border border-white/60 cursor-pointer"
                onClick={() => navigate(`/courses/${course._id}`)}
              >
                <div className="h-48 w-full rounded-2xl bg-slate-100 overflow-hidden flex items-center justify-center">
                  {course.thumbnail_url ? (
                    <img
                      src={course.thumbnail_url}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-slate-400 text-sm">{course.title}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                    <Sparkles className="h-4 w-4 text-cyan-500" />
                    Precision Dental
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>

                  <p className="text-sm text-slate-600 line-clamp-3">
                    {course.short_description || course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">Investment</p>
                    <p className="text-lg font-semibold text-slate-900">
                      ${course.price_usd || 0}
                    </p>
                  </div>

                  {/* Enroll Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/courses/${course._id}`);
                    }}
                    className="btn-brand text-sm px-4 py-2"
                  >
                    Enroll
                  </button>

                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}
