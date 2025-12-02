import React, { useEffect, useState } from 'react';
import API from '../../api';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const { data } = await API.get('/api/admin/courses'); // admin endpoint
        if (isMounted) setCourses(data.courses || data);
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
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div>
            <button
              onClick={() => navigate('/admin/course/new')}
              className="px-4 py-2 bg-green-600 text-white rounded mr-2"
            >
              Add Course
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('adminToken');
                delete API.defaults.headers.common['x-admin-token'];
                navigate('/admin/login');
              }}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map(c => (
            <div key={c._id || c.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">{c.title}</h3>

              <p className="text-sm text-gray-600 line-clamp-2">
                {c.short_description || c.description}
              </p>

              {/* ⭐ NEW – Video Count */}
              <p className="mt-2 text-sm text-blue-700 font-medium">
                Videos: {c.videos?.length || 0}
              </p>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => navigate(`/admin/course/${c._id || c.id}/edit`)}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(c._id || c.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>

                {/* ⭐ NEW - Manage Videos Button */}
                <button
                  onClick={() => navigate(`/admin/course/${c._id || c.id}/edit#videos`)}
                  className="px-3 py-1 bg-gray-700 text-white rounded"
                >
                  Manage Videos
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
