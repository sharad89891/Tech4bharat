import { Clock, MapPin, BookOpen, Brain, Code, Monitor, Heart, Utensils, Calendar, Archive, Sparkles } from 'lucide-react'

export default function PreviousPrograms() {
  const researchAreas = [
    { name: 'Artificial Intelligence', icon: Brain },
    { name: 'Deep Learning', icon: Monitor },
    { name: 'Generative AI', icon: Code },
    { name: 'Computer Vision', icon: Monitor },
    { name: 'Natural Language Processing', icon: BookOpen },
    { name: 'Robotics and AI', icon: Brain },
    { name: 'AI in Healthcare', icon: Heart }
  ]

  const bharatGenSessions = [
    { title: 'Langchain & AI Tools', description: 'Application Development with AI' },
    { title: 'Hugging Face Transformers', description: 'Pre-trained models for NLP' },
    { title: 'Neural Networks', description: 'Training models from scratch' },
    { title: 'Transformers & LLMs', description: 'Understanding transformer architecture' },
    { title: 'LLM Career Opportunities', description: 'Career paths in AI/LLM' }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Archive className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Previous Programs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text font-['Poppins']">Past Initiatives</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore our previous workshops and internship opportunities that empowered students across India
            </p>
          </div>

          {/* BharatGen AI Workshop Section */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-12 border-2 border-blue-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Past Workshop</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                BharatGen AI <span className="gradient-text">Workshop 2025</span>
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                India's First Government-Funded Multimodal Large Language Model Workshop
              </p>
            </div>

            {/* Workshop Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Date</h4>
                    <p className="text-gray-600">21st March 2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Duration</h4>
                    <p className="text-gray-600">3 Hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Venue</h4>
                    <p className="text-gray-600">COEP, Pune</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop Sessions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <h4 className="text-xl font-bold text-center mb-6 text-gray-800">Workshop Sessions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bharatGenSessions.map((session, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-800">{session.title}</h5>
                      <p className="text-sm text-gray-600">{session.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Info */}
            <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl">
              <p className="text-gray-700">
                Presented by <span className="font-bold text-orange-600">Team URJA</span> in collaboration with <span className="font-bold text-blue-600">BharatGen</span>
              </p>
            </div>
          </div>

          {/* VJTI Internship Section */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-purple-200">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-4">
                <Archive className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">Past Internship</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                VJTI Centre of Excellence in <span className="gradient-text">Artificial Intelligence</span>
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                7-week intensive internship program at VJTI's prestigious AI Lab
              </p>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Duration</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">7 Weeks</span>
                  </p>
                  <p className="text-gray-600">May/June/July 2025</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Timings</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">9:30 AM - 6:30 PM</span>
                  </p>
                  <p className="text-gray-600">Monday to Friday</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Mode</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Offline Only</span>
                  </p>
                  <p className="text-gray-600">VJTI Campus, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Research <span className="gradient-text">Areas</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {researchAreas.map((area, index) => {
                  const Icon = area.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="text-base font-semibold text-gray-800">{area.name}</h5>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Accommodation & Food */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold mb-3 text-gray-800">
                  <span className="gradient-text">Accommodation & Food</span> Details
                </h4>
                <p className="text-gray-600">For outstation students (subject to availability)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-7 h-7 text-white" />
                  </div>
                  <h5 className="text-lg font-bold mb-2 text-gray-800">Breakfast</h5>
                  <p className="text-2xl font-bold gradient-text">₹30</p>
                  <p className="text-sm text-gray-600 mt-2">per day</p>
                </div>

                <div className="text-center p-6 bg-indigo-50 rounded-xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-7 h-7 text-white" />
                  </div>
                  <h5 className="text-lg font-bold mb-2 text-gray-800">Lunch</h5>
                  <p className="text-2xl font-bold gradient-text">₹50</p>
                  <p className="text-sm text-gray-600 mt-2">per day</p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-7 h-7 text-white" />
                  </div>
                  <h5 className="text-lg font-bold mb-2 text-gray-800">Dinner</h5>
                  <p className="text-2xl font-bold gradient-text">₹60</p>
                  <p className="text-sm text-gray-600 mt-2">per day</p>
                </div>
              </div>

              <div className="mt-6 text-center p-4 bg-orange-50 rounded-xl">
                <p className="text-lg">
                  <span className="font-bold text-orange-600">Total: ₹140/day</span>
                  <span className="text-gray-600 ml-2">(All meals included)</span>
                </p>
              </div>
            </div>

            {/* Program Status */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-50 to-purple-50 border-2 border-gray-300 rounded-2xl p-8">
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  This internship program has concluded
                </p>
                <p className="text-gray-600">
                  Registration deadline was 10th May, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
