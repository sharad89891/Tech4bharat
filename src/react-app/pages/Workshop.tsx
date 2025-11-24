import { Calendar, MapPin, ArrowRight, Users, Target, BookOpen, Award } from 'lucide-react'
import { Link } from 'react-router'
import Navigation from '@/react-app/components/Navigation'
import Footer from '@/react-app/components/Footer'

export default function WorkshopPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 pt-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-['Montserrat']">
                Upcoming <span className="gradient-text">Workshop</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Join our upcoming workshop on Digital and Tech Policy happening from December 18-23, 2025
              </p>
            </div>

            {/* Desktop Layout - Image on left, Info and Registration on right */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Workshop Poster */}
              <div className="rounded-2xl overflow-hidden border-2 border-purple-200 shadow-xl">
                <img
                  src="https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-23-at-12.39.17-AM-(1).jpeg"
                  alt="Digital and Tech Policy Workshop - December 18-23, 2025"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right Column - Event Information and Registration */}
              <div className="flex flex-col gap-6">
                {/* Event Information */}
                <div className="rounded-2xl p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50 shadow-xl flex-grow">
                  <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-['Montserrat']">
                      Workshop on <span className="gradient-text">Digital and Tech Policy</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mb-4" />
                    <p className="text-base text-gray-700 leading-relaxed font-medium">
                      Learning and Practical Training on Emerging Tech and Policy by Top Experts
                    </p>
                  </div>

                  {/* Event Details in Small Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-purple-100">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-sm">Event Dates</h3>
                          <p className="text-xs text-gray-600">18th to 23rd December, 2025</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-md border border-amber-100">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-sm">Location</h3>
                          <p className="text-xs text-gray-600">COEP Tech University, Pune</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Organizers in Small Boxes */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3 text-sm">Organized By</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white rounded-xl p-4 shadow-md border border-purple-100">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full" />
                          <p className="text-xs text-gray-700"><span className="font-semibold">COEP Tech University</span> Pune</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md border border-indigo-100">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                          <p className="text-xs text-gray-700"><span className="font-semibold">VJTI</span> Mumbai</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Knowledge Partners in Small Boxes */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-sm">Knowledge Partners</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white rounded-xl p-4 shadow-md border border-green-100">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full" />
                          <p className="text-xs text-gray-700"><span className="font-semibold">CDTIES</span>, IIT Bombay</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md border border-emerald-100">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                          <p className="text-xs text-gray-700"><span className="font-semibold">Observer Research Foundation</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration Section */}
                <div className="rounded-2xl p-6 border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-white to-purple-50 shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 font-['Montserrat']">
                    Ready to Join the Workshop?
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Secure your spot at this exclusive workshop on Digital and Tech Policy. Limited seats available!
                  </p>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Register Now
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <p className="text-xs text-gray-500 mt-3">
                    By registering, you agree to receive updates about the workshop via email.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout - Stacked */}
            <div className="lg:hidden">
              {/* Workshop Poster */}
              <div className="rounded-2xl overflow-hidden mb-8 border-2 border-purple-200 shadow-xl">
                <img
                  src="https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-23-at-12.39.17-AM-(1).jpeg"
                  alt="Digital and Tech Policy Workshop - December 18-23, 2025"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Event Information */}
              <div className="rounded-2xl p-6 mb-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50 shadow-xl">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-3 font-['Montserrat']">
                    Workshop on <span className="gradient-text">Digital and Tech Policy</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mb-4" />
                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    Learning and Practical Training on Emerging Tech and Policy by Top Experts
                  </p>
                </div>

                {/* Event Details in Small Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 shadow-md border border-purple-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm">Event Dates</h3>
                        <p className="text-xs text-gray-600">18th to 23rd December, 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-md border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm">Location</h3>
                        <p className="text-xs text-gray-600">COEP Tech University, Pune</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Organizers in Small Boxes */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-sm">Organized By</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-purple-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        <p className="text-xs text-gray-700"><span className="font-semibold">COEP Tech University</span> Pune</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-indigo-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                        <p className="text-xs text-gray-700"><span className="font-semibold">VJTI</span> Mumbai</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Knowledge Partners in Small Boxes */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-sm">Knowledge Partners</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-green-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        <p className="text-xs text-gray-700"><span className="font-semibold">CDTIES</span>, IIT Bombay</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border border-emerald-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                        <p className="text-xs text-gray-700"><span className="font-semibold">Observer Research Foundation</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Section */}
              <div className="text-center rounded-2xl p-8 border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-white to-purple-50 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-['Montserrat']">
                  Ready to Join the Workshop?
                </h3>
                <p className="text-base text-gray-700 max-w-xl mx-auto mb-6">
                  Secure your spot at this exclusive workshop on Digital and Tech Policy. Limited seats available!
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-xs text-gray-500 mt-4">
                  By registering, you agree to receive updates about the workshop via email.
                </p>
              </div>
            </div>

            {/* Detailed Workshop Information Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="gradient-text">Event Overview</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Event Details */}
                <div className="space-y-8">
                  {/* Event Title and Dates */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      Event Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800">Title:</h4>
                        <p className="text-gray-700">Comprehending Digital Technology Policy: Frameworks, Challenges, and Applications</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Dates:</h4>
                        <p className="text-gray-700">December 18th to December 23rd, 2025</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Venue:</h4>
                        <p className="text-gray-700">COEP Technological University Pune</p>
                      </div>
                    </div>
                  </div>

                  {/* Organizers and Partners */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Organizers and Partners
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Organizers:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>COEP Technological University Pune (COEP)</li>
                          <li>Veermata Jijabai Technological Institute (VJTI), Mumbai</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Knowledge Partners:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Centre for Defence Technology Innovations and Strategies (CDTIES), IIT Bombay</li>
                          <li>Observer Research Foundation (ORF)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Objectives and Key Themes */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-600" />
                      Objectives and Key Themes
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        The workshop is a student-focused program designed to introduce the fundamentals of digital technology policy and build awareness of the interaction between technology, governance, and society.
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Themes include:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Introduction to Technology Policy and Frameworks</li>
                          <li>Critical Infrastructure and Cybersecurity Policies</li>
                          <li>Data Protection and Privacy</li>
                          <li>AI Governance and Responsible AI</li>
                          <li>Tech Diplomacy and International Policy Cooperation</li>
                          <li>Emerging Areas: Space Policy, Digital Assets, Clean Energy Tech, and Information Warfare</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Target Audience and Outcomes */}
                <div className="space-y-8">
                  {/* Target Audience */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">Target Audience</h3>
                    <p className="text-gray-700 mb-3">
                      The workshop seeks students who:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Are enrolled in premier institutions in Technology, Law, or Management fields</li>
                      <li>Possess a good academic track record</li>
                      <li>Are passionate about emerging digital technologies, national security, and global governance</li>
                      <li>Wish to contribute to building the nation's technological capabilities</li>
                    </ul>
                  </div>

                  {/* Learning Components and Outcomes */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">Learning Components and Outcomes</h3>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        The curriculum includes lectures from defence services experts, industry experts, faculty from premier institutions, and experts from government and think tanks.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Activities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Study of global policy frameworks (e.g., Estonia, India, EU AI Act)</li>
                          <li>Instruction on how to write policy documents using an evidence-based approach</li>
                          <li>Simulation exercises on drafting mini policies (e.g., AI in surveillance)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Outcomes:</h4>
                        <p className="text-gray-700">
                          Participants will develop an understanding of digital policy processes, gain exposure to security challenges, and learn practical drafting techniques.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Logistics and Registration */}
                  <div className="glass-effect rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Logistics and Registration
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800">Costs:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                          <li>Deposit: INR 1000 (Refundable upon 100% workshop attendance)</li>
                          <li>Accommodation & Food: Provided free of charge (Breakfast, Lunch, Dinner). Accommodation is in COEP Hostels (separate for boys and girls)</li>
                          <li>Travel: Participants must bear their own travel expenses to the venue</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800">Certification:</h4>
                        <p className="text-gray-700 ml-4">
                          A digital certificate of participation will be awarded upon submission of assignments and meeting attendance criteria
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800">Registration:</h4>
                        <p className="text-gray-700 ml-4">
                          Registration Link: <a href="https://forms.gle/tUCdykCbaD4NPEhv7" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://forms.gle/tUCdykCbaD4NPEhv7</a>
                        </p>
                        <p className="text-gray-700 ml-4 mt-1">
                          Contact Email: <a href="mailto:techforbharat2025@gmail.com" className="text-purple-600 hover:underline">techforbharat2025@gmail.com</a>
                        </p>
                      </div>
                    </div>
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