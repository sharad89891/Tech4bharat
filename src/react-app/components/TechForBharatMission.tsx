import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react'

export default function TechForBharatMission() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Animated Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700" />
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
            <span className="gradient-text font-['Poppins']">Tech For Bharat</span>
          </h1>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div className="glass-effect rounded-3xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Tech For Bharat is a national initiative dedicated to empowering India's youth with cutting-edge skills in the rapidly evolving technology landscape. Our mission is to build a future-ready generation equipped to drive innovation, strengthen national capabilities, and contribute meaningfully to the technological advancement of Bharat.
              </p>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-700 delay-300">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
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
  )
}
