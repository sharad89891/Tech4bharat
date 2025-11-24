import { useState } from 'react'
import { Link } from 'react-router'
import { User, Mail, Phone, Building, GraduationCap, FileText, IdCard, MessageSquare } from 'lucide-react'
import Navigation from '@/react-app/components/Navigation'
import Footer from '@/react-app/components/Footer'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    otherGender: '',
    mobile: '',
    college: '',
    department: '',
    course: '',
    yearOfStudy: '',
    contribution: '',
    reference: '',
    cv: null as File | null,
    idCard: null as File | null
  })

  const [gender, setGender] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: e.target.files![0]
      }))
    }
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setGender(value)
    setFormData(prev => ({
      ...prev,
      gender: value,
      otherGender: value === 'Other' ? prev.otherGender : ''
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('Registration submitted successfully!')
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 pt-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="gradient-text">DIGITAL AND TECH POLICY WORKSHOP 2025</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
                Comprehending Digital Technology Policy: Frameworks, Challenges, and Applications
              </h2>
              
              <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="font-semibold text-gray-800">Date:</p>
                    <p className="text-gray-700">18th to 23rd December, 2025</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Venue:</p>
                    <p className="text-gray-700">COEP Technological University Pune</p>
                  </div>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-6 mb-8 text-left">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Organised By:</h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>COEP Technological University Pune (COEP)</li>
                  <li>Veermata Jijabai Technological Institute (VJTI), Mumbai</li>
                </ol>
                
                <h3 className="text-xl font-bold mt-4 mb-3 text-gray-800">Academic Partner:</h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Centre for Defence Technology Innovations and strategies (CDTIES), IIT Bombay</li>
                  <li>Observer Research Foundation (ORF)</li>
                </ol>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                  <p className="font-semibold text-gray-800">Expected Students:</p>
                  <p className="text-gray-700">Students Enrolled in Premier institutions in Technology, Law and Management field (Desirable)</p>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-purple-200">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-3">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Id */}
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-3">
                      Email Id <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-lg font-medium text-gray-800 mb-3">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="Female"
                          checked={gender === 'Female'}
                          onChange={handleGenderChange}
                          className="h-5 w-5 text-purple-600 focus:ring-purple-500"
                        />
                        <label htmlFor="female" className="ml-2 text-gray-700">Female</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="Male"
                          checked={gender === 'Male'}
                          onChange={handleGenderChange}
                          className="h-5 w-5 text-purple-600 focus:ring-purple-500"
                        />
                        <label htmlFor="male" className="ml-2 text-gray-700">Male</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          value="Other"
                          checked={gender === 'Other'}
                          onChange={handleGenderChange}
                          className="h-5 w-5 text-purple-600 focus:ring-purple-500"
                        />
                        <label htmlFor="other" className="ml-2 text-gray-700">Other:</label>
                        {gender === 'Other' && (
                          <input
                            type="text"
                            name="otherGender"
                            value={formData.otherGender}
                            onChange={handleChange}
                            className="ml-2 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Please specify"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mobile No (WhatsApp) */}
                  <div>
                    <label htmlFor="mobile" className="block text-lg font-medium text-gray-800 mb-3">
                      Mobile No (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter your WhatsApp number"
                      />
                    </div>
                  </div>

                  {/* College (With City Name) */}
                  <div>
                    <label htmlFor="college" className="block text-lg font-medium text-gray-800 mb-3">
                      College (With City Name) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter your college and city"
                      />
                    </div>
                  </div>

                  {/* Department */}
                  <div>
                    <label htmlFor="department" className="block text-lg font-medium text-gray-800 mb-3">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <GraduationCap className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter your department"
                      />
                    </div>
                  </div>

                  {/* Course */}
                  <div>
                    <label htmlFor="course" className="block text-lg font-medium text-gray-800 mb-3">
                      Course <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <GraduationCap className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter your course"
                      />
                    </div>
                  </div>

                  {/* Year of Study */}
                  <div>
                    <label htmlFor="yearOfStudy" className="block text-lg font-medium text-gray-800 mb-3">
                      Year of Study <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <GraduationCap className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="yearOfStudy"
                        name="yearOfStudy"
                        value={formData.yearOfStudy}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none"
                      >
                        <option value="">Select your year of study</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="5th Year">5th Year</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="PhD">PhD</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* How you would like to contribute to "Viksit Bharat" in technology sector */}
                <div>
                  <label htmlFor="contribution" className="block text-lg font-medium text-gray-800 mb-3">
                    How you would like to contribute to "Viksit Bharat" in technology sector. <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-600 mb-3">Answer in Max 150 Words</p>
                  <div className="relative">
                    <div className="absolute top-4 left-4 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="contribution"
                      name="contribution"
                      value={formData.contribution}
                      onChange={handleChange}
                      required
                      rows={4}
                      maxLength={150}
                      className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Describe how you would like to contribute to Viksit Bharat in the technology sector..."
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {formData.contribution.length}/150 characters
                    </div>
                  </div>
                </div>

                {/* Reference (Name of Faculty/Guide) */}
                <div>
                  <label htmlFor="reference" className="block text-lg font-medium text-gray-800 mb-3">
                    Reference (Name of Faculty/Guide)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="reference"
                      name="reference"
                      value={formData.reference}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter reference name (if any)"
                    />
                  </div>
                </div>

                {/* Upload Your CV */}
                <div>
                  <label className="block text-lg font-medium text-gray-800 mb-3">
                    Upload Your CV <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-600 mb-3">Upload 1 supported file: PDF or document. Max 10 MB.</p>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'cv')}
                      required
                      className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                  </div>
                </div>

                {/* College ID Card (Current Academic Year) */}
                <div>
                  <label className="block text-lg font-medium text-gray-800 mb-3">
                    College ID Card (Current Academic Year) <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-600 mb-3">Upload 1 supported file: PDF, document, or image. Max 10 MB.</p>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <IdCard className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="file"
                      id="idCard"
                      name="idCard"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, 'idCard')}
                      required
                      className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Submit Registration
                  </button>
                  <p className="text-sm text-gray-600 mt-4">
                    By registering, you agree to receive updates about the workshop via email.
                  </p>
                </div>
              </form>
            </div>

            {/* Back to Workshop Link */}
            <div className="text-center mt-12">
              <Link
                to="/workshop"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Workshop Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}