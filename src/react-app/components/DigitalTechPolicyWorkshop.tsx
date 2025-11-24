import { Calendar, MapPin, Users, Briefcase } from 'lucide-react'
import WorkshopRegistrationForm from '@/react-app/components/WorkshopRegistrationForm'

export default function DigitalTechPolicyWorkshop() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border-2 border-blue-200 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-bold text-blue-600">Upcoming Event</span>
            </div>
          </div>

          {/* Workshop Poster */}
          <div className="glass-effect rounded-3xl p-4 md:p-8 mb-12 border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-white to-blue-50">
            <div className="max-w-4xl mx-auto">
              <img
                src="https://mocha-cdn.com/019aac49-d960-7ba3-a8eb-167145646896/WhatsApp-Image-2025-11-23-at-12.39.17-AM-(1).jpeg"
                alt="Digital and Tech Policy Workshop - December 18-23, 2025"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Event Information */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-16 border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Workshop on <span className="gradient-text font-['Poppins']">Digital and Tech Policy</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                Learning and Practical Training on Emerging Tech and Policy by Top Experts
              </p>
            </div>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Event Dates</h3>
                    <p className="text-gray-600">18th to 23rd December, 2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Location</h3>
                    <p className="text-gray-600">COEP Tech University, Pune</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizers */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Organized By</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <p className="text-gray-700"><span className="font-semibold">COEP Tech University</span> Pune</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                      <p className="text-gray-700"><span className="font-semibold">VJTI</span> Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Knowledge Partners */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Knowledge Partners</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      <p className="text-gray-700"><span className="font-semibold">CDTIES</span>, IIT Bombay</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <p className="text-gray-700"><span className="font-semibold">Observer Research Foundation</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div id="register">
            <WorkshopRegistrationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
