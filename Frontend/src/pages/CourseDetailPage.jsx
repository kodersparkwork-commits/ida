import React, { useEffect, useState } from "react";
import API from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);

  // =============================
  // FETCH COURSE + CHECK PURCHASE
  // =============================
  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        // Load course
        const { data } = await API.get(`/api/courses/${id}`);
        if (!isMounted) return;

        const c = data.course || data;
        setCourse(c);

        // If logged in → check access
        if (user) {
          try {
            const res = await API.get(`/api/auth/can-watch/${id}`);
            setIsPurchased(res.data.access); 
          } catch {
            setIsPurchased(false);
          }
        }
      } catch (err) {
        if (!isMounted) return;
        const status = err.response?.status;
        setError(
          status === 404
            ? "This course is no longer available."
            : "Unable to load course details."
        );
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => (isMounted = false);
  }, [id, user]);

  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (error) return <div className="py-20 text-center">{error}</div>;
  if (!course) return null;

  // =============================
  // BUY COURSE
  // =============================
  const handleBuy = async () => {
    if (!user) return navigate("/login");

    try {
      await API.post("/api/auth/buy", { courseId: id });

      alert("Purchase successful! You can now watch the videos.");
      setIsPurchased(true);
    } catch (err) {
      console.error(err);
      alert("Purchase failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50 py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <button
          onClick={() => navigate("/courses")}
          className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
        >
          ← Back to Courses
        </button>

        {/* ---------------------- COURSE HEADER ---------------------- */}
        <div className="bg-white/80 rounded-2xl shadow-sm overflow-hidden p-6">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-gray-700 mt-2">{course.short_description}</p>

          {course.thumbnail_url && (
            <img
              src={course.thumbnail_url}
              alt="thumbnail"
              className="w-full rounded-xl mt-4"
            />
          )}
        </div>

        {/* ---------------------- BUY SECTION ---------------------- */}
        <aside className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Enrollment
            </p>
            <p className="text-3xl font-bold mt-2">
              {course.price_usd > 0 ? `$${course.price_usd}` : "Free"}
            </p>
            <p className="text-sm text-slate-300">1 year access</p>
          </div>

          {/* Hide buy button if already purchased */}
          {!isPurchased && (
            <button
              onClick={handleBuy}
              className="w-full py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-200"
            >
              {course.price_usd > 0 ? "Buy Course" : "Enroll for Free"}
            </button>
          )}

          {isPurchased && (
            <div className="w-full py-3 rounded-xl bg-white/10 text-center text-sm font-semibold">
              Course purchased ✓
            </div>
          )}

          {user && (
            <button
              onClick={() => navigate("/lms")}
              className="w-full py-3 rounded-xl border border-white/40 font-semibold"
            >
              Go to My Courses
            </button>
          )}
        </aside>

        {/* ---------------------- VIDEO SECTION ---------------------- */}
        <div className="mt-6 bg-white/60 border border-white/70 backdrop-blur-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">Course Videos</h2>

          {/* If not purchased → block access */}
          {!isPurchased ? (
            <div className="text-center py-8">
              <p className="text-slate-600 mb-4">
                Purchase the course to watch videos.
              </p>
              <button
                onClick={handleBuy}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Buy Course
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {course.videos && course.videos.length ? (
                course.videos.map((v, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg overflow-hidden border"
                  >
                    <div className="p-3">
                      <p className="font-semibold">{v.title}</p>
                    </div>
                    <video
                      controls
                      className="w-full"
                      src={v.video_url}
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-600">
                  No videos available yet.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
