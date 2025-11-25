import { Target, Users, Lightbulb, TrendingUp, BookOpen, Brain, Code, Monitor, Building, School, Briefcase, Shield } from 'lucide-react'
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
    { name: 'Tech University', location: 'Location', icon: School },
    { name: 'University', location: 'Location', icon: Building },
    { name: 'Research Center', location: 'Location', icon: Briefcase }
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 gradient-bg" />

        {/* Animated Gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 animate-in fade-in slide-in-from-top duration-700">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-sm font-semibold text-gray-700">National Initiative</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              <span className="gradient-text">Tech For Bharat</span>
            </h1>

            {/* Mission Statement */}
            <div className="max-w-4xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <div className="glass-effect rounded-3xl p-8 md:p-12">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                  Tech For Bharat is a national initiative dedicated to empowering India's youth with cutting-edge skills in the rapidly evolving technology landscape. Our mission is to build a future-ready generation equipped to drive innovation, strengthen national capabilities, and contribute meaningfully to the technological advancement of Bharat.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  We serve as a comprehensive learning platform offering high-impact training, workshops, and hands-on programmes across critical technology domains, including:
                </p>
                <ul className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4 text-left max-w-3xl mx-auto space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Emerging Technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Critical Cyber Technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Artificial Intelligence & Machine Learning (AI/ML)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>National Security & Strategic Technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Cyberspace Operations & Digital Defence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Technology Governance & Tech Policy</span>
                  </li>
                </ul>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                  At Tech For Bharat, we believe that the nation's progress rests on empowering young minds with the right knowledge, tools, and opportunities. Our initiative aims to nurture skilled professionals, tech leaders, and innovators who will safeguard India's digital future and accelerate its technological growth.
                </p>
              </div>
            </div>

            {/* Pillars Grid - Centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon
                  return (
                    <div
                      key={index}
                      className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">{pillar.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Vision Statement */}
            <div className="mt-16 max-w-3xl mx-auto glass-effect rounded-3xl p-8 md:p-10 animate-in fade-in duration-700 delay-400">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Building Tomorrow's <span className="gradient-text">Tech Leaders</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Through comprehensive programs, workshops, and internships, we're creating opportunities for students to learn, innovate, and lead in the technology sector. Join us in shaping the future of India's digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Partners - Smaller boxes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Knowledge <span className="gradient-text">Partners</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6" />
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Collaborating with leading institutions to deliver world-class education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {knowledgePartners.map((partner, index) => {
                const Icon = partner.icon
                return (
                  <div
                    key={index}
                    className="glass-effect rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-1 text-gray-800">{partner.name}</h3>
                      <p className="text-gray-600 text-sm">{partner.location}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Focus <span className="gradient-text">Areas</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6" />
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our programs cover critical technology domains for national development
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
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
        </div>
      </section>

      <Footer />
    </div>
  )
}