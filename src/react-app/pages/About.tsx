import { Target, Users, Lightbulb, TrendingUp, BookOpen, Brain, Code, Monitor, Shield, School, Building, Briefcase, ChevronRight } from 'lucide-react'
import Navigation from '@/react-app/components/Navigation'
import Footer from '@/react-app/components/Footer'

export default function AboutPage() {
  const pillars = [
    {
      icon: Target,
      title: 'Future-Ready Skills',
      description: 'Equipping youth with cutting-edge technology capabilities'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Driving technological advancement and creative solutions'
    },
    {
      icon: Users,
      title: 'Capacity Building',
      description: 'Strengthening technological capabilities'
    },
    {
      icon: TrendingUp,
      title: 'Meaningful Impact',
      description: 'Contributing to technological growth'
    }
  ]

  const researchAreas = [
    { name: 'Emerging Technologies', icon: Brain },
    { name: 'Critical Cyber Technologies', icon: Monitor },
    { name: 'Artificial Intelligence & Machine Learning (AI/ML)', icon: Code },
    { name: 'National Security & Strategic Technologies', icon: Target },
    { name: 'Cyberspace Operations & Digital Defence', icon: Shield },
    { name: 'Technology Governance & Tech Policy', icon: BookOpen }
  ]

  const knowledgePartners = [
    { name: 'COEP Tech University', location: 'Pune', icon: School },
    { name: 'VJTI', location: 'Mumbai', icon: Building },
    { name: 'CDTIES', location: 'IIT Bombay', icon: Briefcase }
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 pt-24 overflow-hidden gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header Row */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                  Tech For Bharat
                </h1>
                <p className="text-lg sm:text-xl text-gray-800 max-w-2xl leading-relaxed">
                  Empowering India's youth with cutting-edge technology skills for tomorrow's challenges.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-lg w-full lg:w-auto border border-white/40">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-gray-800 text-sm">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">12+</div>
                  <div className="text-gray-800 text-sm">Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">6</div>
                  <div className="text-gray-800 text-sm">Research Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">3</div>
                  <div className="text-gray-800 text-sm">Knowledge Partners</div>
                </div>
              </div>
            </div>

            {/* Mission & Vision - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {/* Mission */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg">
                <h2 className="text-xl font-bold mb-3 text-gray-800">Our Mission</h2>
                <p className="text-gray-800 leading-relaxed mb-4 text-sm">
                  Tech For Bharat is dedicated to empowering India's youth with cutting-edge skills in the rapidly evolving technology landscape. We build a future-ready generation equipped to drive innovation and contribute meaningfully to Bharat's technological advancement.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">Comprehensive learning platform with high-impact training</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">Hands-on workshops and practical programs</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">Focus on critical technology domains</span>
                  </div>
                </div>
              </div>
              
              {/* Vision */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg">
                <h2 className="text-xl font-bold mb-3 text-gray-800">Our Vision</h2>
                <p className="text-gray-800 leading-relaxed mb-4 text-sm">
                  We envision nurturing skilled professionals, tech leaders, and innovators who will safeguard India's digital future and accelerate its technological growth through comprehensive programs and opportunities.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">Building tomorrow's tech leaders</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">Creating opportunities for innovation</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">Shaping India's digital landscape</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Pillars - 2x2 Grid Layout */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Pillars</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon
                  return (
                    <div
                      key={index}
                      className="bg-white/30 backdrop-blur-md rounded-xl p-5 hover:scale-105 transition-all duration-300 group hover:shadow-xl border border-white/40 h-full"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform mx-auto">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800 text-center">{pillar.title}</h3>
                      <p className="text-gray-800 text-sm leading-relaxed text-center">{pillar.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Sections - Compact Layout */}
      <section className="py-6 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Research Areas */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center lg:text-left text-gray-800">
                  Research <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Areas</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {researchAreas.map((area, index) => {
                    const Icon = area.icon
                    return (
                      <div
                        key={index}
                        className="bg-white/30 backdrop-blur-md rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-white/40 flex items-center"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-xs">{area.name}</h3>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              {/* Knowledge Partners */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center lg:text-left text-gray-800">
                  Knowledge <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Partners</span>
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {knowledgePartners.map((partner, index) => {
                    const Icon = partner.icon
                    return (
                      <div
                        key={index}
                        className="bg-white/30 backdrop-blur-md rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-white/40 text-center"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm">{partner.name}</h3>
                        <p className="text-gray-800 text-xs">{partner.location}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Join the Tech Revolution</h2>
            <p className="text-lg mb-6 text-purple-100 max-w-2xl mx-auto">
              Be part of India's journey toward technological excellence. Register for our upcoming programs and workshops.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfB6dfx5eTyU3XvwGvc9xisKab9hFMlJxtkmYkD0825LrBFrQ/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}