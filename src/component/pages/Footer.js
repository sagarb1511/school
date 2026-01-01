import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();

  // Navigation handler with scroll to top for all devices
  const handleNavigation = (path) => {
    // Always scroll to top first for all devices
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Also set scroll position directly for better compatibility
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Navigate immediately after scroll
    navigate(path);
  };
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* College Info Section */}
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="text-[15px] sm:text-[10px] md:text-xs lg:text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap overflow-visible">
                Vilasrao Shinde Mahavidyalaya, Ashta
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ashta, Maharashtra
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Committed to academic excellence and all-round development of students through quality education.
            </p>
            <div className="flex space-x-3 pt-2">
              <div className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-xs font-bold">i</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400 border-b border-blue-400/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
                <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/admission')}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  Admissions
                </button>
              </li>

              <li> <button 
                  onClick={() => handleNavigation('/academics')}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  Academics
                </button></li>

              <li><button 
                  onClick={() => handleNavigation('/activities')}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                  Activities
                </button></li>
            </ul>
          </div>
          
          {/* Departments */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-400 border-b border-purple-400/30 pb-2">
              Departments
            </h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/faculty')} className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group w-full text-left">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-300"></span>
                Faculty
              </button></li>
              <li><button onClick={() => handleNavigation('/nonteaching')} className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group w-full text-left">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-300"></span>
                Non-Teaching Staff
              </button></li>
              <li><button onClick={() => handleNavigation('/nss')} className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group w-full text-left">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-300"></span>
                NSS
              </button></li>
              <li><button onClick={() => handleNavigation('/sports')} className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group w-full text-left">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-300"></span>
                Sports
              </button></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400 border-b border-emerald-400/30 pb-2">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs">📍</span>
                </div>
                <p className="text-slate-300 text-sm">Dudhgoan road, ashta</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs">📞</span>
                </div>
                <p className="text-slate-300 text-sm">(02342) 299433</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs">✉️</span>
                </div>
                <p className="text-slate-300 text-sm">vsmashta2022@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2024 Vilasrao Sinde Mahavidyalaya, Ashta. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-slate-400 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium">
                  Facebook
                </a>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors duration-200 text-sm font-medium">
                  Twitter
                </a>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors duration-200 text-sm font-medium">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
    </footer>
  );
};

export default Footer;
