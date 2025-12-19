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
        "Chairside mentoring and evidence-led case reviews",
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
              20+ years of curated mentorship,and omnichannel
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919032018887"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 animate-in fade-in zoom-in duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
