import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';


const ContactUs = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: getTranslation('emailUs', language),
      details: 'info@college.edu',
      description: getTranslation('emailUsDesc', language)
    },
    {
      icon: '📞',
      title: getTranslation('callUs', language),
      details: '+91 9876543210',
      description: getTranslation('callUsDesc', language)
    },
    {
      icon: '🏢',
      title: getTranslation('visitUs', language),
      details: 'College Road, Education Nagar',
      description: getTranslation('visitUsDesc', language)
    },
    {
      icon: '🕒',
      title: getTranslation('workingHours', language),
      details: 'Monday - Friday',
      description: getTranslation('workingHoursDesc', language)
    }
  ];

  const departments = [
    {
      name: getTranslation('admissionsOffice', language),
      email: 'admissions@college.edu',
      phone: '+91 9876543211'
    },
    {
      name: getTranslation('academicDepartment', language),
      email: 'academics@college.edu',
      phone: '+91 9876543212'
    },
    {
      name: getTranslation('studentSupport', language),
      email: 'support@college.edu',
      phone: '+91 9876543213'
    },
    {
      name: getTranslation('placementCell', language),
      email: 'placement@college.edu',
      phone: '+91 9876543214'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            📞 {getTranslation('contactUsTitle', language)}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getTranslation('getInTouchSubtitle', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{getTranslation('getInTouch', language)}</h2>
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-700 font-medium">{item.details}</p>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">{getTranslation('followUs', language)}</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: '📘', name: 'Facebook', url: '#' },
                    { icon: '📷', name: 'Instagram', url: '#' },
                    { icon: '🐦', name: 'Twitter', url: '#' },
                    { icon: '💼', name: 'LinkedIn', url: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl hover:bg-blue-200 transition-colors"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{getTranslation('departmentContacts', language)}</h2>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <h3 className="font-semibold text-gray-800">{dept.name}</h3>
                    <p className="text-gray-600 text-sm">📧 {dept.email}</p>
                    <p className="text-gray-600 text-sm">📞 {dept.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{getTranslation('sendMessage', language)}</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">{getTranslation('messageSent', language)}</h3>
                  <p className="text-gray-600">{getTranslation('messageSentDesc', language)}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getTranslation('fullName', language)} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder={getTranslation('enterFullName', language)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getTranslation('emailAddress', language)} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder={getTranslation('enterEmail', language)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getTranslation('phoneNumber', language)}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder={getTranslation('enterPhone', language)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getTranslation('subject', language)} *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">{getTranslation('selectSubject', language)}</option>
                        <option value="admission">{getTranslation('admissionInquiry', language)}</option>
                        <option value="academic">{getTranslation('academicQuestion', language)}</option>
                        <option value="support">{getTranslation('technicalSupport', language)}</option>
                        <option value="placement">{getTranslation('placementRelated', language)}</option>
                        <option value="other">{getTranslation('other', language)}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {getTranslation('message', language)} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={getTranslation('tellUsHow', language)}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    {getTranslation('sendMessageBtn', language)}
                  </button>
                </form>
              )}
            </div>

            {/* Map Section */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📍 {getTranslation('findUsHere', language)}</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.123456789!2d74.123456!3d16.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDA3JzI0LjQiTiA3NMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College Location"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">📍 {getTranslation('ourLocation', language)}</h3>
                <p className="text-gray-700 font-medium">WCV5+G74, Ashta-Dudhgaon Rd</p>
                <p className="text-gray-600">Gandhinagar, Ashta, Maharashtra 416301</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="https://www.google.com/maps/search/WCV5%2BG74,+Ashta-Dudhgaon+Rd,+Gandhinagar,+Ashta,+Maharashtra+416301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="mr-2">🗺️</span>
                    {getTranslation('openInGoogleMaps', language)}
                  </a>
                  <a
                    href="https://www.google.com/maps/dir//WCV5%2BG74,+Ashta-Dudhgaon+Rd,+Gandhinagar,+Ashta,+Maharashtra+416301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <span className="mr-2">🧭</span>
                    {getTranslation('getDirections', language)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">❓ {getTranslation('faqTitle', language)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: getTranslation('faqQuestion1', language),
                answer: getTranslation('faqAnswer1', language)
              },
              {
                question: getTranslation('faqQuestion2', language),
                answer: getTranslation('faqAnswer2', language)
              },
              {
                question: getTranslation('faqQuestion3', language),
                answer: getTranslation('faqAnswer3', language)
              },
              {
                question: getTranslation('faqQuestion4', language),
                answer: getTranslation('faqAnswer4', language)
              }
            ].map((faq, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    
    </>
  );
};

export default ContactUs;