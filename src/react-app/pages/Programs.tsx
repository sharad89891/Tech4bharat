import { BookOpen, Brain, Code, Monitor, Heart } from 'lucide-react'
import { Link } from 'react-router'
import Navigation from '@/react-app/components/Navigation'
import Footer from '@/react-app/components/Footer'

export default function ProgramsPage() {
  const programs = [
    {
      icon: Brain,
      title: 'AI Workshop',
      description: 'Hands-on training in Artificial Intelligence and Machine Learning',
      link: '/previous-workshop',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Code,
      title: 'Internship Program',
      description: '6-week intensive research internship at VJTI Mumbai',
      link: '/past-internship',
      color: 'from-amber-500 to-yellow-600'
    }
  ]

  const researchAreas = [
    { name: 'Artificial Intelligence', icon: Brain },
    { name: 'Deep Learning', icon: Monitor },
    { name: 'Generative AI', icon: Code },
    { name: 'Computer Vision', icon: Monitor },
    { name: 'Natural Language Processing', icon: BookOpen },
    { name: 'Robotics and AI', icon: Brain },
    { name: 'AI in Healthcare', icon: Heart }
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 pt-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Programs</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive training and research programs in cutting-edge technology
              </p>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {programs.map((program, index) => {
                const Icon = program.icon
                return (
                  <Link
                    key={index}
                    to={program.link}
                    className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-purple-100"
                  >
                    <div className="flex flex-col h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">{program.title}</h2>
                      <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
                      <div className="inline-flex items-center text-purple-600 font-semibold">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Research Areas */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Research <span className="gradient-text">Areas</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto mb-6" />
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Our programs cover cutting-edge technologies and research domains
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {researchAreas.map((area, index) => {
                  const Icon = area.icon
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{area.name}</h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Join our upcoming programs and become part of India's technological revolution
              </p>
              <Link
                to="/workshop"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Explore Upcoming Workshop
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}