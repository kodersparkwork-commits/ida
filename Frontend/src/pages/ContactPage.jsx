import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNotification } from "../components/Notification";
import emailjs from '@emailjs/browser';

export function ContactPage() {
  const notify = useNotification();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // EMAILJS CONFIGURATION - REPLACE THESE WITH YOUR ACTUAL KEYS
    const SERVICE_ID = 'service_qgpif4m';
    const TEMPLATE_ID = 'template_jfzda0s';
    const PUBLIC_KEY = 'o7nWCv6DIEj-vTqeu';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message,
    };

    notify.info("Sending message...", 2000);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        notify.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        notify.error("Failed to send message. Please check keys.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <p className="badge-pill mb-4 inline-flex">
            <Sparkles className="h-4 w-4" />
            White-glove academy support
          </p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about our fellowship tracks or clinical lab access? Our coordinators respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-glass p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Get in Touch</h2>
              {[
                {
                  icon: MapPin,
                  title: 'Address',
                  body: (
                    <>
                      Flat no-102, Tirumala Mansion,Plot no-120,
                      <br />
                      Survey no-41,Guttala Begumpet,Kavuri hills,
                      <br />
                      Madhapur, Hyderabad -500033
                    </>
                  ),
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  body: (
                    <>
                      <p>+91-9866937777</p>
                      <p>+91-9032018887</p>
                    </>
                  ),
                },
                {
                  icon: Mail,
                  title: 'Email',
                  body: (
                    <a href="mailto:indiandentalacademy@gmail.com" className="text-cyan-600 font-medium">
                      indiandentalacademy@gmail.com
                    </a>
                  ),
                },
              ].map((block) => (
                <div key={block.title} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <block.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{block.title}</h3>
                    <div className="text-slate-600 text-sm leading-relaxed">{block.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-cyan-600 to-emerald-500 text-white p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-white/80">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: 'Your Name *', type: 'text', placeholder: 'Dr. Jane Doe' },
                { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'you@example.com' },
                { id: 'subject', label: 'Subject *', type: 'text', placeholder: 'Implantology fellowship' },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    value={formData[field.id]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 resize-none"
                  placeholder="Tell us how we can support your dental journey..."
                  required
                />
              </div>

              <button type="submit" className="btn-brand w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
