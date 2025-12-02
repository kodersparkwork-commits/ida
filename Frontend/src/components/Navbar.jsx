import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, User, ChevronDown } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const [courseMenuOpen, setCourseMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const courseCategories = [
    "Fellowship Programs",
    "Mastery Programs",
    "Exam Courses",
    "Student Courses",
    "Short Courses",
    "Online Programs"
  ];

  const navItems = [
    // { to: "/courses", label: "Courses" }, // Replaced by dropdown
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/40 bg-white/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            type="button"
            className="flex items-center gap-2 text-left"
            onClick={() => navigate("/")}
          >
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-emerald-500 text-white flex items-center justify-center shadow-lg">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Indian Dental Academy
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Precision Learning
              </p>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCourseMenuOpen(true)}
              onMouseLeave={() => setCourseMenuOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-cyan-700 transition"
                onClick={() => navigate('/courses')}
              >
                Courses
                <ChevronDown className="h-4 w-4" />
              </button>

              {courseMenuOpen && (
                <div className="absolute top-full left-0 w-56 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                    {courseCategories.map((cat) => (
                      <Link
                        key={cat}
                        to={`/courses?category=${encodeURIComponent(cat)}`}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-cyan-700"
                      >
                        {cat}
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 my-1"></div>
                    <Link
                      to="/courses"
                      className="block px-4 py-2 text-sm font-semibold text-cyan-600 hover:bg-slate-50"
                    >
                      View All Courses
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-slate-600 hover:text-cyan-700 transition"
              >
                {item.label}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  to="/lms"
                  className="text-sm font-medium text-slate-600 hover:text-cyan-700"
                >
                  My Courses
                </Link>
                <button
                  onClick={() => navigate("/profile")}
                  className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:border-cyan-300 transition"
                >
                  <User className="h-4 w-4" />
                  Profile
                </button>
                <button
                  onClick={signOut}
                  className="text-sm font-semibold text-rose-500 hover:text-rose-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/auth")}
                className="btn-brand text-sm"
              >
                Sign In
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-2xl border border-slate-200 text-slate-700"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur border-t border-slate-100">
          <div className="px-4 py-4 space-y-2">
            {/* Mobile Menu Items */}
            <div className="space-y-1">
              <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Courses</p>
              {courseCategories.map((cat) => (
                <Link
                  key={cat}
                  to={`/courses?category=${encodeURIComponent(cat)}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-2 text-base font-medium text-slate-600 hover:bg-slate-50"
                >
                  {cat}
                </Link>
              ))}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  to="/lms"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50"
                >
                  My Courses
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setOpen(false);
                  }}
                  className="w-full text-left rounded-2xl px-4 py-3 text-base font-semibold text-rose-500"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  navigate("/auth");
                  setOpen(false);
                }}
                className="btn-brand w-full text-base"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
