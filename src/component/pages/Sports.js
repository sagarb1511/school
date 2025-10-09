import React from 'react';

import chessImage from '../assets/chess.webp';
import messiImage from '../assets/messi.webp';
import volleyballImage from '../assets/vollyboll.jpg';
import indiaImage from '../assets/india.jpg';

const Sports = () => {
  const winnersData = [
    {
      sport: "Cricket 🏏",
      winner: "Team India",
      image: indiaImage
    },
    {
      sport: "Football ⚽",
      winner: "Messi Team", 
      image: messiImage
    },
    {
      sport: "Volleyball 🏐",
      winner: "Team Tigers",
      image: volleyballImage
    },
    {
      sport: "Badminton 🏸",
      winner: "Rahul Sharma",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
    },
    {
      sport: "Chess ♟️",
      winner: "Sneha Joshi", 
      image: chessImage
    },
    {
      sport: "Athletics 🏃",
      winner: "Priya Singh",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 3D Animated Background with Light Colors */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #f0fff0 40%, #fef7e0 60%, #fdf2f8 80%, #f8fafc 100%)',
        backgroundSize: '400% 400%',
        animation: 'sportsGradient 22s ease infinite'
      }}>
        {/* Floating 3D Sports Elements with Light Colors */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '8%',
          width: '110px',
          height: '110px',
          background: 'linear-gradient(45deg, #dbeafe, #bfdbfe)',
          borderRadius: '50%',
          opacity: 0.4,
          animation: 'sportsFloat 16s ease-in-out infinite, sportsRotate 12s linear infinite',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '90px',
          height: '90px',
          background: 'linear-gradient(45deg, #dcfce7, #bbf7d0)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          opacity: 0.45,
          animation: 'sportsFloat 18s ease-in-out infinite reverse, sportsPulse 8s ease-in-out infinite',
          boxShadow: '0 18px 35px rgba(34, 197, 94, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '70%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, #fef3c7, #fef7e0)',
          borderRadius: '25px',
          opacity: 0.4,
          animation: 'sportsFloat 14s ease-in-out infinite, sportsSpin 10s linear infinite',
          boxShadow: '0 20px 40px rgba(245, 158, 11, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, #fce7f3, #fdf2f8)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          opacity: 0.35,
          animation: 'sportsFloat 17s ease-in-out infinite, sportsWave 9s ease-in-out infinite',
          boxShadow: '0 16px 32px rgba(236, 72, 153, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '40%',
          right: '25%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, #e0e7ff, #eef2ff)',
          borderRadius: '30px',
          opacity: 0.4,
          animation: 'sportsFloat 15s ease-in-out infinite reverse, sportsBounce 7s ease-in-out infinite',
          boxShadow: '0 22px 45px rgba(99, 102, 241, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '75%',
          left: '40%',
          width: '70px',
          height: '70px',
          background: 'linear-gradient(45deg, #f0fdf4, #f7fee7)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          opacity: 0.45,
          animation: 'sportsFloat 13s ease-in-out infinite, sportsScale 11s ease-in-out infinite',
          boxShadow: '0 14px 28px rgba(22, 163, 74, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '45%',
          right: '5%',
          width: '95px',
          height: '95px',
          background: 'linear-gradient(45deg, #fef2e2, #fed7aa)',
          borderRadius: '50%',
          opacity: 0.35,
          animation: 'sportsFloat 19s ease-in-out infinite, sportsTwist 13s ease-in-out infinite',
          boxShadow: '0 18px 35px rgba(251, 146, 60, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '15%',
          width: '85px',
          height: '85px',
          background: 'linear-gradient(45deg, #f0f9ff, #e0f2fe)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          opacity: 0.4,
          animation: 'sportsFloat 12s ease-in-out infinite reverse, sportsDance 10s ease-in-out infinite',
          boxShadow: '0 16px 32px rgba(14, 165, 233, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '35%',
          width: '75px',
          height: '75px',
          background: 'linear-gradient(45deg, #fdf4ff, #fae8ff)',
          borderRadius: '20px',
          opacity: 0.4,
          animation: 'sportsFloat 11s ease-in-out infinite, sportsFlip 8s ease-in-out infinite',
          boxShadow: '0 15px 30px rgba(168, 85, 247, 0.15)'
        }}></div>
      </div>

      <div style={{ 
        padding: '32px 16px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          
          {/* Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '48px' 
          }}>
            <h1 style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '16px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              🏆 Sports Winners
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#4b5563'
            }}>
              Meet our champions
            </p>
          </div>

          {/* Winners Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {winnersData.map((item, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}
              >
                
                {/* Winner Photo */}
                <div style={{
                  height: '256px',
                  backgroundColor: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: '#9ca3af'
                }}>
                  <img 
                    src={item.image} 
                    alt={`${item.winner} - ${item.sport} winner`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '🏆';
                    }}
                  />
                </div>

                {/* Winner Info */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '8px'
                  }}>
                    {item.sport}
                  </h3>
                  <p style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#2563eb'
                  }}>
                    {item.winner}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
     
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes sportsGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes sportsFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -15px) rotate(90deg); }
          50% { transform: translate(-15px, 20px) rotate(180deg); }
          75% { transform: translate(15px, -10px) rotate(270deg); }
        }
        
        @keyframes sportsRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes sportsPulse {
          0%, 100% { transform: scale(1); opacity: 0.45; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
        
        @keyframes sportsSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes sportsWave {
          0%, 100% { transform: translateY(0) scaleX(1); }
          50% { transform: translateY(-18px) scaleX(1.1); }
        }
        
        @keyframes sportsBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-22px); }
        }
        
        @keyframes sportsScale {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.25) rotate(180deg); }
        }
        
        @keyframes sportsTwist {
          0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(45deg); }
          50% { transform: rotateX(180deg) rotateY(90deg); }
          75% { transform: rotateX(270deg) rotateY(135deg); }
        }
        
        @keyframes sportsDance {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(10px) rotate(90deg); }
          50% { transform: translateX(-10px) rotate(180deg); }
          75% { transform: translateX(5px) rotate(270deg); }
        }
        
        @keyframes sportsFlip {
          0%, 100% { transform: rotateY(0deg) translateZ(0); }
          50% { transform: rotateY(180deg) translateZ(18px); }
        }
      `}</style>
    </div>
  );
};

export default Sports;