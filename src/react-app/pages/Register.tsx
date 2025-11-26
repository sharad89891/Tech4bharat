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
      
      <div className="pt-16 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text">DIGITAL AND TECH POLICY WORKSHOP 2025</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 px-2">
              Comprehending Digital Technology Policy: Frameworks, Challenges, and Applications
            </h2>
            
            <div className="max-w-4xl mx-auto glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Date:</p>
                  <p className="text-gray-700 text-sm sm:text-base">18th to 23rd December, 2025</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Venue:</p>
                  <p className="text-gray-700 text-sm sm:text-base">University Campus</p>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Organised By:</h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 text-sm sm:text-base">
                <li>University</li>
                <li>Technical Institute</li>
              </ol>
              
              <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3 text-gray-800">Academic Partner:</h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 text-sm sm:text-base">
                <li>Research Center</li>
                <li>Research Foundation</li>
              </ol>
              
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">Expected Students:</p>
                <p className="text-gray-700 text-xs sm:text-sm">Students Enrolled in Premier institutions in Technology, Law and Management field (Desirable)</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-200">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Id */}
                <div>
                  <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                    Email Id <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
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
                        className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 focus:ring-purple-500"
                      />
                      <label htmlFor="female" className="ml-2 text-gray-700 text-sm sm:text-base">Female</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={handleGenderChange}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 focus:ring-purple-500"
                      />
                      <label htmlFor="male" className="ml-2 text-gray-700 text-sm sm:text-base">Male</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="Other"
                        checked={gender === 'Other'}
                        onChange={handleGenderChange}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 focus:ring-purple-500"
                      />
                      <label htmlFor="other" className="ml-2 text-gray-700 text-sm sm:text-base">Other:</label>
                      {gender === 'Other' && (
                        <input
                          type="text"
                          name="otherGender"
                          value={formData.otherGender}
                          onChange={handleChange}
                          className="ml-2 px-2 py-1 sm:px-3 sm:py-1.5 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                          placeholder="Please specify"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile No (WhatsApp) */}
                <div>
                  <label htmlFor="mobile" className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                    Mobile No (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base"
                      placeholder="Enter your WhatsApp number"
                    />
                  </div>
                </div>

                {/* College (With City Name) */}
                <div>
                  <label htmlFor="college" className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                    College (With City Name) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      required
                      className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base"
                      placeholder="Enter your college and city"
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label htmlFor="department" className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base"
                      placeholder="Enter your department"
                    />
                  </div>
                </div>

                {/* Course */}
                <div>
                  <label htmlFor="course" className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                    Course <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base"
                      placeholder="Enter your course"
                    />
                  </div>
                </div>

                {/* Year of Study */}
                <div>
                  <label htmlFor="yearOfStudy" className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                    Year of Study <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <select
                      id="yearOfStudy"
                      name="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={handleChange}
                      required
                      className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none text-sm sm:text-base"
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

              {/* How you would like to contribute to technological advancement */}
              <div>
                <label htmlFor="contribution" className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                  How you would like to contribute to technological advancement. <span className="text-red-500">*</span>
                </label>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Answer in Max 150 Words</p>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="contribution"
                    name="contribution"
                    value={formData.contribution}
                    onChange={handleChange}
                    required
                    rows={3}
                    maxLength={150}
                    className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base"
                    placeholder="Describe how you would like to contribute to technological advancement..."
                  />
                  <div className="text-right text-xs sm:text-sm text-gray-500 mt-1">
                    {formData.contribution.length}/150 characters
                  </div>
                </div>
              </div>

              {/* Reference (Name of Faculty/Guide) */}
              <div>
                <label htmlFor="reference" className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                  Reference (Name of Faculty/Guide)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="reference"
                    name="reference"
                    value={formData.reference}
                    onChange={handleChange}
                    className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base"
                    placeholder="Enter reference name (if any)"
                  />
                </div>
              </div>

              {/* Upload Your CV */}
              <div>
                <label className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                  Upload Your CV <span className="text-red-500">*</span>
                </label>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Upload 1 supported file: PDF or document. Max 10 MB.</p>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'cv')}
                    required
                    className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 text-sm"
                  />
                </div>
              </div>

              {/* College ID Card (Current Academic Year) */}
              <div>
                <label className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
                  College ID Card (Current Academic Year) <span className="text-red-500">*</span>
                </label>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Upload 1 supported file: PDF, document, or image. Max 10 MB.</p>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IdCard className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="file"
                    id="idCard"
                    name="idCard"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, 'idCard')}
                    required
                    className="block w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-base sm:text-lg shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Submit Registration
                </button>
                <p className="text-xs sm:text-sm text-gray-600 mt-3">
                  By registering, you agree to receive updates about the workshop via email.
                </p>
              </div>
            </form>
          </div>

          {/* Back to Workshop Link */}
          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/workshop"
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Workshop Details
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}