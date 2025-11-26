import { useState } from 'react'
import { Phone, Mail, Users, MapPin, Send, CheckCircle } from 'lucide-react'
import { Link } from 'react-router'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }
  const contacts = [
    {
      name: 'SURAJ',
      phone: '9423076154',
      role: 'Program Coordinator'
    },
    {
      name: 'ANWAY',
      phone: '8275173653',
      role: 'Technical Lead'
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Get in <span className="gradient-text font-['Poppins']">Touch</span>
            </h2>
            <div className="w-16 h-1 sm:w-24 sm:h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-gray-700 max-w-xl sm:max-w-2xl mx-auto px-2">
              Have questions? Our team is here to help you. Reach out to us anytime!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Contact Cards */}
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-[1.02] transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.role}</p>
                  </div>
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl hover:bg-blue-100 transition-colors group"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:rotate-12 transition-transform" />
                  <span className="text-base sm:text-lg font-semibold text-gray-800">{contact.phone}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Organization Info */}
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Tech For Bharat</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4 px-1">
                  An initiative empowering youth with cutting-edge technology skills 
                  and training programs across critical domains.
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full" />
                  <span>Empowering Tech Future</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Location</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4 px-1">
                  <span className="font-semibold">Mumbai, Maharashtra</span><br />
                 
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Send us a <span className="gradient-text">Message</span>
              </h3>
              <p className="text-gray-600 text-sm sm:text-base px-2">Have a question? Fill out the form below and we'll get back to you soon</p>
            </div>

            {isSubmitted ? (
              <div className="max-w-md sm:max-w-2xl mx-auto glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Message Sent!</h3>
                <p className="text-base sm:text-lg text-gray-600 px-2">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md sm:max-w-2xl mx-auto glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
                <div className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm sm:text-base"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm sm:text-base"
                      placeholder="Mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-sm sm:text-base"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 sm:gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span className="text-sm sm:text-base">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm sm:text-base">Send Message</span>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}