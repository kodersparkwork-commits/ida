import {
  Award,
  Users,
  BookOpen,
  Globe,
  Target,
  Heart,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  const stats = [
    { label: "Years of Excellence", value: "20+" },
    { label: "Dentists Trained", value: "10,000+" },
    { label: "Course Programs", value: "50+" },
    { label: "Countries Reached", value: "30+" },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in dental education with expert-led training and comprehensive curricula.",
    },
    {
      icon: Heart,
      title: "Student Success",
      description:
        "Your success is our priority. We provide individualized attention and ongoing support throughout your journey.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "We prepare dentists for international practice with training that meets global standards.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We continuously update our programs to reflect the latest advances in dental science and technology.",
    },
  ];

  const milestones = [
    {
      year: "2004",
      title: "Foundation",
      description:
        "Indian Dental Academy was established with a vision to transform dental education in India.",
    },
    {
      year: "2006",
      title: "First in India",
      description:
        "Launched the first Continuing Dental Education (CDE) programs in the country.",
    },
    {
      year: "2010",
      title: "International Expansion",
      description:
        "Began offering specialized training programs for international dental professionals.",
    },
    {
      year: "2015",
      title: "Online Learning",
      description:
        "Introduced comprehensive online courses with video lectures and digital resources.",
    },
    {
      year: "2020",
      title: "Global Recognition",
      description:
        "Reached milestone of training dentists from over 30 countries worldwide.",
    },
    {
      year: "2024",
      title: "Continued Growth",
      description:
        "Serving thousands of dental professionals with cutting-edge education programs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        <section className="text-center space-y-6">
          <p className="badge-pill inline-flex">
            Crafted for clinical excellence
          </p>
          <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900">
            About Indian Dental Academy
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            For over two decades, we’ve engineered immersive programs that merge scientific rigor with hands-on artistry, empowering dentists across the globe.
          </p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="card-glass text-center p-6 border border-white/70">
              <div className="text-3xl font-bold text-cyan-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </section>

        <section className="card-glass p-8 lg:p-12 border border-white/70">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="badge-pill inline-flex">Our promise</p>
              <h2 className="text-3xl font-semibold text-slate-900">Mission in Motion</h2>
              <p className="text-slate-600 leading-relaxed">
                Indian Dental Academy is committed to providing comprehensive and affordable dental education to professionals at every stage of their career.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We bridge the gap between academic learning and clinical practice through  chairside mentorship, and evidence-led pedagogy.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our goal is to make world-class dental education accessible to every practitioner who wants to lead with precision.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-cyan-600 to-emerald-500 text-white p-10 space-y-4 shadow-xl">
              <Target className="h-12 w-12" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the world’s most trusted dental education ecosystem, blending innovative technology with human-centered mentorship.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-semibold text-center text-slate-900">Core Beliefs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-glass p-6 border border-white/70 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card-glass p-8 lg:p-12 border border-white/70">
          <h2 className="text-3xl font-semibold text-center text-slate-900 mb-10">Our Journey</h2>
          <div className="space-y-10">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="shrink-0 w-20 text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 font-semibold">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-l border-slate-200 pl-6 relative">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-500 rounded-full -translate-x-[7px]" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-cyan-600 via-sky-600 to-emerald-500 text-white text-center p-10 space-y-6">
          <Users className="h-12 w-12 mx-auto" />
          <h2 className="text-3xl font-semibold">Join Our Global Cohort</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Build lifelong community with thousands of dentists who trust Indian Dental Academy for carefully mentored upskilling.
          </p>
          <button onClick={() => navigate("/courses")} className="btn-ghost bg-white text-cyan-700 border-white hover:bg-slate-100">
            Explore Our Courses
          </button>
        </section>
      </div>
    </div>
  );
}
