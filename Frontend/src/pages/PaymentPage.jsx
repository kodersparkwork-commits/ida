import React, { useEffect, useState } from 'react';
import API from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PaymentPage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get(`/api/courses/${courseId}`);
        setCourse(data.course || data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [courseId]);

  const handlePayment = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    setProcessing(true);
    try {
      // call backend to create enrollment & (simulate) payment
      await API.post(`/api/enrollments/${courseId}`);
      navigate('/lms');
    } catch (err) {
      console.error(err);
      alert('Payment failed');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (!course) return <div className="py-20 text-center">Course not found</div>;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Complete Enrollment</h1>
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
          <p className="mb-4">{course.short_description || course.description}</p>
          <div className="mb-4 text-lg font-semibold">Total: ${course.price_usd || 0}</div>

          <button onClick={handlePayment} disabled={processing} className="btn-brand text-sm px-4 py-2">
            {processing ? 'Processing...' : `Pay $${course.price_usd || 0}`}
          </button>
        </div>
      </div>
    </div>
  );
}
