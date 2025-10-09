import React, { useState } from 'react';


const ContactUs = () => {
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
      title: 'Email Us',
      details: 'info@college.edu',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+91 9876543210',
      description: 'Mon to Fri 9am to 6pm'
    },
    {
      icon: '🏢',
      title: 'Visit Us',
      details: 'College Road, Education Nagar',
      description: 'Mumbai, Maharashtra - 400001'
    },
    {
      icon: '🕒',
      title: 'Working Hours',
      details: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM'
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      email: 'admissions@college.edu',
      phone: '+91 9876543211'
    },
    {
      name: 'Academic Department',
      email: 'academics@college.edu',
      phone: '+91 9876543212'
    },
    {
      name: 'Student Support',
      email: 'support@college.edu',
      phone: '+91 9876543213'
    },
    {
      name: 'Placement Cell',
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
            📞 Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us. We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
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
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Department Contacts</h2>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="academic">Academic Question</option>
                        <option value="support">Technical Support</option>
                        <option value="placement">Placement Related</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map Section */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📍 Find Us Here</h2>
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
                <h3 className="font-semibold text-gray-800 mb-2">📍 Our Location</h3>
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
                    Open in Google Maps
                  </a>
                  <a
                    href="https://www.google.com/maps/dir//WCV5%2BG74,+Ashta-Dudhgaon+Rd,+Gandhinagar,+Ashta,+Maharashtra+416301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <span className="mr-2">🧭</span>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">❓ Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I apply for admission?",
                answer: "You can apply online through our admission portal or visit the admission office."
              },
              {
                question: "What are the office working hours?",
                answer: "Our office is open from 9:00 AM to 6:00 PM, Monday to Friday."
              },
              {
                question: "How can I get my academic transcripts?",
                answer: "Transcripts can be requested from the academic department with proper documentation."
              },
              {
                question: "Is there hostel facility available?",
                answer: "Yes, we provide separate hostel facilities for boys and girls."
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