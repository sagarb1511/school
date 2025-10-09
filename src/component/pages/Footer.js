import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* College Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Vilasrao Sinde Mahavidyalaya
                </h3>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Asta, Maharashtra
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
              <li><a href="/school/about" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                About Us
              </a></li>
              <li><a href="/school/admission" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                Admissions
              </a></li>
              <li><a href="/school/academic" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                Academics
              </a></li>
              <li><a href="/school/activities" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                Activities
              </a></li>
            </ul>
          </div>
          
          {/* Departments */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-400 border-b border-purple-400/30 pb-2">
              Departments
            </h4>
            <ul className="space-y-2">
              <li><a href="/school/faculty" className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-300"></span>
                Faculty
              </a></li>
              <li><a href="/school/nonteaching" className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-300"></span>
                Non-Teaching Staff
              </a></li>
              <li><a href="/school/nss" className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-300"></span>
                NSS
              </a></li>
              <li><a href="/school/sports" className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-300"></span>
                Sports
              </a></li>
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
                <p className="text-slate-300 text-sm">Asta, Maharashtra, India</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs">📞</span>
                </div>
                <p className="text-slate-300 text-sm">+91-XXXXXXXXXX</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs">✉️</span>
                </div>
                <p className="text-slate-300 text-sm">info@vsmcollege.edu.in</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2024 Vilasrao Sinde Mahavidyalaya, Asta. All rights reserved.
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
