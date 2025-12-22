import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, User, ChevronDown } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [courseMenuOpen, setCourseMenuOpen] = useState(false);
  const [onlineCourseMenuOpen, setOnlineCourseMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileOnlineCoursesOpen, setMobileOnlineCoursesOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const courseCategories = [
    { name: "Fellowship Programs", path: "/courses/fellowship" },
    { name: "Mastery Programs", path: "/courses/mastery" },
    { name: "Exam Courses", path: "/courses/exam" }, // Placeholder
    { name: "Short Courses", path: "/courses/short-courses" }, // Placeholder
  ];

  const onlineCourseCategories = [
    { name: "Online Fixed Orthodontics Course", path: "/courses/online/fixed-orthodontics" },
    { name: "Dental Implant Course - Online", path: "/courses/online/dental-implant" },
    { name: "Online Crown and Bridge Course", path: "/courses/online/crown-and-bridge" },
    { name: "Online-Endodontics Course", path: "/courses/online/endodontics" },
    { name: "Online-Periodontics Course", path: "/courses/online/periodontics" },
    { name: "Online Cosmetic Dentistry Course", path: "/courses/online/cosmetic-dentistry" },
  ];

  const navItems = [
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact Us" },
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
            <img src={logo} alt="Indian Dental Academy" className="h-12 w-12 object-contain" />
            <div>
              <p className="text-lg font-semibold text-slate-900">
                Indian Dental Academy
              </p>
              <p className="text-xs text-slate-500">
                Established in 2005
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
              // onClick={() => navigate('/courses')} // No main link for this dropdown anymore
              >
                Courses
                <ChevronDown className="h-4 w-4" />
              </button>

              {courseMenuOpen && (
                <div className="absolute top-full left-0 w-56 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                    {courseCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        to={cat.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-cyan-700"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Online Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOnlineCourseMenuOpen(true)}
              onMouseLeave={() => setOnlineCourseMenuOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-cyan-700 transition"
                onClick={() => navigate('/online-courses')}
              >
                Online Courses
                <ChevronDown className="h-4 w-4" />
              </button>

              {onlineCourseMenuOpen && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                    {onlineCourseCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        to={cat.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-cyan-700"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Student Courses Link (Prominent) */}
            <Link
              to="/courses/student"
              className="flex items-center gap-1 text-sm font-bold text-cyan-700 hover:text-cyan-800 transition"
            >
              <GraduationCap className="h-4 w-4" />
              Student Courses
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-slate-600 hover:text-cyan-700 transition"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://gotolectures.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 hover:text-cyan-700 transition"
            >
             Exam Courses
            </a>

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
        </div >
      </div >

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur border-t border-slate-100">
          <div className="px-4 py-4 space-y-2">
            {/* Mobile Menu Items */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-2xl"
              >
                Courses
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileCoursesOpen && (
                <div className="pl-4 space-y-1">
                  {courseCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setMobileOnlineCoursesOpen(!mobileOnlineCoursesOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-2xl"
              >
                Online Courses
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileOnlineCoursesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileOnlineCoursesOpen && (
                <div className="pl-4 space-y-1">
                  {onlineCourseCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/courses/student"
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-bold text-cyan-700 hover:bg-slate-50"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Student Courses
              </div>
            </Link>

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

            <a
              href="https://gotolectures.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50"
            >
              GoToLectures
            </a>

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
      )
      }
    </nav >
  );
}
