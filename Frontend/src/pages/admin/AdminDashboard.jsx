import React, { useEffect, useState } from 'react';
import API from '../../api';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const [coursesRes, enrollmentsRes] = await Promise.all([
          API.get('/api/admin/courses'),
          API.get('/api/enrollments/all')
        ]);

        if (isMounted) {
          setCourses(coursesRes.data.courses || coursesRes.data);
          setEnrollments(enrollmentsRes.data.enrollments || []);
        }
      } catch (err) {
        console.error(err);
        if (err.response?.status === 401) navigate('/admin/login');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  const handleDelete = async (id) => {
    if (!confirm('Delete this course?')) return;
    try {
      await API.delete(`/api/admin/courses/${id}`);
      setCourses(prev => prev.filter(c => (c._id || c.id) !== id));
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  if (loading) return <div className="py-20 text-center">Loading...</div>;

  return (
    <div className="min-h-screen py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto p-4 space-y-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/admin/video-library')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded shadow transition-colors"
            >
              Video Library
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('adminToken');
                delete API.defaults.headers.common['x-admin-token'];
                navigate('/admin/login');
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded shadow transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Payments / Enrollments Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-800">Recent Payments & Enrollments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-900 uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">User Details</th>
                  <th className="px-6 py-4">Course</th>
                  <th className="px-6 py-4">Payment ID</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {enrollments.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-8 text-center text-slate-400">
                      No enrollments found.
                    </td>
                  </tr>
                ) : (
                  enrollments.map((enrollment) => (
                    <tr key={enrollment._id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-slate-900 font-medium">{enrollment.user_id?.fullName || 'Unknown User'}</p>
                        <p className="text-xs text-slate-500">{enrollment.user_id?.email || 'No Email'}</p>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-800">
                        {enrollment.course_id?.title || 'Unknown Course'}
                      </td>
                      <td className="px-6 py-4 font-mono text-xs bg-slate-50 rounded select-all">
                        {enrollment.payment_id}
                      </td>
                      <td className="px-6 py-4 text-emerald-600 font-medium">
                        {enrollment.course_id?.price_usd ? `$${enrollment.course_id.price_usd}` : '-'}
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        {new Date(enrollment.enrolled_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Course Management Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Manage Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map(c => (
              <div key={c._id || c.id} className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{c.title}</h3>
                  <p className="text-sm text-slate-600 line-clamp-2 mt-1">
                    {c.short_description || c.description}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-blue-600 bg-blue-50 w-fit px-2 py-1 rounded">
                    {c.videos?.length || 0} Videos
                  </p>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => navigate(`/admin/course/${c._id || c.id}/edit`)}
                    className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-sm rounded hover:bg-slate-50 transition-colors"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => navigate(`/admin/course/${c._id || c.id}/edit#videos`)}
                    className="px-3 py-1.5 bg-slate-800 text-white text-sm rounded hover:bg-slate-900 transition-colors"
                  >
                    Manage Videos
                  </button>

                  <button
                    onClick={() => handleDelete(c._id || c.id)}
                    className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-100 text-sm rounded hover:bg-red-100 transition-colors ml-auto"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

