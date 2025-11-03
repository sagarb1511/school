

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';
import LanguageDropdown from '../LanguageDropdown';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMenuItems = () => [
    { name: getTranslation('home', language), href: "/" },
    { name: getTranslation('achievements', language), href: "/achievements" },
    {
      name: getTranslation('faculty', language),
      submenu: [
        { name: getTranslation('teachingStaff', language), href: "/faculty" },
        { name: getTranslation('nonTeachingStaff', language), href: "/nonteaching" }
      ]
    },
    {
      name: getTranslation('aboutUs', language),
      submenu: [
        { name: getTranslation('aboutUs', language), href: "/about" },
        { name: getTranslation('visionMission', language), href: "/vision" },
      ]
    },
    { name: getTranslation('academics', language), href: "/academics" },
    { name: getTranslation('admission', language), href: "/admission" },
    { name: getTranslation('gallery', language), href: "/gallery" },
    {
      name: getTranslation('studentLife', language),
      submenu: [
        { name: getTranslation('nss', language), href: "/nss" },
        { name: getTranslation('sports', language), href: "/sports" },
        { name: getTranslation('activities', language), href: "/activities" },
        { name: getTranslation('Student Facilities', language), href: "/Facilities" },
        { name: getTranslation('Approved Place', language), href: "/Approver" }
      ]
    },
    { name: getTranslation('research', language), href: "/publications" },
    { name: getTranslation('contactUs', language), href: "/contact" }
  ];

  const menuItems = getMenuItems();

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (menuName) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menuName ? null : menuName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  };

  const renderSubmenu = (submenu, level = 1) => {
    return (
      <div 
        className={`absolute top-full left-0 bg-[#e0ddd7] shadow-2xl border border-[#cecbc6] rounded-lg py-2 z-50 min-w-56 animate-slideDown ${
          level > 1 ? 'left-full top-0 ml-1' : ''
        }`}
        style={{ minWidth: '220px' }}
      >
        {submenu.map((item, index) => (
          <div key={index} className="relative group">
            {item.submenu ? (
              <>
                <div className="px-4 py-2 text-sm text-[#3c2d2d] hover:bg-gradient-to-r hover:from-[#b29990] hover:to-[#977765] hover:text-[#e0ddd7] cursor-pointer flex justify-between items-center transition-all duration-300 rounded mx-2 font-medium">
                  <span>{item.name}</span>
                  <span className="text-[#832936] transform group-hover:translate-x-1 transition-transform duration-200">▶</span>
                </div>
                <div className="hidden group-hover:block">
                  {renderSubmenu(item.submenu, level + 1)}
                </div>
              </>
            ) : (
              <Link
                to={item.href}
                className="block px-4 py-2 text-sm text-[#3c2d2d] hover:bg-gradient-to-r hover:from-[#b29990] hover:to-[#977765] hover:text-[#e0ddd7] transition-all duration-300 rounded mx-2 font-medium transform hover:scale-105"
                onClick={() => setActiveDropdown(null)}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Header Section - Logo and College Info */}
      <div className="bg-gradient-to-r from-[#f5f5dc] via-[#faf0e6] to-[#f5f5dc] shadow-md">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* Logo Section - Left */}
            <div className="flex items-center">
              <img 
                src={require('../assets/VSMAST.png')} 
                alt="Logo" 
                className="w-12 h-12 lg:w-16 lg:h-16 object-contain drop-shadow-lg"
              />
            </div>

            {/* College Name and Details - Center */}
            <div className="flex-1 text-center mx-8">
              <p className="text-xs lg:text-sm text-black font-bold mb-1">
                RAJARAM SHIKSHAN SANSTHA
              </p>
              <h1 className="text-lg lg:text-xl xl:text-2xl font-bold text-red-800 mb-1 tracking-widest">
                VILASRAO SHINDE MAHAVIDYALAYA
              </h1>
              <p className="text-xs lg:text-sm text-gray-600 font-medium tracking-widest">
                (ARTS, COMMERCE, SCIENCE AND BCA) ASHTA, TAL-WALWA, DIST-SANGLI. PIN-416301
              </p>
            </div>

            {/* Language and Admin Section - Right */}
            <div className="flex items-center space-x-3">
              <div className="relative hidden lg:block">
                <LanguageDropdown />
              </div>
              <div className="relative group hidden lg:block">
                <Link 
                  to="/admin"
                  target="_blank"
                  className="flex items-center bg-[#832936] hover:bg-[#6e1e2a] text-white text-sm px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  <span>{getTranslation('adminLogin', language)}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu Bar */}
      <nav className="bg-[#832936] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center space-x-6 py-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-1.5 text-sm font-semibold text-white hover:text-[#e0ddd7] hover:bg-white/10 rounded-md transition-all duration-300 ${
                    activeDropdown === item.name ? 'bg-white/20 text-[#e0ddd7]' : ''
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <span className={`ml-2 text-xs transition-all duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`}>▼</span>
                  )}
                </Link>
                
                {item.submenu && activeDropdown === item.name && (
                  <div className="animate-fadeIn">
                    {renderSubmenu(item.submenu)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Header */}
          <div className="lg:hidden flex items-center justify-between py-2">
            <div className="flex items-center">
              <img 
                src={require('../assets/VSMAST.png')} 
                alt="Logo" 
                className="w-10 h-10 object-contain mr-3"
              />
              <div className="text-white">
                <h2 className="text-sm font-bold">VSMAST</h2>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <LanguageDropdown />
              </div>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#6e1e2a] border-t border-[#832936] shadow-xl animate-slideDown max-h-screen overflow-y-auto">
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-[#832936]/30 last:border-b-0">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="w-full flex items-center justify-between px-3 py-3 text-left text-white hover:bg-white/10 transition-all duration-300 rounded-lg font-medium"
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeMobileSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {activeMobileSubmenu === item.name && (
                        <div className="pl-4 pb-2 space-y-1 animate-fadeIn">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              onClick={closeMobileMenu}
                              className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg transform hover:translate-x-2"
                            >
                              • {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={closeMobileMenu}
                      className="block px-3 py-3 text-white hover:bg-white/10 transition-all duration-300 rounded-lg font-medium transform hover:translate-x-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes marquee-continuous {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes slideDown {
          0% { 
            opacity: 0; 
            transform: translateY(-10px) scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .animate-marquee-continuous {
          display: inline-block;
          animation: marquee-continuous 50s linear infinite;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        /* Hover effects */
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        /* Responsive Improvements */
        @media (max-width: 1024px) {
          .animate-marquee-continuous {
            animation-duration: 40s;
          }
        }
        
        @media (max-width: 768px) {
          .animate-marquee-continuous {
            animation-duration: 35s;
          }
        }
        
        @media (max-width: 480px) {
          .animate-marquee-continuous {
            animation-duration: 30s;
          }
        }
        
        /* Mobile menu animations */
        @keyframes mobileSlideIn {
          0% { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-mobileSlideIn {
          animation: mobileSlideIn 0.3s ease-out forwards;
        }
        
        /* Touch-friendly hover states for mobile */
        @media (hover: none) {
          .hover\\:scale-105:hover {
            transform: none;
          }
          
          .hover\\:translate-x-2:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;