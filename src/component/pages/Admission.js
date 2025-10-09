import React, { useState } from 'react';


// AdmissionDocuments.jsx
// Single-file React component showing:
// - General Admission Documents
// - Scholarship Documents
// - Fee Concession Documents
// - Admission Form
// Uses TailwindCSS for styling.

export default function AdmissionDocuments() {
  const tabs = [
    { id: 'general', label: 'General Admission' },
    { id: 'scholarship', label: 'Scholarship' },
    { id: 'fee', label: 'Fee Concession' },
    { id: 'form', label: 'Admission Form' },
  ];

  const lists = {
    general: [
      'Admission Form (duly filled)',
      'Passport-size Photographs (2-4)',
      'Birth Certificate (age proof)',
      'Previous School/College Leaving Certificate (LC/TC)',
      "Previous Year's Marksheet/Report Card",
      'Identity Proof (Aadhar/Passport/Other)',
      'Address Proof (Electricity Bill / Ration Card)',
    ],
    scholarship: [
      'Scholarship Application Form (duly filled)',
      'Recent Passport-size Photographs',
      '10th & 12th Marksheets (if applicable)',
      'Caste Certificate (if applicable)',
      "Income Certificate of Parents/Guardian",
      'Bank Account Details / Passbook Copy',
    ],
    fee: [
      'Fee Concession Application Form',
      'Income Certificate of Parents/Guardian',
      'Caste Certificate (if applicable)',
      'Latest Fee Receipt (if renewing concession)',
      'Identity Proof and Address Proof',
    ],
  };

  const [active, setActive] = useState('general');

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
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #fef7e0 40%, #f0fff0 60%, #fdf2f8 80%, #f8fafc 100%)',
        backgroundSize: '400% 400%',
        animation: 'admissionGradient 25s ease infinite'
      }}>
        {/* Floating 3D Elements */}
        <div style={{
          position: 'absolute',
          top: '8%',
          left: '5%',
          width: '140px',
          height: '140px',
          background: 'linear-gradient(45deg, #dbeafe, #bfdbfe)',
          borderRadius: '35px',
          opacity: 0.3,
          animation: 'admissionFloat 18s ease-in-out infinite, admissionRotate 15s linear infinite',
          boxShadow: '0 25px 50px rgba(59, 130, 246, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '55%',
          right: '8%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, #dcfce7, #bbf7d0)',
          borderRadius: '50%',
          opacity: 0.4,
          animation: 'admissionFloat 20s ease-in-out infinite reverse, admissionPulse 7s ease-in-out infinite',
          boxShadow: '0 20px 40px rgba(34, 197, 94, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '65%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, #fef7e0, #fef3c7)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          opacity: 0.35,
          animation: 'admissionFloat 16s ease-in-out infinite, admissionSpin 12s linear infinite',
          boxShadow: '0 22px 45px rgba(245, 158, 11, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '20%',
          width: '90px',
          height: '90px',
          background: 'linear-gradient(45deg, #fdf2f8, #fce7f3)',
          borderRadius: '25px',
          opacity: 0.3,
          animation: 'admissionFloat 19s ease-in-out infinite, admissionWave 9s ease-in-out infinite',
          boxShadow: '0 18px 35px rgba(236, 72, 153, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '35%',
          right: '20%',
          width: '130px',
          height: '130px',
          background: 'linear-gradient(45deg, #eef2ff, #e0e7ff)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          opacity: 0.4,
          animation: 'admissionFloat 14s ease-in-out infinite reverse, admissionBounce 8s ease-in-out infinite',
          boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '70%',
          left: '35%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, #f7fee7, #f0fdf4)',
          borderRadius: '50%',
          opacity: 0.45,
          animation: 'admissionFloat 13s ease-in-out infinite, admissionScale 10s ease-in-out infinite',
          boxShadow: '0 15px 30px rgba(22, 163, 74, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '5%',
          width: '110px',
          height: '110px',
          background: 'linear-gradient(45deg, #fef2e2, #fed7aa)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          opacity: 0.3,
          animation: 'admissionFloat 17s ease-in-out infinite, admissionTwist 11s ease-in-out infinite',
          boxShadow: '0 18px 35px rgba(251, 146, 60, 0.15)'
        }}></div>
      </div>

      <div style={{ 
        maxWidth: '1024px', 
        margin: '0 auto', 
        padding: '40px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#111827',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>Admission — Required Documents</h1>

        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          marginBottom: '24px', 
          flexWrap: 'wrap' 
        }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '16px',
                fontWeight: '500',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: active === t.id ? 'none' : '1px solid #e5e7eb',
                backgroundColor: active === t.id ? '#4f46e5' : 'rgba(255, 255, 255, 0.9)',
                color: active === t.id ? 'white' : '#374151',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (active !== t.id) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== t.id) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Document lists */}
        {active !== 'form' && (
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#111827'
            }}>
              {tabs.find(t => t.id === active).label}
            </h2>
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {lists[active].map((item, idx) => (
                <li key={idx} style={{
                  color: '#374151',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {active === 'form' && (
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#111827'
            }}>Admission Form</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <input 
                  type="text" 
                  style={{
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Enter your full name"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4f46e5';
                    e.target.style.boxShadow = '0 0 0 3px rgba(79, 70, 229, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '4px',
                  color: '#374151'
                }}>Date of Birth</label>
                <input 
                  type="date" 
                  style={{
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4f46e5';
                    e.target.style.boxShadow = '0 0 0 3px rgba(79, 70, 229, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '4px',
                  color: '#374151'
                }}>Email</label>
                <input 
                  type="email" 
                  style={{
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Enter your email"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4f46e5';
                    e.target.style.boxShadow = '0 0 0 3px rgba(79, 70, 229, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '4px',
                  color: '#374151'
                }}>Phone Number</label>
                <input 
                  type="tel" 
                  style={{
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Enter your phone number"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4f46e5';
                    e.target.style.boxShadow = '0 0 0 3px rgba(79, 70, 229, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '4px',
                  color: '#374151'
                }}>Address</label>
                <textarea 
                  style={{
                    width: '100%',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '16px',
                    minHeight: '80px',
                    resize: 'vertical',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Enter your address"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4f46e5';
                    e.target.style.boxShadow = '0 0 0 3px rgba(79, 70, 229, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                ></textarea>
              </div>
              <button 
                type="submit" 
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#4338ca';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(79, 70, 229, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#4f46e5';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.3)';
                }}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      
      {/* Footer with proper z-index */}
     
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes admissionGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes admissionFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(25px, -20px) rotate(90deg); }
          50% { transform: translate(-15px, 25px) rotate(180deg); }
          75% { transform: translate(20px, -15px) rotate(270deg); }
        }
        
        @keyframes admissionRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes admissionPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.25); opacity: 0.7; }
        }
        
        @keyframes admissionSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes admissionWave {
          0%, 100% { transform: translateY(0) scaleX(1); }
          50% { transform: translateY(-20px) scaleX(1.15); }
        }
        
        @keyframes admissionBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes admissionScale {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.35) rotate(180deg); }
        }
        
        @keyframes admissionTwist {
          0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(45deg); }
          50% { transform: rotateX(180deg) rotateY(90deg); }
          75% { transform: rotateX(270deg) rotateY(135deg); }
        }
      `}</style>
    </div>
  );
}
