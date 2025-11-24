import { Sparkles, Calendar, MapPin, Award, Users } from 'lucide-react'
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

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 pt-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Previous <span className="gradient-text">Workshop</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                AI Workshop by BharatGen - India's first government-funded Multimodal Large Language Model (LLM)
              </p>
            </div>

            {/* BharatGen AI Workshop Section */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-purple-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-4">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">Past Workshop</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  AI Workshop by <span className="gradient-text">BharatGen</span>
                </h2>
                <p className="text-lg text-gray-700 mb-2">
                  GenAI for Bharat, by Bharat
                </p>
                <p className="text-md text-gray-600 mb-4">
                  India's first government-funded Multimodal Large Language Model (LLM)
                </p>
                <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Award className="w-4 h-4 inline mr-1" />
                  Participants received AI Workshop Certificate
                </div>
              </div>

              {/* Workshop Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Date & Time</h3>
                      <p className="text-gray-600">Friday, 21st March, 2025</p>
                      <p className="text-gray-600">5:00 PM (Approx. 3 hours)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Venue</h3>
                      <p className="text-gray-600">Cognizant Lab, AC Ground Floor</p>
                      <p className="text-gray-600">COEP Technological University</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Selling Point */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-200">
                <h3 className="text-lg font-bold text-center text-gray-800 mb-2">Key Selling Point</h3>
                <p className="text-center text-gray-700 font-medium">
                  Learn to build AI with just minimum coding knowledge
                </p>
              </div>

              {/* Workshop Sessions */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-center mb-6 text-gray-800">Workshop Agenda (Curriculum)</h3>
                <div className="space-y-4">
                  {bharatGenSessions.map((session, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{session.title}</h4>
                        <p className="text-gray-600">{session.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organizers */}
              <div className="bg-gradient-to-r from-amber-50 to-purple-50 rounded-2xl p-6 mb-6 border border-amber-200">
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Organized By</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-600" />
                    <span className="font-semibold text-amber-700">Team URJA (COEP Technological University)</span>
                  </div>
                  <div className="hidden sm:block text-gray-400">+</div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-purple-700">BharatGen</span>
                  </div>
                </div>
              </div>

              {/* Promotional Context */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Our Vision</h3>
                <p className="text-center text-gray-700 mb-3">
                  "Explore AI innovations Made in India, Made for India."
                </p>
                <p className="text-center text-gray-700">
                  Real-world applications discussed: Agriculture, Healthcare, and more.
                </p>
                <p className="text-center text-gray-700 mt-2">
                  Goal: Inspire AI-driven solutions to strengthen the vision of Atmanirbhar Bharat in AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}