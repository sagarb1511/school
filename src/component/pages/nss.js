import React, { useState, useEffect } from 'react';
import nss1 from '../assets/nss1.jpeg';
import nss2 from '../assets/nss2.jpeg';
import nss3 from '../assets/nss3.jpeg';
import nss4 from '../assets/nss4.jpeg';


const NSS = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: nss1, title: "Community Service", description: "NSS volunteers engaged in community development activities" },
    { image: nss2, title: "Social Awareness", description: "Spreading awareness about social issues and health" },
    { image: nss3, title: "Environmental Care", description: "Tree plantation and environmental conservation drives" },
    { image: nss4, title: "Rural Development", description: "Working with rural communities for sustainable development" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero Section with Half Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] gap-8">
          
          {/* Left Half - Logo Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center space-y-8">
            <div className="relative">
              {/* NSS Logo Container */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white rounded-full shadow-2xl flex items-center justify-center p-8 border-8 border-orange-500 relative overflow-hidden">
                <img 
                  src={nss4} 
                  alt="NSS Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-300 rounded-full animate-pulse delay-1000"></div>
            </div>
            
            {/* Title and Description */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-orange-600 leading-tight">
                NSS Special Camps
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 max-w-md mx-auto leading-relaxed">
                Empowering students through community service and social responsibility
              </p>
              <div className="flex items-center justify-center space-x-2 text-orange-500">
                <span className="w-12 h-0.5 bg-orange-500"></span>
                <span className="text-2xl">★</span>
                <span className="w-12 h-0.5 bg-orange-500"></span>
              </div>
            </div>
          </div>

          {/* Right Half - Image Slider */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Slider Container */}
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 transform translate-x-0' 
                        : index < currentSlide 
                          ? 'opacity-0 transform -translate-x-full'
                          : 'opacity-0 transform translate-x-full'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay with Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-sm opacity-90">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-orange-500 scale-110' 
                        : 'bg-orange-200 hover:bg-orange-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section Below Logo and Slider */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="space-y-12">
            <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Every NSS volunteer is expected to attend at least one 7-day Special Camp during their course of study. 
                These camps are usually organized in villages or rural areas to help students experience community life 
                and contribute to social development.
              </p>
            </section>

            {/* Objectives Section */}
            <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-6 border-l-4 border-orange-500 pl-4">
                Objectives of NSS Camps
              </h2>
              <div className="grid gap-4">
                {[
                  "To develop a sense of social responsibility among students.",
                  "To promote teamwork, leadership, and discipline.",
                  "To help communities in areas such as health, sanitation, education, and environment.",
                  "To create awareness on social issues like women empowerment, literacy, and sustainable living."
                ].map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities Section */}
            <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-8 border-l-4 border-orange-500 pl-4">
                Typical Activities in NSS Camps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Community Development */}
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-orange-500 mb-4">Community Development Work</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Cleaning villages and public places.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Construction/repair of roads, wells, and sanitation facilities.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Plantation drives and water conservation activities.</span>
                    </li>
                  </ul>
                </div>

                {/* Awareness Campaigns */}
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-orange-500 mb-4">Awareness Campaigns</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Health awareness (HIV/AIDS, malaria, nutrition, hygiene).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Swachh Bharat Abhiyan activities.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Awareness on social issues (child marriage, dowry, drug abuse).</span>
                    </li>
                  </ul>
                </div>

                {/* Educational Activities */}
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-orange-500 mb-4">Educational Activities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Adult literacy programs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Workshops for school children.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Skill development and vocational training sessions.</span>
                    </li>
                  </ul>
                </div>

                {/* Cultural & Social Programs */}
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-orange-500 mb-4">Cultural & Social Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Street plays and folk songs on social themes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Sports and cultural exchange with local villagers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Interaction sessions to promote unity and cooperation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-6 border-l-4 border-orange-500 pl-4">
                Benefits for Students
              </h2>
              <div className="grid gap-4">
                {[
                  "Earns an NSS Certificate (valuable for jobs and higher studies).",
                  "Hands-on experience in community service.",
                  "Development of leadership, communication, and problem-solving skills.",
                  "Opportunities to represent at State, National, and International NSS Camps."
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <span className="text-green-500 font-bold mt-1">★</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', marginTop: '40px' }}>
            <p>National Service Scheme - Building Responsible Citizens</p>
          </footer>
        </div>
      </div>
      
    </div>
  );
};

export default NSS;