import { Heart } from 'lucide-react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-['Poppins']">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Tech For Bharat
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A national initiative empowering India's youth with cutting-edge technology skills 
                and training programs across critical domains.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/previous-workshop" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Past Workshop
                  </Link>
                </li>
                <li>
                  <Link to="/past-internship" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Past Internship
                  </Link>
                </li>
                <li>
                  <Link to="/workshop" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Upcoming Workshop
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Upcoming Event</h4>
              <ul className="space-y-2 text-gray-300">
                <li>🎓 Digital & Tech Policy Workshop</li>
                <li>📅 18-23 December 2025</li>
                <li>📍 COEP Tech University, Pune</li>
                <li>🤝 COEP & VJTI Collaboration</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Tech For Bharat. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for India's Tech Future 🇮🇳</span>
              </div>
            </div>

            {/* Atmanirbhar Bharat */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Supporting <span className="text-orange-400 font-semibold">Atmanirbhar Bharat</span> in Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}