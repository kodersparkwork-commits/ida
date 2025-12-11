import React, { useEffect, useState } from 'react';
import API from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNotification } from '../components/Notification';

export default function PaymentPage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [currency, setCurrency] = useState('INR');
  const { user } = useAuth();
  const navigate = useNavigate();
  const notify = useNotification();

  useEffect(() => {
    // Load Razorpay SDK
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let endpoint = `/api/courses/${courseId}`;
        // If courseId is not a 24-char hex string, assume it's a slug
        if (!courseId.match(/^[0-9a-fA-F]{24}$/)) {
          endpoint = `/api/courses/slug/${courseId}`;
        }

        const { data } = await API.get(endpoint);
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
      // 1. Create Order
      const { data: order } = await API.post('/api/payment/order', { courseId, currency });

      // 2. Open Razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "IDA Dental Academy",
        description: course.title,
        image: "https://your-logo-url.com/logo.png", // Optional
        order_id: order.id,
        handler: async function (response) {
          try {
            // 3. Verify Payment
            const verifyRes = await API.post('/api/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              courseId: courseId // Pass courseId (slug or ID) to enroll
            });

            if (verifyRes.data.success) {
              notify.success('Payment Successful! Enrolling you now...');
              navigate('/lms');
            } else {
              notify.error('Payment Verification Failed');
            }
          } catch (error) {
            console.error("Verification Error", error);
            notify.error('Payment Verification Failed');
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phone || ""
        },
        theme: {
          color: "#0891b2" // Cyan-600
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        notify.error(response.error.description || 'Payment Failed');
        console.error(response.error);
      });
      rzp1.open();

    } catch (err) {
      console.error(err);
      notify.error('Payment initialization failed');
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Currency</label>
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-2 rounded border ${currency === 'INR' ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-gray-700 border-gray-300'}`}
              >
                INR (₹)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2 rounded border ${currency === 'USD' ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-gray-700 border-gray-300'}`}
              >
                USD ($)
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {currency === 'INR'
                ? 'Supports UPI, Netbanking, Cards, Wallets.'
                : 'Supports International Cards.'}
            </p>
          </div>

          <div className="mb-4 text-lg font-semibold">
            Total: {currency === 'INR' ? `₹${(course.price_usd * 85).toLocaleString()}` : `$${course.price_usd}`}
          </div>

          <button onClick={handlePayment} disabled={processing} className="btn-brand text-sm px-4 py-2">
            {processing ? 'Processing...' : `Pay Now`}
          </button>
        </div>
      </div>
    </div>
  );
}
