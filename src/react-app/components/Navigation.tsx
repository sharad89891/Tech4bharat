import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import logo from '@/react-app/assets/logo.png'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Previous Activities', href: '/previous-workshop' },
    { name: 'Upcoming Workshop', href: '/workshop' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-lg py-3`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Tech For Bharat Logo" className="h-10 w-auto" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 font-bold text-xl">
              Tech For Bharat
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? 'text-purple-600'
                    : 'text-gray-900 hover:text-purple-600'
                } ${link.name === 'Upcoming Workshop' ? 'hover:scale-105' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfB6dfx5eTyU3XvwGvc9xisKab9hFMlJxtkmYkD0825LrBFrQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:scale-105`}
            >
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden text-gray-700`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white rounded-xl shadow-lg px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-purple-600'
                      : 'text-gray-900 hover:text-purple-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfB6dfx5eTyU3XvwGvc9xisKab9hFMlJxtkmYkD0825LrBFrQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}