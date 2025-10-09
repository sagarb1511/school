import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: "Home",
      href: "/school/",
    },
     {
      name: "Achievements",
      href: "/achivement",
    },
     {
      name: "Faculty",
      submenu: [
            { name: "Teaching Staff", href: "/faculty" },
            { name: "Non-Teaching Staff", href: "/nonteaching" }
          ]
    },
    {
      name: "About Us",
     
      submenu: [
         { name: "About Us", href: "/about" },
        { name: "Vision & Mission", href: "/vision" },
        
        { name: "Organisation", href: "/organisation" },
        
      ]
    },
    {
      name: "Academics",
      href: "/acadmice",
     
       
       
        
      
    },
    {
      name: "Admission",
      href: "/admission",
      
    },
    {
      name: "Gallery",
      href: "/gallery",
      
    },
    {
      name: "Student Life",
      
      submenu: [
        
        { name: "NSS (National Service Scheme)", href: "/nss" },
        { name: "Sports", href: "/sports" },
        // { name: "Cultural Activities", href: "/activitie" }
      ]
    },
    {
      name: "Research",
      href: "/publications",
      
    },
    {
      name: "Contact Us",
      href: "/contact",
      
    }
  ];

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const renderSubmenu = (submenu, level = 1) => {
    return (
      <div 
        className={`absolute top-full left-0 bg-white shadow-2xl border border-gray-100 rounded-2xl py-3 z-50 min-w-56 animate-slideDown ${
          level > 1 ? 'left-full top-0 ml-2' : ''
        }`}
        style={{ minWidth: '220px' }}
      >
        {submenu.map((item, index) => (
          <div key={index} className="relative group">
            {item.submenu ? (
              <>
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-100 hover:text-emerald-700 cursor-pointer flex justify-between items-center transition-all duration-300 rounded-lg mx-2 font-medium">
                  <span>{item.name}</span>
                  <span className="text-emerald-500 transform group-hover:translate-x-1 transition-transform duration-200">▶</span>
                </div>
                <div className="hidden group-hover:block">
                  {renderSubmenu(item.submenu, level + 1)}
                </div>
              </>
            ) : (
              <Link
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-100 hover:text-emerald-700 transition-all duration-300 rounded-lg mx-2 font-medium transform hover:scale-105"
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
    <div>
      {/* Top Section - Organization Name with Animation */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 text-white py-0.5 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-sm md:text-lg font-semibold text-center animate-pulse tracking-wide">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              RAJARAM SHIKSHAN SANSTHA
            </span>
          </h1>
        </div>
      </div>

      {/* Middle Section - Animated Marquee */}
      <div className="bg-gradient-to-r from-blue-100 via-sky-50 to-blue-100 border-y border-blue-300 py-1 shadow-md overflow-hidden">
        <div className="animate-marquee-continuous">
          <span className="text-blue-800 font-semibold text-sm whitespace-nowrap">
            🎓 VILASRAO SHINDE MAHAVIDYALAYA (ARTS COMMERCE AND SCIENCE) ASHTA, TAL-WALWA, DIST-SANGLI PIN-416301 🎓 
          </span>
          
        </div>
      </div>

      {/* Bottom Section - Enhanced Navigation Menu */}
      <nav className="bg-gradient-to-r from-slate-50 via-gray-100 to-slate-50 shadow-xl sticky top-0 z-50 border-b-4 border-gradient-to-r from-emerald-600 to-teal-700 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Enhanced Logo Section */}
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-700 to-teal-800 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 hover:shadow-xl">
                <span className="text-white font-bold text-base animate-bounce">VSM</span>
              </div>
              
            </div>

            {/* Enhanced Navigation Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      activeDropdown === item.name
                        ? 'text-white bg-gradient-to-r from-emerald-600 to-teal-700 shadow-lg scale-105'
                        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 hover:shadow-md'
                    }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <span className={`ml-2 text-xs transition-all duration-300 ${
                        activeDropdown === item.name ? 'rotate-180 text-white' : 'group-hover:text-white'
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

            

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-100 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
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
          animation: marquee-continuous 35s linear infinite;
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
        
        /* Gradient border effect */
        .border-gradient-to-r {
          border-image: linear-gradient(to right, #2563eb, #1e40af) 1;
        }
        
        /* Hover effects */
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Navbar;