import React from 'react';


const Vision = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 3D Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 25%, #fef7e0 50%, #f0fff0 75%, #fff5f5 100%)',
        backgroundSize: '400% 400%',
        animation: 'visionGradient 20s ease infinite'
      }}>
        {/* Floating 3D Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '8%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, #bfdbfe, #dbeafe)',
          borderRadius: '30px',
          opacity: 0.4,
          animation: 'visionFloat 15s ease-in-out infinite, visionRotate 12s linear infinite',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '90px',
          height: '90px',
          background: 'linear-gradient(45deg, #bbf7d0, #dcfce7)',
          borderRadius: '50%',
          opacity: 0.5,
          animation: 'visionFloat 18s ease-in-out infinite reverse, visionPulse 6s ease-in-out infinite',
          boxShadow: '0 15px 30px rgba(34, 197, 94, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '70%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, #fef3c7, #fef7e0)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          opacity: 0.4,
          animation: 'visionFloat 14s ease-in-out infinite, visionSpin 10s linear infinite',
          boxShadow: '0 18px 35px rgba(245, 158, 11, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '15%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, #fce7f3, #fdf2f8)',
          borderRadius: '20px',
          opacity: 0.3,
          animation: 'visionFloat 16s ease-in-out infinite, visionWave 8s ease-in-out infinite',
          boxShadow: '0 12px 25px rgba(236, 72, 153, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '40%',
          right: '25%',
          width: '110px',
          height: '110px',
          background: 'linear-gradient(45deg, #e0e7ff, #eef2ff)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          opacity: 0.4,
          animation: 'visionFloat 13s ease-in-out infinite reverse, visionBounce 7s ease-in-out infinite',
          boxShadow: '0 16px 32px rgba(99, 102, 241, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '75%',
          left: '40%',
          width: '70px',
          height: '70px',
          background: 'linear-gradient(45deg, #f0fdf4, #f7fee7)',
          borderRadius: '50%',
          opacity: 0.5,
          animation: 'visionFloat 11s ease-in-out infinite, visionScale 9s ease-in-out infinite',
          boxShadow: '0 10px 20px rgba(22, 163, 74, 0.15)'
        }}></div>
      </div>

      <div style={{ 
        padding: '48px 16px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div style={{ 
          maxWidth: '1024px', 
          margin: '0 auto' 
        }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '16px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              Vision & Mission
            </h1>
            <div style={{
              width: '96px',
              height: '4px',
              backgroundColor: '#3b82f6',
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>

          {/* Vision Section */}
          <div style={{ position: 'relative', marginBottom: '48px' }}>
            <div style={{
              position: 'absolute',
              left: '-16px',
              top: 0,
              width: '8px',
              height: '100%',
              backgroundColor: '#3b82f6',
              borderRadius: '4px'
            }}></div>
            <div style={{
              marginLeft: '32px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              padding: '32px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '8px',
                  marginRight: '16px'
                }}>
                  <span style={{ fontSize: '24px' }}>👁️</span>
                </div>
                <h2 style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: '#111827',
                  margin: 0
                }}>Vision</h2>
              </div>
              <p style={{
                color: '#374151',
                fontSize: '18px',
                lineHeight: '1.7',
                margin: 0
              }}>
                We Strive to make the Institute as a dynamic Center with quality education and excellence in academic development of students
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div style={{ position: 'relative', marginBottom: '48px' }}>
            <div style={{
              position: 'absolute',
              left: '-16px',
              top: 0,
              width: '8px',
              height: '100%',
              backgroundColor: '#10b981',
              borderRadius: '4px'
            }}></div>
            <div style={{
              marginLeft: '32px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              padding: '32px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '8px',
                  marginRight: '16px'
                }}>
                  <span style={{ fontSize: '24px' }}>🎯</span>
                </div>
                <h2 style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: '#111827',
                  margin: 0
                }}>Mission</h2>
              </div>
              <p style={{
                color: '#374151',
                fontSize: '18px',
                lineHeight: '1.7',
                margin: 0
              }}>
                We the founder member of this institution have decided to work on expansion of smart education, that brings about moral, Ethical and Physical growth of society and make them up to the sustainable mark with advanced technology
              </p>
            </div>
          </div>

          {/* Goals Section */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '-16px',
              top: 0,
              width: '8px',
              height: '100%',
              backgroundColor: '#f59e0b',
              borderRadius: '4px'
            }}></div>
            <div style={{
              marginLeft: '32px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              padding: '32px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
                <div style={{
                  backgroundColor: '#f59e0b',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '8px',
                  marginRight: '16px'
                }}>
                  <span style={{ fontSize: '24px' }}>⭐</span>
                </div>
                <h2 style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: '#111827',
                  margin: 0
                }}>Our Goals</h2>
              </div>
              <div style={{ display: 'grid', gap: '24px' }}>
                {[
                  "Promote quality education in Economically, Socially and educationally weaker section of students",
                  "To Create social, ecological and Environmental awareness by smart education among students",
                  "To create awareness among the student without discrimination with caste, religion and gender",
                  "To make the achievement of students towards good citizens with quality education",
                  "To Implementation of national and secular values among the students by quality education"
                ].map((goal, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{
                      backgroundColor: '#f3f4f6',
                      borderRadius: '8px',
                      padding: '16px',
                      marginRight: '16px',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#fef3c7';
                      e.target.querySelector('span').style.color = '#b45309';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f3f4f6';
                      e.target.querySelector('span').style.color = '#374151';
                    }}>
                      <span style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#374151',
                        transition: 'color 0.2s ease'
                      }}>
                        {index + 1}
                      </span>
                    </div>
                    <p style={{
                      color: '#374151',
                      fontSize: '18px',
                      lineHeight: '1.7',
                      paddingTop: '12px',
                      margin: 0,
                      transition: 'color 0.2s ease'
                    }}>
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes visionGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes visionFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -15px) rotate(90deg); }
          50% { transform: translate(-10px, 20px) rotate(180deg); }
          75% { transform: translate(15px, -10px) rotate(270deg); }
        }
        
        @keyframes visionRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes visionPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        
        @keyframes visionSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes visionWave {
          0%, 100% { transform: translateY(0) scaleX(1); }
          50% { transform: translateY(-15px) scaleX(1.1); }
        }
        
        @keyframes visionBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes visionScale {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default Vision;