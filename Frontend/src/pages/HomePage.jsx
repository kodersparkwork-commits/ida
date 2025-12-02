import {
  Award,
  Users,
  Globe,
  CheckCircle,
  BookOpen,
  Video,
  Clock,
  Star,
  Sparkles,
  Smile,
  Shield,
  Stethoscope,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Smile,
      title: "Denta l Masters",
      description:
        "Specialized faculty spanning orthodontics, implantology, and aesthetics",
    },
    {
      icon: Stethoscope,
      title: "Clinical Focus",
      description:
        "Cadaver labs, chairside mentoring, and evidence-led case reviews",
    },
    {
      icon: Shield,
      title: "Global Recognition",
      description: "Accredited learning paths trusted across 30+ countries",
    },
    {
      icon: BookOpen,
      title: "First in India",
      description: "Pioneers of Continuing Dental Education (CDE) programs",
    },
  ];

  const categories = [
    {
      title: "Fellowship Programs",
      description:
        "6-month blended programs with clinical immersions and mentor reviews",
      duration: "6 Months",
      format: "Hybrid",
      courses: [
        "Fixed Orthodontics",
        "Dental Implantology",
        "General Dentistry",
        "Clinical Endodontics",
      ],
      action: () => navigate("/courses/fellowship"),
    },
    {
      title: "Mastery Bootcamps",
      description:
        "Intensive 6-day chairside sessions focused on procedural excellence",
      duration: "6 Days",
      format: "On-site",
      courses: [
        "Fixed Orthodontics",
        "Dental Implantology",
        "Cosmetic Dentistry",
        "Rotary Endodontics",
      ],
      action: () => navigate("/courses/mastery"),
    },
    {
      title: "Digital Learning",
      description:
        "Self-paced video libraries with live case critiques and exams",
      duration: "1 Year Access",
      format: "Online",
      courses: [
        "Dental Implants",
        "Clinical Endodontics",
        "Fixed Partial Dentures",
        "Clinical Periodontics",
      ],
      action: () => navigate("/courses/online"),
    },
  ];

  const features = [
    {
      icon: Video,
      title: "Expert-led Content",
      description:
        "Learn directly from clinicians with decades of chairside experience",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Blend synchronous sessions with asynchronous learning pods",
    },
    {
      icon: Award,
      title: "Global Certification",
      description:
        "Earn internationally recognized credentials and digital badges",
    },
    {
      icon: Users,
      title: "Mentor Support",
      description:
        "One year of post-completion guidance to assist in real-world cases",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-cyan-50">
      <section
  className="relative overflow-hidden text-white py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('https://cdn.pixabay.com/photo/2020/05/06/20/31/air-purifier-5139091_1280.jpg?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center text-center gap-6">
      <span className="badge-pill bg-white/15 text-white">
        <Sparkles className="h-4 w-4" />
        India’s most trusted dental academy
      </span>
      <h1 className="text-4xl lg:text-6xl font-semibold leading-tight max-w-4xl">
        Elevate Your{" "}
        <span className="text-emerald-200">Clinical Precision</span> with
        immersive dental programs
      </h1>
      <p className="text-lg lg:text-2xl max-w-3xl text-white/80">
        20+ years of curated mentorship, cadaver labs, and omnichannel
        learning to help you own every procedure with confidence.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={() => navigate("/courses")} className="btn-brand">
          Explore Programs
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="btn-ghost !text-white border-white/40 hover:bg-white/10"
        >
          Connect with a Mentor
        </button>
      </div>
    </div>
  </div>
</section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card-glass text-center p-6 border border-white/70 shadow-none"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-50 rounded-2xl mb-4">
                  <item.icon className="h-7 w-7 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-4">
            <p className="badge-pill inline-flex">Learning pathways</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
              Choose Your Clinical Track
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Structured journeys for beginners, mid-career clinicians, and
              specialists looking to master advanced protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.title}
                className="card-glass overflow-hidden border border-white/70 hover:shadow-2xl transition-shadow"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {category.title}
                    </h3>
                    <span className="badge-pill text-xs bg-white text-cyan-600">
                      {category.format}
                    </span>
                  </div>
                  <p className="text-slate-600">{category.description}</p>
                  <div className="flex items-center gap-4 text-sm border-y border-slate-100 py-3">
                    <span className="flex items-center gap-2 text-cyan-600">
                      <Clock className="h-4 w-4" />
                      {category.duration}
                    </span>
                    <span className="flex items-center gap-2 text-emerald-600">
                      <Video className="h-4 w-4" />
                      {category.format}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      Focus Areas
                    </p>
                    <div className="space-y-1">
                      {category.courses.slice(0, 4).map((course) => (
                        <div
                          key={course}
                          className="flex items-start text-sm text-slate-600"
                        >
                          <CheckCircle className="h-4 w-4 mr-2 text-emerald-500 mt-0.5" />
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={category.action}
                    className="btn-brand w-full"
                  >
                    View Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <p className="badge-pill inline-flex">Experience</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
              Why Dentists Choose IDA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 card-glass shadow-none border border-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-50 rounded-2xl mb-4">
                  <feature.icon className="h-7 w-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 via-sky-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Star className="h-12 w-12 mx-auto text-amber-300" />
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg text-white/80">
            Join thousands of dentists who have transformed their practice with
            structured learning, mentor access, and real clinical simulations.
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="btn-ghost bg-white text-cyan-700 border-white hover:bg-slate-100"
          >
            Browse All Courses
          </button>
        </div>
      </section>
    </div>
  );
}
