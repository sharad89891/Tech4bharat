import { Target, Users, Lightbulb, TrendingUp, Shield, Brain, Globe, Cpu } from 'lucide-react'

export default function About() {
  const domains = [
    {
      icon: Cpu,
      title: 'Emerging Technologies',
      description: 'Cutting-edge tech innovations shaping tomorrow'
    },
    {
      icon: Shield,
      title: 'Critical Cyber Technologies',
      description: 'Advanced cybersecurity and digital defense'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Artificial intelligence and ML applications'
    },
    {
      icon: Target,
      title: 'National Security & Strategic Tech',
      description: 'Technologies for national defense'
    },
    {
      icon: Globe,
      title: 'Cyberspace Operations',
      description: 'Digital operations and cyber warfare'
    },
    {
      icon: Lightbulb,
      title: 'Technology Governance',
      description: 'Tech policy and digital governance'
    }
  ]

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
      title: 'National Capacity',
      description: 'Strengthening India\'s technological capabilities'
    },
    {
      icon: TrendingUp,
      title: 'Meaningful Impact',
      description: 'Contributing to Bharat\'s technological growth'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text font-['Poppins']">Tech For Bharat</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </div>

          {/* Mission Statement */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                  Our <span className="gradient-text">Mission</span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Tech For Bharat is a national initiative dedicated to empowering India's youth with cutting-edge skills in the rapidly evolving technology landscape.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Our mission is to build a future-ready generation equipped to drive innovation, strengthen national capabilities, and contribute meaningfully to the technological advancement of Bharat.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  At Tech For Bharat, we believe that the nation's progress rests on empowering young minds with the right knowledge, tools, and opportunities. Our initiative aims to nurture skilled professionals, tech leaders, and innovators who will safeguard India's digital future and accelerate its technological growth.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-5xl mb-2">🇮🇳</div>
                      <div className="text-3xl font-bold gradient-text">Tech</div>
                      <div className="text-sm text-gray-600 mt-2">for Bharat</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Our Core <span className="gradient-text">Pillars</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Training Domains */}
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Our <span className="gradient-text">Training Domains</span>
            </h3>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              We serve as a comprehensive learning platform offering high-impact training, workshops, and hands-on programmes across critical technology domains:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {domains.map((domain, index) => {
                const Icon = domain.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2 text-gray-800">{domain.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{domain.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mt-16 text-center glass-effect rounded-3xl p-8 md:p-12 bg-gradient-to-br from-orange-50 to-blue-50">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Building Tomorrow's <span className="gradient-text">Tech Leaders</span>
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Through comprehensive programs, workshops, and internships, we're creating opportunities for students to learn, innovate, and lead in the technology sector.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Join us in shaping the future of India's digital landscape and contributing to <span className="font-semibold text-orange-600">Atmanirbhar Bharat</span> in technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
