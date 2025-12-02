import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Indian Dental Academy</h3>
            <p className="text-sm mb-4">
              Dedicated to dental education since 20 years. Helping thousands of dentists globally with comprehensive and affordable courses.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/fellowship" className="hover:text-white transition-colors">
                  Fellowship Programs
                </Link>
              </li>
              <li>
                <Link to="/mastery" className="hover:text-white transition-colors">
                  Mastery Programs
                </Link>
              </li>
              <li>
                <Link to="/online" className="hover:text-white transition-colors">
                  Online Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Course Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Fixed Orthodontics</li>
              <li>Dental Implantology</li>
              <li>Cosmetic Dentistry</li>
              <li>Endodontics</li>
              <li>Periodontics</li>
              <li>Facial Aesthetics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                <span>
                  Flat no-503, 5th Floor, MVS Heights, Vinayaka nagar, Khanamet, Madhapur, Hyderabad-500081, Telangana, India
                </span>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91-9866937777</span>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:indiandentalacademy@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  indiandentalacademy@gmail.com
                </a>
              </div>

              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Indian Dental Academy. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
