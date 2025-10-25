import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', formData);
      // Add your login logic here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#775448] via-[#832936] to-[#3c2d2d] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#b29990] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#977765] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#832936] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce"></div>
      </div>

      {/* Floating 3D Shapes */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-[#e0ddd7] rounded-lg transform rotate-45 opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <div className="w-12 h-12 bg-[#cecbc6] rounded-full opacity-20"></div>
      </div>
      <div className="absolute top-1/3 right-20 animate-float-slow">
        <div className="w-20 h-20 bg-[#afb6bc] rounded-lg transform rotate-12 opacity-15"></div>
      </div>

      {/* Main Login Card */}
      <div className="relative w-full max-w-md">
        {/* 3D Card Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#832936] to-[#775448] rounded-3xl transform rotate-6 blur-sm opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#977765] to-[#b29990] rounded-3xl transform -rotate-3 blur-sm opacity-40"></div>
        
        <div className="relative bg-[#e0ddd7] backdrop-blur-lg rounded-3xl shadow-2xl border border-[#cecbc6] overflow-hidden transform transition-all duration-500 hover:scale-105">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#775448] to-[#832936] p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-[#e0ddd7] mb-2 transform hover:scale-110 transition-transform duration-300">
                Welcome Back
              </h1>
              <p className="text-[#cecbc6] text-sm">Sign in to your account</p>
            </div>
            
            {/* Animated Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#b29990] rounded-full opacity-20 animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#977765] rounded-full opacity-20 animate-pulse"></div>
          </div>

          {/* Login Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mobile Number Field */}
              <div className="space-y-2">
                <label htmlFor="mobile" className="block text-sm font-semibold text-[#3c2d2d]">
                  Mobile Number
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#832936] to-[#775448] rounded-xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-20 blur-sm"></div>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="relative w-full px-4 py-3 bg-[#cecbc6] border border-[#b29990] rounded-xl text-[#3c2d2d] placeholder-[#977765] focus:outline-none focus:ring-2 focus:ring-[#832936] focus:border-transparent transition-all duration-300 transform group-hover:scale-105"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#832936]">
                    📱
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-[#3c2d2d]">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#832936] to-[#775448] rounded-xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-20 blur-sm"></div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="relative w-full px-4 py-3 bg-[#cecbc6] border border-[#b29990] rounded-xl text-[#3c2d2d] placeholder-[#977765] focus:outline-none focus:ring-2 focus:ring-[#832936] focus:border-transparent transition-all duration-300 transform group-hover:scale-105"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#832936]">
                    🔒
                  </div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="w-4 h-4 text-[#832936] bg-[#cecbc6] border-[#b29990] rounded focus:ring-[#832936]"
                  />
                  <span className="text-sm text-[#3c2d2d]">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#832936] hover:text-[#775448] font-medium transition-colors duration-300 transform hover:scale-105"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#832936] to-[#775448] text-[#e0ddd7] font-bold rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#977765] to-[#b29990] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#e0ddd7] border-t-transparent rounded-full animate-spin mr-2"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">🚀</span>
                      Sign In
                    </>
                  )}
                </span>
                
                {/* Button shine effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-[#e0ddd7] to-transparent group-hover:animate-shine"></div>
                </div>
              </button>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-sm text-[#3c2d2d]">
                  Don't have an account?{' '}
                  <Link
                    to="/signup"
                    className="text-[#832936] hover:text-[#775448] font-medium transition-colors duration-300 transform hover:scale-105 inline-block"
                  >
                    Sign up now
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Card Footer */}
          <div className="bg-gradient-to-r from-[#cecbc6] to-[#b29990] p-4 text-center">
            <p className="text-xs text-[#3c2d2d] opacity-75">
              Secure login with advanced encryption
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .group-hover\\:animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        
        /* 3D transform on hover */
        .transform-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .hover-3d:hover {
          transform: rotateY(10deg) rotateX(5deg) scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Login;