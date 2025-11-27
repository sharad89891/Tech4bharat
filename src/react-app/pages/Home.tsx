import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Footer from '@/react-app/components/Footer'
import Navigation from '@/react-app/components/Navigation'

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      institution: "COEP Pune",
      content: "The Tech For Bharat workshop completely transformed my understanding of AI applications. The hands-on approach and expert guidance helped me build my first AI model.",
      avatar: "PS"
    },
    {
      name: "Rahul Verma",
      role: "Engineering Student",
      institution: "VJTI Mumbai",
      content: "The program was an incredible experience. I worked on real-world projects that are making a difference in various fields.",
      avatar: "RV"
    },
    {
      name: "Anjali Patel",
      role: "Research Scholar",
      institution: "SIMS Pune",
      content: "I gained invaluable insights into cybersecurity and digital defense strategies. The program opened doors to opportunities I never imagined.",
      avatar: "AP"
    },
    {
      name: "Amit Kumar",
      role: "Tech Enthusiast",
      institution: "IIT Bombay",
      content: "The comprehensive curriculum and industry mentorship helped me transition into a tech career. Truly transformative experience!",
      avatar: "AK"
    }
  ]

  // Image slider state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Sample images for slider
  const sliderImages = [
    "https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(3).jpeg",
    "https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM.jpeg",
    "https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(1).jpeg",
    "https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(2).jpeg",
    "https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.57-PM.jpeg",
    "https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-22-at-11.19.56-PM-(4).jpeg"
  ]

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [sliderImages.length])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Tech For Bharat
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-bold rounded-2xl py-3 px-4 sm:py-4 sm:px-6 inline-block">
              Empowering India's youth with cutting-edge technology skills for a brighter future
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center rounded-2xl p-3 sm:p-4 inline-flex mx-auto">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfB6dfx5eTyU3XvwGvc9xisKab9hFMlJxtkmYkD0825LrBFrQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Join Our Program
              </a>
              <Link 
                to="/about" 
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Workshop Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                <span className="gradient-text">Upcoming Workshop</span>
              </h2>
              <div className="w-16 h-1 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Join our intensive program to master cutting-edge technologies
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Digital & Tech Policy Workshop</h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                    Comprehensive training in digital governance, cybersecurity policies, and emerging technology regulations. 
                    Learn from industry experts and shape the future of tech policy in India.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2 sm:mr-3"></div>
                      <span className="text-gray-700 text-xs sm:text-sm">6 Days Intensive Program</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2 sm:mr-3"></div>
                      <span className="text-gray-700 text-xs sm:text-sm">Expert-Led Sessions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2 sm:mr-3"></div>
                      <span className="text-gray-700 text-xs sm:text-sm">Hands-On Projects</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2 sm:mr-3"></div>
                      <span className="text-gray-700 text-xs sm:text-sm">Certificate of Completion</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg px-3 py-2 sm:px-4 sm:py-2">
                      <div className="text-xs sm:text-sm text-gray-600">Start Date</div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">18 Dec 2025</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg px-3 py-2 sm:px-4 sm:py-2">
                      <div className="text-xs sm:text-sm text-gray-600">End Date</div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">23 Dec 2025</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg px-3 py-2 sm:px-4 sm:py-2">
                      <div className="text-xs sm:text-sm text-gray-600">Location</div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">COEP TECH UNIVERSITY</div>
                    </div>
                  </div>
                  
                  {/* Register Button */}
                  <div className="mt-6">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfB6dfx5eTyU3XvwGvc9xisKab9hFMlJxtkmYkD0825LrBFrQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      Register Now
                    </a>
                  </div>

                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-4 sm:p-6 text-white shadow-lg">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Workshop Highlights</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Digital Governance Framework</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Cybersecurity Policy Design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">AI & ML Regulatory Compliance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Data Privacy & Protection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">Emerging Tech Regulations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                <span className="gradient-text">Previous Workshops</span>
              </h2>
              <div className="w-16 h-1 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Glimpses from our previous workshops and programs
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-80">
                {sliderImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Program moment ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                ))}
              </div>
              
              {/* Slider Indicators */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-4 sm:w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Tech For Bharat Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                <span className="gradient-text">About Tech For Bharat</span>
              </h2>
              <div className="w-16 h-1 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Empowering India's youth with cutting-edge technology skills
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Tech For Bharat is a national initiative dedicated to empowering India's youth with cutting-edge skills in the rapidly evolving technology landscape. Our mission is to build a future-ready generation equipped to drive innovation, strengthen national capabilities, and contribute meaningfully to the technological advancement of Bharat.
              </p>
              
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                We serve as a comprehensive learning platform offering high-impact training, workshops, and hands-on programmes across critical technology domains, including:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Emerging Technologies</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Critical Cyber Technologies</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Artificial Intelligence & Machine Learning (AI/ML)</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">National Security & Strategic Technologies</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Cyberspace Operations & Digital Defence</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Technology Governance & Tech Policy</h4>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                At Tech For Bharat, we believe that the nation's progress rests on empowering young minds with the right knowledge, tools, and opportunities. Our initiative aims to nurture skilled professionals, tech leaders, and innovators who will safeguard India's digital future and accelerate its technological growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Key Focus Areas</h3>
                  <div>
                    <div className="relative">
                      <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl"></div>
                      <div className="relative bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 h-full">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full items-center">
                          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-3 sm:p-4 text-center">
                            <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">AI</div>
                            <div className="text-xs sm:text-sm text-gray-700">Artificial Intelligence</div>
                          </div>
                          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 sm:p-4 text-center">
                            <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-1">CT</div>
                            <div className="text-xs sm:text-sm text-gray-700">Cyber Technologies</div>
                          </div>
                          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-3 sm:p-4 text-center">
                            <div className="text-xl sm:text-2xl font-bold text-pink-600 mb-1">TP</div>
                            <div className="text-xs sm:text-sm text-gray-700">Tech Policy</div>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 sm:p-4 text-center">
                            <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">EI</div>
                            <div className="text-xs sm:text-sm text-gray-700">Equity & Inclusion</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Our Approach</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Comprehensive Learning Platform</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">High-impact training, workshops, and hands-on programs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Industry Collaboration</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Partnerships with leading academic institutions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Future-Ready Skills</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Cutting-edge technology capabilities for tomorrow's challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Innovation Focus</h4>
                        <p className="text-gray-700 text-xs sm:text-sm">Driving technological advancement and creative solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                <span className="gradient-text">By The Numbers</span>
              </h2>
              <div className="w-16 h-1 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Our impact in empowering tech talent across India
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Students Trained</div>
                <div className="text-gray-700 text-sm">Across various technology domains</div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Workshops Conducted</div>
                <div className="text-gray-700 text-sm">Intensive hands-on learning experiences</div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
                <div className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Locations Reached</div>
                <div className="text-gray-700 text-sm">Across India's educational institutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Student Voices</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Hear from participants who transformed their careers with Tech For Bharat
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-700">{testimonial.role}</p>
                      <p className="text-xs text-gray-600">{testimonial.institution}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-sm">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}