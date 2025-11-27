import { Sparkles, Calendar, MapPin, Award, Users, Brain } from 'lucide-react'
import Navigation from '@/react-app/components/Navigation'
import Footer from '@/react-app/components/Footer'

export default function PreviousWorkshopPage() {
  const bharatGenSessions = [
    { 
      title: 'Langchain', 
      description: 'Introduction to Application Development with Langchain. Hands-on with AI-powered tools.' 
    },
    { 
      title: 'Hugging Face Transformers', 
      description: 'Exploring pre-trained AI models for NLP (Natural Language Processing) and Image classification.' 
    },
    { 
      title: 'Neural Networks', 
      description: 'Basics of neural networks. Hands-on training a simple model.' 
    },
    { 
      title: 'Transformers & Large Language Models (LLMs)', 
      description: 'Understanding transformers. Coding an LLM from scratch.' 
    },
    { 
      title: 'LLM Landscape & Career Opportunities', 
      description: 'Overview of LLMs. Career paths and project discussions.' 
    }
  ]

  const internshipDetails = [
    { 
      title: 'Artificial Intelligence', 
      description: 'Foundational concepts and applications of AI in various domains' 
    },
    { 
      title: 'Deep Learning', 
      description: 'Advanced neural network architectures and training techniques' 
    },
    { 
      title: 'Generative AI', 
      description: 'Creating AI models for content generation and creative applications' 
    },
    { 
      title: 'Computer Vision', 
      description: 'Developing vision systems for image and video analysis' 
    },
    { 
      title: 'Natural Language Processing', 
      description: 'Working on language understanding and generation models' 
    },
    { 
      title: 'Robotics and AI', 
      description: 'Integrating AI algorithms with robotic systems for autonomous behavior' 
    },
    { 
      title: 'AI in Healthcare', 
      description: 'Developing AI solutions for medical diagnosis and patient care' 
    }
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Previous <span className="gradient-text">Activities</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
              Workshops and Internships by Tech For Bharat
            </p>
          </div>

          {/* BharatGen AI Workshop Section */}
          <div className="glass-effect rounded-2xl p-6 sm:p-8 md:p-10 border border-purple-200 mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 mb-3">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-xs sm:text-sm font-semibold text-purple-600">Past Workshop</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                AI Workshop by <span className="gradient-text">BharatGen</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-2 px-2">
                GenAI for Everyone, by Everyone
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 px-2">
                Multimodal Large Language Model (LLM)
              </p>
              <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                Participants received AI Workshop Certificate
              </div>
            </div>

            {/* Workshop Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Date & Time</h3>
                    <p className="text-sm sm:text-base text-gray-600">Friday, 21st March, 2025</p>
                    <p className="text-xs sm:text-sm text-gray-600">5:00 PM (Approx. 3 hours)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Venue</h3>
                    <p className="text-sm sm:text-base text-gray-600">Cognizant Lab, AC Ground Floor</p>
                    <p className="text-xs sm:text-sm text-gray-600">COEP Tech University Pune</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Selling Point */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 border border-blue-200">
              <h3 className="text-base sm:text-lg font-bold text-center text-gray-800 mb-2">Key Selling Point</h3>
              <p className="text-center text-gray-700 font-medium text-sm sm:text-base px-2">
                Learn to build AI with just minimum coding knowledge
              </p>
            </div>

            {/* Workshop Sessions */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6 text-gray-800">Workshop Agenda (Curriculum)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {bharatGenSessions.map((session, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-purple-50 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{session.title}</h4>
                      <p className="text-gray-600 text-xs mt-1">{session.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizers */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-5 border border-blue-200">
              <h3 className="text-base sm:text-lg font-bold text-center text-gray-800 mb-3">Organized By</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-sm sm:font-semibold text-blue-700">COEP Tech University Pune</span>
                </div>
              </div>
            </div>

            {/* Promotional Context */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-200">
              <h3 className="text-base sm:text-lg font-bold text-center text-gray-800 mb-3">Our Vision</h3>
              <p className="text-center text-gray-700 text-sm sm:text-base mb-2 px-2">
                "Explore AI innovations for everyone."
              </p>
              <p className="text-center text-gray-700 text-sm sm:text-base px-2">
                Real-world applications discussed: Agriculture, Healthcare, and more.
              </p>
              <p className="text-center text-gray-700 text-sm sm:text-base mt-2 px-2">
                Goal: Inspire AI-driven solutions for technological advancement.
              </p>
            </div>
          </div>

          {/* University AI Internship Section */}
          <div className="glass-effect rounded-2xl p-6 sm:p-8 md:p-10 border border-purple-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 mb-3">
                <Brain className="w-4 h-4 text-purple-600" />
                <span className="text-xs sm:text-sm font-semibold text-purple-600">Past Internship</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                Internship at <span className="gradient-text">Centre of Excellence in AI, VJTI</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 px-2">
                6-week intensive program with hands-on research projects
              </p>
              <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                Interns received Certificate of Excellence
              </div>
            </div>

            {/* Internship Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Duration</h3>
                    <p className="text-sm sm:text-base text-gray-600">June 15 - July 30, 2025</p>
                    <p className="text-xs sm:text-sm text-gray-600">(6 weeks)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 border border-blue-200">
              <h3 className="text-base sm:text-lg font-bold text-center text-gray-800 mb-3 sm:mb-4">Program Highlights</h3>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">45+</div>
                  <div className="text-xs sm:text-sm text-gray-700">Selected Interns</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">8</div>
                  <div className="text-xs sm:text-sm text-gray-700">Research Areas</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-1">12</div>
                  <div className="text-xs sm:text-sm text-gray-700">Faculty Mentors</div>
                </div>
              </div>
            </div>

            {/* Internship Projects */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6 text-gray-800">Research Areas & Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {internshipDetails.map((project, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-purple-50 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{project.title}</h4>
                      <p className="text-gray-600 text-xs mt-1">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-5 border border-blue-200">
              <h3 className="text-base sm:text-lg font-bold text-center text-gray-800 mb-3">Skills Gained</h3>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white rounded-full text-xs sm:text-sm font-medium text-purple-600 border border-purple-200">Python</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white rounded-full text-xs sm:text-sm font-medium text-indigo-600 border border-indigo-200">TensorFlow</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white rounded-full text-xs sm:text-sm font-medium text-blue-600 border border-blue-200">PyTorch</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white rounded-full text-xs sm:text-sm font-medium text-pink-600 border border-pink-200">Computer Vision</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white rounded-full text-xs sm:text-sm font-medium text-green-600 border border-green-200">NLP</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white rounded-full text-xs sm:text-sm font-medium text-blue-600 border border-blue-200">Deep Learning</span>
              </div>
            </div>

            {/* Organizers */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-200">
              <h3 className="text-base sm:text-lg font-bold text-center text-gray-800 mb-3">Organized By</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="text-sm sm:font-semibold text-purple-700">VJTI Mumbai</span>
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