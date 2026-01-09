import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation dialog
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    
    if (confirmLogout) {
      // Clear any authentication data if needed
      // localStorage.removeItem('authToken'); // Uncomment if you use tokens
      
      // Navigate to home page
      navigate('/');
    }
  };
  return (
    <div className="w-64 bg-gradient-to-b from-blue-900 to-purple-900 text-white h-screen fixed left-0 top-0 shadow-xl overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-700">
        <h2 className="text-2xl font-bold text-white text-center">
          School Portal
        </h2>
        <p className="text-blue-200 text-sm text-center mt-2">
          Management System
        </p>
      </div>


      

      {/* Navigation Menu */}
      <nav className="p-4 pb-24">
        <ul className="space-y-2">

<li>
            <NavLink
              to="/dashboard1"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-lg transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Dashboard</span>
              {({ isActive }) => isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-900 rounded-full"></div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/fee-structure"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-lg transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
              <span className="font-medium">Fee Structure</span>
              {({ isActive }) => isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-900 rounded-full"></div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Gallery1"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-lg transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Gallery</span>
              {({ isActive }) => isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-900 rounded-full"></div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Activity"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-lg transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Activities</span>
              {({ isActive }) => isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-900 rounded-full"></div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/teacher"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-lg transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">Teacher</span>
              {({ isActive }) => isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-900 rounded-full"></div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/AchievementForm"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-lg transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Achievement</span>
              {({ isActive }) => isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-900 rounded-full"></div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Sports1"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-lg transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Sports</span>
              {({ isActive }) => isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-900 rounded-full"></div>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Activities1"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-lg transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Activities</span>
              {({ isActive }) => isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-900 rounded-full"></div>
              )}
            </NavLink>
          </li>

            <li>
            <NavLink
              to="/Research"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-blue-900 shadow-lg transform scale-105'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Research</span>
              {({ isActive }) => isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-900 rounded-full"></div>
              )}
            </NavLink>
          </li>
          
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="font-semibold">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;