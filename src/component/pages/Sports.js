import React, { useState, useEffect } from 'react';
import { database } from '../../config/firebase';
import { ref, get } from 'firebase/database';

import chessImage from '../assets/chess.webp';
import messiImage from '../assets/messi.webp';
import volleyballImage from '../assets/vollyboll.jpg';
import indiaImage from '../assets/india.jpg';

const Sports = () => {
  const [winnersData, setWinnersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSport, setSelectedSport] = useState(null);

  useEffect(() => {
    const fetchSportsData = async () => {
      try {
        const sportsRef = ref(database, 'School/sports');
        const snapshot = await get(sportsRef);
        
        if (snapshot.exists()) {
          const data = snapshot.val();
          // Convert object to array if needed
          const dataArray = Array.isArray(data) ? data : Object.values(data);
          console.log('Fetched sports data:', dataArray);
          console.log('First item structure:', dataArray[0]);
          setWinnersData(dataArray);
        } else {
          console.log('No data found at School/sports');
          setWinnersData([]);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching sports data:', err);
        console.error('Error details:', err.message);
        setError(`Failed to load sports data: ${err.message}`);
        setLoading(false);
      }
    };

    fetchSportsData();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '1.5rem',
        color: '#4b5563',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏆</div>
          <div>Loading sports data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: '#ef4444',
        fontSize: '1.2rem',
        textAlign: 'center',
        padding: '20px',
        background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)'
      }}>
        <div>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚠️</div>
          <div>{error}</div>
        </div>
      </div>
    );
  }

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

      <div className="sports-container" style={{ 
        padding: '32px 16px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          
          {/* Header */}
          <div className="sports-header" style={{ 
            textAlign: 'center', 
            marginBottom: '48px' 
          }}>
            <h1 className="sports-title" style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '16px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              🏆 Sports Winners
            </h1>
            <p className="sports-subtitle" style={{
              fontSize: '1.25rem',
              color: '#4b5563'
            }}>
              Meet our champions
            </p>
          </div>

          {/* Winners Grid */}
          <div className="sports-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {winnersData.length > 0 ? winnersData.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedSport(item)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
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
                    alt={`${item.teamName || item.team || 'Team'} - ${item.sportName || item.sport || 'Sport'}`}
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

                {/* Sport and Team Info */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '8px'
                  }}>
                    {item.sportName || item.sport || item.Sport || 'Sport Name'}
                  </h3>
                  <p style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#2563eb'
                  }}>
                    {item.teamName || item.team || item.Team || 'Team Name'}
                  </p>
                </div>
              </div>
            )) : (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '60px 20px',
                color: '#6b7280',
                fontSize: '1.2rem'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🏆</div>
                <div>No sports data available.</div>
                <div style={{ fontSize: '0.9rem', marginTop: '8px' }}>Please add data to Firebase Realtime Database at School/sports</div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Modal for displaying full details */}
      {selectedSport && (
        <div 
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px',
            backdropFilter: 'blur(5px)'
          }}
          onClick={() => setSelectedSport(null)}
        >
          <div 
            className="modal-content"
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSport(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#ef4444',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#dc2626';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#ef4444';
                e.target.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Image */}
            <div className="modal-image" style={{
              width: '100%',
              height: '350px',
              backgroundColor: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
              overflow: 'hidden'
            }}>
              {selectedSport.image ? (
                <img 
                  src={selectedSport.image} 
                  alt={selectedSport.sportName || selectedSport.sport}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <div style={{ fontSize: '5rem' }}>🏆</div>
              )}
            </div>

            {/* Content */}
            <div className="modal-body" style={{ padding: '32px' }}>
              {/* Sport Name */}
              <h2 className="modal-sport-name" style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '12px'
              }}>
                {selectedSport.sportName || selectedSport.sport || selectedSport.Sport || 'Sport'}
              </h2>

              {/* Team Name */}
              <div className="modal-team-name" style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#2563eb',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '1.3rem' }}>🏆</span>
                {selectedSport.teamName || selectedSport.team || selectedSport.Team || 'Team'}
              </div>

              {/* Description */}
              {(selectedSport.description || selectedSport.Description) && (
                <div style={{
                  marginTop: '24px',
                  padding: '20px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '12px'
                  }}>
                    📝 Description
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#4b5563',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {selectedSport.description || selectedSport.Description}
                  </p>
                </div>
              )}

              
            </div>
          </div>
        </div>
      )}
      
     
      
      {/* CSS Animations and Responsive Styles */}
      <style jsx>{`
        /* Responsive Styles */
        @media (max-width: 768px) {
          .sports-container {
            padding: 20px 12px !important;
          }
          
          .sports-header {
            margin-bottom: 32px !important;
          }
          
          .sports-title {
            font-size: 1.75rem !important;
          }
          
          .sports-subtitle {
            font-size: 1rem !important;
          }
          
          .sports-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .modal-overlay {
            padding: 10px !important;
          }
          
          .modal-content {
            border-radius: 12px !important;
            max-height: 95vh !important;
          }
          
          .modal-image {
            height: 250px !important;
            border-radius: 12px 12px 0 0 !important;
          }
          
          .modal-body {
            padding: 20px !important;
          }
          
          .modal-sport-name {
            font-size: 1.5rem !important;
          }
          
          .modal-team-name {
            font-size: 1.2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .sports-title {
            font-size: 1.5rem !important;
          }
          
          .sports-subtitle {
            font-size: 0.9rem !important;
          }
          
          .sports-grid {
            gap: 16px !important;
          }
          
          .modal-image {
            height: 200px !important;
          }
          
          .modal-body {
            padding: 16px !important;
          }
          
          .modal-sport-name {
            font-size: 1.3rem !important;
          }
          
          .modal-team-name {
            font-size: 1.1rem !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .sports-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
          }
        }
        
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