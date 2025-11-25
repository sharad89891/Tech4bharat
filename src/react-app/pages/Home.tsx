import { Link } from 'react-router'
import Footer from '@/react-app/components/Footer'
import Navigation from '@/react-app/components/Navigation'
import Gallery from '@/react-app/components/Gallery'

export default function Home() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      institution: "Tech University",
      content: "The Tech For Bharat workshop completely transformed my understanding of AI applications. The hands-on approach and expert guidance helped me build my first AI model.",
      avatar: "PS"
    },
    {
      name: "Rahul Verma",
      role: "Engineering Student",
      institution: "University",
      content: "The program was an incredible experience. I worked on real-world projects that are making a difference in various fields.",
      avatar: "RV"
    },
    {
      name: "Anjali Patel",
      role: "Research Scholar",
      institution: "University",
      content: "Tech For Bharat's focus on innovative solutions inspired my research. The mentorship I received was invaluable for my career.",
      avatar: "AP"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500">
                Tech For Bharat
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
              Empowering youth with cutting-edge technology skills for a brighter future
            </p>
            
            {/* Upcoming Workshop Highlight */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Upcoming Event - Register Now!</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Digital and Tech Policy Workshop</span>
              </h2>
              
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Event Dates</h3>
                      <p className="text-gray-700">18th to 23rd December, 2025</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Location</h3>
                      <p className="text-gray-700">University Campus</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                Learn and get practical training on Emerging Tech and Policy by Top Experts
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/register" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Register Now
                </Link>
                <Link 
                  to="/workshop" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Students Trained</div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Workshops Conducted</div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30">
                <div className="text-3xl font-bold text-indigo-600 mb-2">8</div>
                <div className="text-gray-700 font-medium">Locations Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section - Floating Images */}
      <section className="py-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Previous Workshops</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6" />
              <p className="text-lg text-gray-700">
                Glimpses from our AI workshops and the amazing learning experiences we create
              </p>
            </div>
          </div>
        </div>
        <Gallery />
      </section>
      
      {/* Tech For Bharat Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6" />
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Empowering youth with cutting-edge technology skills for a brighter future
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Building Tomorrow's <span className="gradient-text">Tech Leaders</span>
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Tech For Bharat is an initiative dedicated to empowering youth with cutting-edge skills in the rapidly evolving technology landscape. Our mission is to build a future-ready generation equipped to drive innovation and contribute meaningfully to technological advancement.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Through comprehensive programs, workshops, and internships, we're creating opportunities for students to learn, innovate, and lead in the technology sector. We focus on innovative solutions that address unique challenges and opportunities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our programs cover cutting-edge technologies including Artificial Intelligence, Deep Learning, Generative AI, Computer Vision, and Natural Language Processing, preparing students for the future of technology.
                </p>
                <Link 
                  to="/about" 
                  className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Learn More About Our Mission
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-600 mb-1">AI</div>
                        <div className="text-sm text-gray-700">Artificial Intelligence</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-600 mb-1">ML</div>
                        <div className="text-sm text-gray-700">Machine Learning</div>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">DL</div>
                        <div className="text-sm text-gray-700">Deep Learning</div>
                      </div>
                      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-pink-600 mb-1">NLP</div>
                        <div className="text-sm text-gray-700">Natural Language Processing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Explore Our Initiatives
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/about" 
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-purple-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Tech For Bharat</h3>
                <p className="text-gray-600 text-sm">Learn about our initiative</p>
              </Link>
              
              <Link 
                to="/previous-workshop" 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Past Workshop</h3>
                <p className="text-gray-600 text-sm">View our previous AI workshop</p>
              </Link>
              
              <Link 
                to="/past-internship" 
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-indigo-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Past Internship</h3>
                <p className="text-gray-600 text-sm">View our AI internship</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our <span className="gradient-text">Participants Say</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6" />
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Hear from students who have been part of our programs and how it has impacted their journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.institution}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
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