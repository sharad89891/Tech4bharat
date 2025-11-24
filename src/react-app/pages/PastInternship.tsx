import { Calendar, MapPin, Users, Brain, Award } from 'lucide-react'
import Navigation from '@/react-app/components/Navigation'
import Footer from '@/react-app/components/Footer'

export default function PastInternshipPage() {
  const internshipDetails = [
    { 
      title: 'AI in Healthcare', 
      description: 'Developing AI solutions for medical diagnosis and patient care' 
    },
    { 
      title: 'Agricultural AI', 
      description: 'Creating AI models for crop prediction and farming optimization' 
    },
    { 
      title: 'Smart Cities', 
      description: 'Building AI-powered solutions for urban planning and management' 
    },
    { 
      title: 'Natural Language Processing', 
      description: 'Working on multilingual NLP models' 
    },
    { 
      title: 'Computer Vision', 
      description: 'Developing vision systems for industrial automation' 
    }
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
                Past <span className="gradient-text">Internship</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                University Centre of Excellence in Artificial Intelligence
              </p>
            </div>

            {/* VJTI AI Internship Section */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-purple-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-4">
                  <Brain className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">Past Internship</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  University <span className="gradient-text">AI Internship</span>
                </h2>
                <p className="text-lg text-gray-700 mb-2">
                  Centre of Excellence in Artificial Intelligence
                </p>
                <p className="text-md text-gray-600 mb-4">
                  6-week intensive program with hands-on research projects
                </p>
                <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Award className="w-4 h-4 inline mr-1" />
                  Interns received Certificate of Excellence
                </div>
              </div>

              {/* Internship Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Duration</h3>
                      <p className="text-gray-600">June 15 - July 30, 2025</p>
                      <p className="text-gray-600">(6 weeks)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Location</h3>
                      <p className="text-gray-600">University AI Lab</p>
                      <p className="text-gray-600">Location</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-200">
                <h3 className="text-lg font-bold text-center text-gray-800 mb-4">Program Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">45+</div>
                    <div className="text-sm text-gray-700">Selected Interns</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">8</div>
                    <div className="text-sm text-gray-700">Research Areas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">12</div>
                    <div className="text-sm text-gray-700">Faculty Mentors</div>
                  </div>
                </div>
              </div>

              {/* Internship Projects */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-center mb-6 text-gray-800">Research Areas & Projects</h3>
                <div className="space-y-4">
                  {internshipDetails.map((project, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{project.title}</h4>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-200">
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Skills Gained</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-purple-600 border border-purple-200">Python</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-indigo-600 border border-indigo-200">TensorFlow</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-600 border border-blue-200">PyTorch</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-pink-600 border border-pink-200">Computer Vision</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-green-600 border border-green-200">NLP</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-600 border border-blue-200">Deep Learning</span>
                </div>
              </div>

              {/* Organizers */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Organized By</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-700">University</span>
                  </div>
                  <div className="hidden sm:block text-gray-400">+</div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-purple-700">Centre of Excellence in AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}