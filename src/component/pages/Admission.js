import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';
import { ref, onValue } from 'firebase/database';
import { database } from '../../config/firebase';



export default function AdmissionDocuments() {
  const { language } = useLanguage();
  const [feeStructureData, setFeeStructureData] = useState({});
  
  const getTabs = () => [
    { id: 'general', label: getTranslation('admissionProcess', language) },
    { id: 'scholarship', label: getTranslation('scholarships', language) },
    { id: 'fee', label: getTranslation('feesStructure', language) },
    { id: 'form', label: getTranslation('applicationForm', language) },
  ];

  const tabs = getTabs();

  const getLists = () => ({
    general: [
      language === 'mr' ? 'प्रवेश फॉर्म (योग्यरित्या भरलेला)' : 'Admission Form (duly filled)',
      language === 'mr' ? 'पासपोर्ट साइज फोटो (२-४)' : 'Passport-size Photographs (2-4)',
      language === 'mr' ? 'जन्म प्रमाणपत्र (एसएससी प्रमाणपत्र)' : 'Birth Certificate (SSC Certificate)',
      language === 'mr' ? 'मागील शाळा/महाविद्यालय सोडल्याचे प्रमाणपत्र (LC/TC)' : 'Previous School/College Leaving Certificate (LC/TC)',
      language === 'mr' ? 'मागील वर्षाचे गुणपत्रक/रिपोर्ट कार्ड' : "Previous Year's Marksheet/Report Card",
      language === 'mr' ? 'ओळखपत्र (आधार/पासपोर्ट/इतर)' : 'Identity Proof (Aadhar/Passport/Other)',
      language === 'mr' ? 'पत्ता पुरावा (वीज बिल / रेशन कार्ड)' : 'Address Proof (Electricity Bill / Ration Card)',
    ],
    scholarship: [
      `${getTranslation('ebcScholarship', language)} - ${getTranslation('ebcScholarshipDesc', language)}`,
      `${getTranslation('teacherChildrenScholarship', language)} - ${getTranslation('teacherChildrenScholarshipDesc', language)}`,
      `${getTranslation('militaryScholarship', language)} - ${getTranslation('militaryScholarshipDesc', language)}`,
      `${getTranslation('backwardClassScholarship', language)} - ${getTranslation('backwardClassScholarshipDesc', language)} ${getTranslation('freshStudents', language)} | ${getTranslation('marksheetCopy', language)} | ${getTranslation('casteCertificateCopy', language)} | ${getTranslation('incomeCertificateCopy', language)} | ${getTranslation('aadharBankCopy', language)}`,
      `${getTranslation('shahuScholarship', language)} - ${getTranslation('shahuScholarshipDesc', language)} | ${getTranslation('domicileCertificate', language)} | ${getTranslation('previousMarksheet', language)} | ${getTranslation('familyIncomeCertificate', language)} | ${getTranslation('capAllotmentLetter', language)} | ${getTranslation('gapCertificate', language)}`,
      `${getTranslation('nationalMeritScholarship', language)} - ${getTranslation('nationalMeritScholarshipDesc', language)}`,
      `${getTranslation('hindiScholarship', language)} - ${getTranslation('hindiScholarshipDesc', language)}`,
      `${getTranslation('disabilityScholarship', language)} - ${getTranslation('disabilityScholarshipDesc', language)}`,
      `${getTranslation('universityMeritScholarship', language)} - ${getTranslation('universityMeritScholarshipDesc', language)}`,
    ],
    fee: [
      language === 'mr' ? 'फी सवलत अर्ज फॉर्म' : 'Fee Concession Application Form',
      language === 'mr' ? 'पालक/पालकांचे उत्पन्न प्रमाणपत्र' : 'Income Certificate of Parents/Guardian',
      language === 'mr' ? 'जात प्रमाणपत्र (लागू असल्यास)' : 'Caste Certificate (if applicable)',
      language === 'mr' ? 'नवीनतम फी पावती (सवलत नूतनीकरण करत असल्यास)' : 'Latest Fee Receipt (if renewing concession)',
      language === 'mr' ? 'ओळखपत्र आणि पत्ता पुरावा' : 'Identity Proof and Address Proof',
    ],
  });

  const lists = getLists();

  const [active, setActive] = useState('general');
  const [expandedScholarship, setExpandedScholarship] = useState(null);

  // Fetch fee structure data from Firebase
  useEffect(() => {
    const fetchFeeStructureData = () => {
      try {
        const feeRef = ref(database, 'School/feeStructure');
        
        onValue(feeRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setFeeStructureData(data);
          } else {
            setFeeStructureData({});
          }
        }, (error) => {
          console.error('Fee structure fetch error:', error);
        });
      } catch (err) {
        console.error('Error fetching fee structure:', err);
      }
    };

    fetchFeeStructureData();
  }, []);

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
        }}>{getTranslation('admissionTitle', language)} — {getTranslation('documentsRequired', language)}</h1>

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
        {active !== 'form' && active !== 'scholarship' && active !== 'fee' && (
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
              {tabs.find(t => t.id === active).label} :
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

        {/* Fee Structure Section with Courses */}
        {active === 'fee' && (
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
              marginBottom: '20px',
              color: '#111827'
            }}>
              {getTranslation('feesStructure', language)}
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {/* BSC Computer Science */}
              <div style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '16px',
                backgroundColor: 'rgba(249, 250, 251, 0.8)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  🎓 BSC Computer Science
                </h3>
                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BSC Computer Science'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            // Create a new window with custom content
                            const newWindow = window.open('', '_blank');
                            newWindow.document.title = feeData.fileName;
                            newWindow.document.body.style.margin = '0';
                            newWindow.document.body.style.padding = '0';
                            
                            // Create iframe to display PDF
                            const iframe = document.createElement('iframe');
                            iframe.style.width = '100%';
                            iframe.style.height = '100vh';
                            iframe.style.border = 'none';
                            iframe.src = URL.createObjectURL(blob);
                            
                            newWindow.document.body.appendChild(iframe);
                            
                            // Clean up blob URL after a delay
                            setTimeout(() => {
                              URL.revokeObjectURL(iframe.src);
                            }, 1000);
                          })
                          .catch(error => {
                            console.error('View error:', error);
                            alert(language === 'mr' ? 'PDF देखने में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Failed to view PDF. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BSC Computer Science के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BSC Computer Science fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#3b82f6';
                    }}
                  >
                    👁️ {language === 'mr' ? 'पहा' : 'View'}
                  </button>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BSC Computer Science'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            const url = window.URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = feeData.fileName;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(url);
                          })
                          .catch(error => {
                            console.error('Download error:', error);
                            alert(language === 'mr' ? 'डाउनलोड में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Download failed. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BSC Computer Science के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BSC Computer Science fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#10b981',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#059669';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#10b981';
                    }}
                  >
                    📥 {language === 'mr' ? 'डाउनलोड' : 'Download'}
                  </button>
                </div>
              </div>

              {/* BSC General */}
              <div style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '16px',
                backgroundColor: 'rgba(249, 250, 251, 0.8)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  🎓 BSC
                </h3>
                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BSC'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            // Create a new window with custom content
                            const newWindow = window.open('', '_blank');
                            newWindow.document.title = feeData.fileName;
                            newWindow.document.body.style.margin = '0';
                            newWindow.document.body.style.padding = '0';
                            
                            // Create iframe to display PDF
                            const iframe = document.createElement('iframe');
                            iframe.style.width = '100%';
                            iframe.style.height = '100vh';
                            iframe.style.border = 'none';
                            iframe.src = URL.createObjectURL(blob);
                            
                            newWindow.document.body.appendChild(iframe);
                            
                            // Clean up blob URL after a delay
                            setTimeout(() => {
                              URL.revokeObjectURL(iframe.src);
                            }, 1000);
                          })
                          .catch(error => {
                            console.error('View error:', error);
                            alert(language === 'mr' ? 'PDF देखने में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Failed to view PDF. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BSC के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BSC fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#3b82f6';
                    }}
                  >
                    👁️ {language === 'mr' ? 'पहा' : 'View'}
                  </button>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BSC'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            const url = window.URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = feeData.fileName;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(url);
                          })
                          .catch(error => {
                            console.error('Download error:', error);
                            alert(language === 'mr' ? 'डाउनलोड में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Download failed. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BSC के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BSC fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#10b981',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#059669';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#10b981';
                    }}
                  >
                    📥 {language === 'mr' ? 'डाउनलोड' : 'Download'}
                  </button>
                </div>
              </div>

              {/* BA */}
              <div style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '16px',
                backgroundColor: 'rgba(249, 250, 251, 0.8)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  🎓 BA
                </h3>
                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BA'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            // Create a new window with custom content
                            const newWindow = window.open('', '_blank');
                            newWindow.document.title = feeData.fileName;
                            newWindow.document.body.style.margin = '0';
                            newWindow.document.body.style.padding = '0';
                            
                            // Create iframe to display PDF
                            const iframe = document.createElement('iframe');
                            iframe.style.width = '100%';
                            iframe.style.height = '100vh';
                            iframe.style.border = 'none';
                            iframe.src = URL.createObjectURL(blob);
                            
                            newWindow.document.body.appendChild(iframe);
                            
                            // Clean up blob URL after a delay
                            setTimeout(() => {
                              URL.revokeObjectURL(iframe.src);
                            }, 1000);
                          })
                          .catch(error => {
                            console.error('View error:', error);
                            alert(language === 'mr' ? 'PDF देखने में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Failed to view PDF. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BA के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BA fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#3b82f6';
                    }}
                  >
                    👁️ {language === 'mr' ? 'पहा' : 'View'}
                  </button>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BA'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            const url = window.URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = feeData.fileName;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(url);
                          })
                          .catch(error => {
                            console.error('Download error:', error);
                            alert(language === 'mr' ? 'डाउनलोड में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Download failed. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BA के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BA fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#10b981',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#059669';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#10b981';
                    }}
                  >
                    📥 {language === 'mr' ? 'डाउनलोड' : 'Download'}
                  </button>
                </div>
              </div>

              {/* BCom */}
              <div style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '16px',
                backgroundColor: 'rgba(249, 250, 251, 0.8)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  🎓 BCom
                </h3>
                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BCom'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            // Create a new window with custom content
                            const newWindow = window.open('', '_blank');
                            newWindow.document.title = feeData.fileName;
                            newWindow.document.body.style.margin = '0';
                            newWindow.document.body.style.padding = '0';
                            
                            // Create iframe to display PDF
                            const iframe = document.createElement('iframe');
                            iframe.style.width = '100%';
                            iframe.style.height = '100vh';
                            iframe.style.border = 'none';
                            iframe.src = URL.createObjectURL(blob);
                            
                            newWindow.document.body.appendChild(iframe);
                            
                            // Clean up blob URL after a delay
                            setTimeout(() => {
                              URL.revokeObjectURL(iframe.src);
                            }, 1000);
                          })
                          .catch(error => {
                            console.error('View error:', error);
                            alert(language === 'mr' ? 'PDF देखने में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Failed to view PDF. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BCom के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BCom fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#3b82f6';
                    }}
                  >
                    👁️ {language === 'mr' ? 'पहा' : 'View'}
                  </button>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BCom'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            const url = window.URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = feeData.fileName;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(url);
                          })
                          .catch(error => {
                            console.error('Download error:', error);
                            alert(language === 'mr' ? 'डाउनलोड में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Download failed. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BCom के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BCom fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#10b981',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#059669';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#10b981';
                    }}
                  >
                    📥 {language === 'mr' ? 'डाउनलोड' : 'Download'}
                  </button>
                </div>
              </div>

              {/* BCA */}
              <div style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '16px',
                backgroundColor: 'rgba(249, 250, 251, 0.8)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  🎓 BCA
                </h3>
                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BCA'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            // Create a new window with custom content
                            const newWindow = window.open('', '_blank');
                            newWindow.document.title = feeData.fileName;
                            newWindow.document.body.style.margin = '0';
                            newWindow.document.body.style.padding = '0';
                            
                            // Create iframe to display PDF
                            const iframe = document.createElement('iframe');
                            iframe.style.width = '100%';
                            iframe.style.height = '100vh';
                            iframe.style.border = 'none';
                            iframe.src = URL.createObjectURL(blob);
                            
                            newWindow.document.body.appendChild(iframe);
                            
                            // Clean up blob URL after a delay
                            setTimeout(() => {
                              URL.revokeObjectURL(iframe.src);
                            }, 1000);
                          })
                          .catch(error => {
                            console.error('View error:', error);
                            alert(language === 'mr' ? 'PDF देखने में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Failed to view PDF. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BCA के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BCA fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#3b82f6';
                    }}
                  >
                    👁️ {language === 'mr' ? 'पहा' : 'View'}
                  </button>
                  <button 
                    onClick={() => {
                      const feeData = feeStructureData['BCA'];
                      if (feeData && feeData.downloadURL) {
                        fetch(feeData.downloadURL)
                          .then(response => response.blob())
                          .then(blob => {
                            const url = window.URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = feeData.fileName;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(url);
                          })
                          .catch(error => {
                            console.error('Download error:', error);
                            alert(language === 'mr' ? 'डाउनलोड में त्रुटि हुई। कृपया फिर से कोशिश करें।' : 'Download failed. Please try again.');
                          });
                      } else {
                        alert(language === 'mr' ? 'BCA के लिए फी स्ट्रक्चर अभी उपलोड नहीं किया गया है।' : 'BCA fee structure is not uploaded yet.');
                      }
                    }}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#10b981',
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#059669';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#10b981';
                    }}
                  >
                    📥 {language === 'mr' ? 'डाउनलोड' : 'Download'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scholarship Section with Better Formatting */}
        {active === 'scholarship' && (
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
            }}>{getTranslation('scholarships', language)}</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {lists.scholarship.map((item, idx) => {
                if (item.includes(' - ')) {
                  // This is a detailed scholarship
                  const [title, details] = item.split(' - ');
                  const isExpanded = expandedScholarship === idx;
                  
                  return (
                    <div key={idx} style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(249, 250, 251, 0.8)',
                      transition: 'all 0.3s ease'
                    }}>
                      {/* Clickable Header */}
                      <div 
                        onClick={() => setExpandedScholarship(isExpanded ? null : idx)}
                        style={{
                          padding: '16px',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(243, 244, 246, 0.9)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <h3 style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#1f2937',
                          margin: 0
                        }}>📚 {title}</h3>
                        <span style={{
                          fontSize: '1.2rem',
                          color: '#6b7280',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}>▼</span>
                      </div>
                      
                      {/* Expandable Content */}
                      {isExpanded && (
                        <div style={{
                          padding: '0 16px 16px 16px',
                          borderTop: '1px solid #e5e7eb'
                        }}>
                          {/* Check if details contain document points (pipe separated) */}
                          {details.includes(' | ') ? (
                            <>
                              <p style={{
                                fontSize: '14px',
                                color: '#6b7280',
                                lineHeight: '1.6',
                                marginLeft: '16px',
                                marginBottom: '12px',
                                marginTop: '12px'
                              }}>{details.split(' | ')[0]}</p>
                              
                              {/* Document Points */}
                              <div style={{ marginLeft: '16px' }}>
                                <p style={{
                                  fontSize: '14px',
                                  fontWeight: '600',
                                  color: '#374151',
                                  marginBottom: '8px'
                                }}>{getTranslation('requiredDocuments', language)}:</p>
                                <ul style={{
                                  listStyleType: 'disc',
                                  paddingLeft: '20px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '4px'
                                }}>
                                  {details.split(' | ').slice(1).map((point, pointIdx) => (
                                    <li key={pointIdx} style={{
                                      fontSize: '13px',
                                      color: '#6b7280',
                                      lineHeight: '1.5'
                                    }}>{point.trim()}</li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          ) : (
                            <p style={{
                              fontSize: '14px',
                              color: '#6b7280',
                              lineHeight: '1.6',
                              marginLeft: '16px',
                              marginTop: '12px'
                            }}>{details}</p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  // Regular scholarship items - also make them clickable
                  const isExpanded = expandedScholarship === idx;
                  
                  return (
                    <div key={idx} style={{
                      backgroundColor: 'rgba(243, 244, 246, 0.5)',
                      borderRadius: '8px',
                      borderLeft: '4px solid #4f46e5',
                      transition: 'all 0.3s ease'
                    }}>
                      <div 
                        onClick={() => setExpandedScholarship(isExpanded ? null : idx)}
                        style={{
                          padding: '12px 16px',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(229, 231, 235, 0.7)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <p style={{
                          fontSize: '16px',
                          fontWeight: '500',
                          color: '#374151',
                          margin: 0
                        }}>📋 {item}</p>
                        <span style={{
                          fontSize: '1rem',
                          color: '#6b7280',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}>▼</span>
                      </div>
                      
                      {isExpanded && (
                        <div style={{
                          padding: '12px 16px',
                          borderTop: '1px solid #d1d5db',
                          backgroundColor: 'rgba(255, 255, 255, 0.5)'
                        }}>
                          <p style={{
                            fontSize: '14px',
                            color: '#6b7280',
                            lineHeight: '1.6',
                            fontStyle: 'italic'
                          }}>{getTranslation('clickForDetails', language)}</p>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
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
            }}>{getTranslation('applicationForm', language)}</h2>
            
            <p style={{
              fontSize: '16px',
              color: '#374151',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              {language === 'mr' ? 'कृपया खालील बटणावर क्लिक करून अर्ज फॉर्म भरा:' : 'Please click the button below to fill the application form:'}
            </p>
            
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIe1XZmcnQcL1bNoMmLr3smujbii_hy_yP_PK1IXEXs7vz2g/viewform?usp=publish-editor', '_blank')}
              style={{
                padding: '16px 32px',
                backgroundColor: '#4f46e5',
                color: 'white',
                borderRadius: '8px',
                border: 'none',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
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
              📝 {language === 'mr' ? 'अर्ज फॉर्म भरा' : 'Fill Application Form'}
            </button>
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




// import React, { useState, useEffect } from 'react';
// import { useLanguage } from '../../context/LanguageContext';
// import { getTranslation } from '../../translations/translations';
// import { ref, onValue } from 'firebase/database';
// import { database } from '../../config/firebase';
// import { FaEye, FaDownload, FaFilePdf, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

// export default function AdmissionDocuments() {
//   const { language } = useLanguage();
//   const [feeStructureData, setFeeStructureData] = useState({});
//   const [loading, setLoading] = useState({});
  
//   const getTabs = () => [
//     { id: 'general', label: getTranslation('admissionProcess', language) },
//     { id: 'scholarship', label: getTranslation('scholarships', language) },
//     { id: 'fee', label: getTranslation('feesStructure', language) },
//     { id: 'form', label: getTranslation('applicationForm', language) },
//   ];

//   const tabs = getTabs();

//   const getLists = () => ({
//     general: [
//       language === 'mr' ? 'प्रवेश फॉर्म (योग्यरित्या भरलेला)' : 'Admission Form (duly filled)',
//       language === 'mr' ? 'पासपोर्ट साइज फोटो (२-४)' : 'Passport-size Photographs (2-4)',
//       language === 'mr' ? 'जन्म प्रमाणपत्र (एसएससी प्रमाणपत्र)' : 'Birth Certificate (SSC Certificate)',
//       language === 'mr' ? 'मागील शाळा/महाविद्यालय सोडल्याचे प्रमाणपत्र (LC/TC)' : 'Previous School/College Leaving Certificate (LC/TC)',
//       language === 'mr' ? 'मागील वर्षाचे गुणपत्रक/रिपोर्ट कार्ड' : "Previous Year's Marksheet/Report Card",
//       language === 'mr' ? 'ओळखपत्र (आधार/पासपोर्ट/इतर)' : 'Identity Proof (Aadhar/Passport/Other)',
//       language === 'mr' ? 'पत्ता पुरावा (वीज बिल / रेशन कार्ड)' : 'Address Proof (Electricity Bill / Ration Card)',
//     ],
//     scholarship: [
//       `${getTranslation('ebcScholarship', language)} - ${getTranslation('ebcScholarshipDesc', language)}`,
//       `${getTranslation('teacherChildrenScholarship', language)} - ${getTranslation('teacherChildrenScholarshipDesc', language)}`,
//       `${getTranslation('militaryScholarship', language)} - ${getTranslation('militaryScholarshipDesc', language)}`,
//       `${getTranslation('backwardClassScholarship', language)} - ${getTranslation('backwardClassScholarshipDesc', language)} ${getTranslation('freshStudents', language)} | ${getTranslation('marksheetCopy', language)} | ${getTranslation('casteCertificateCopy', language)} | ${getTranslation('incomeCertificateCopy', language)} | ${getTranslation('aadharBankCopy', language)}`,
//       `${getTranslation('shahuScholarship', language)} - ${getTranslation('shahuScholarshipDesc', language)} | ${getTranslation('domicileCertificate', language)} | ${getTranslation('previousMarksheet', language)} | ${getTranslation('familyIncomeCertificate', language)} | ${getTranslation('capAllotmentLetter', language)} | ${getTranslation('gapCertificate', language)}`,
//       `${getTranslation('nationalMeritScholarship', language)} - ${getTranslation('nationalMeritScholarshipDesc', language)}`,
//       `${getTranslation('hindiScholarship', language)} - ${getTranslation('hindiScholarshipDesc', language)}`,
//       `${getTranslation('disabilityScholarship', language)} - ${getTranslation('disabilityScholarshipDesc', language)}`,
//       `${getTranslation('universityMeritScholarship', language)} - ${getTranslation('universityMeritScholarshipDesc', language)}`,
//     ],
//     fee: [
//       language === 'mr' ? 'फी सवलत अर्ज फॉर्म' : 'Fee Concession Application Form',
//       language === 'mr' ? 'पालक/पालकांचे उत्पन्न प्रमाणपत्र' : 'Income Certificate of Parents/Guardian',
//       language === 'mr' ? 'जात प्रमाणपत्र (लागू असल्यास)' : 'Caste Certificate (if applicable)',
//       language === 'mr' ? 'नवीनतम फी पावती (सवलत नूतनीकरण करत असल्यास)' : 'Latest Fee Receipt (if renewing concession)',
//       language === 'mr' ? 'ओळखपत्र आणि पत्ता पुरावा' : 'Identity Proof and Address Proof',
//     ],
//   });

//   const lists = getLists();

//   const [active, setActive] = useState('general');
//   const [expandedScholarship, setExpandedScholarship] = useState(null);

//   // Courses data
//   const courses = [
//     { id: 'BSC Computer Science', name: 'BSc Computer Science', color: '#3B82F6', icon: '💻' },
//     { id: 'BSC', name: 'BSc', color: '#10B981', icon: '🔬' },
//     { id: 'BA', name: 'BA', color: '#8B5CF6', icon: '📚' },
//     { id: 'BCom', name: 'BCom', color: '#F59E0B', icon: '💰' },
//     { id: 'BCA', name: 'BCA', color: '#EF4444', icon: '🖥️' },
//   ];

//   // Fetch fee structure data from Firebase
//   useEffect(() => {
//     const fetchFeeStructureData = () => {
//       try {
//         const feeRef = ref(database, 'School/feeStructure');
        
//         onValue(feeRef, (snapshot) => {
//           const data = snapshot.val();
//           if (data) {
//             setFeeStructureData(data);
//           } else {
//             setFeeStructureData({});
//           }
//         }, (error) => {
//           console.error('Fee structure fetch error:', error);
//         });
//       } catch (err) {
//         console.error('Error fetching fee structure:', err);
//       }
//     };

//     fetchFeeStructureData();
//   }, []);

//   const handleViewPDF = async (courseId) => {
//     const feeData = feeStructureData[courseId];
//     if (!feeData || !feeData.downloadURL) {
//       alert(language === 'mr' 
//         ? `${courseId} के लिए फी स्ट्रक्चर उपलब्ध नहीं है।` 
//         : `${courseId} fee structure is not available.`);
//       return;
//     }

//     setLoading(prev => ({ ...prev, [`${courseId}-view`]: true }));

//     try {
//       window.open(feeData.downloadURL, '_blank');
//     } catch (error) {
//       console.error('View error:', error);
//       alert(language === 'mr' ? 'PDF खोलने में त्रुटि हुई।' : 'Error opening PDF.');
//     } finally {
//       setTimeout(() => {
//         setLoading(prev => ({ ...prev, [`${courseId}-view`]: false }));
//       }, 1000);
//     }
//   };

//   const handleDownloadPDF = async (courseId) => {
//     const feeData = feeStructureData[courseId];
//     if (!feeData || !feeData.downloadURL) {
//       alert(language === 'mr' 
//         ? `${courseId} के लिए फी स्ट्रक्चर उपलब्ध नहीं है।` 
//         : `${courseId} fee structure is not available.`);
//       return;
//     }

//     setLoading(prev => ({ ...prev, [`${courseId}-download`]: true }));

//     try {
//       const response = await fetch(feeData.downloadURL);
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = feeData.fileName || `${courseId}_Fee.pdf`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error('Download error:', error);
//       alert(language === 'mr' ? 'डाउनलोड में त्रुटि हुई।' : 'Download error occurred.');
//     } finally {
//       setTimeout(() => {
//         setLoading(prev => ({ ...prev, [`${courseId}-download`]: false }));
//       }, 1000);
//     }
//   };

//   return (
//     <div style={{ 
//       minHeight: '100vh', 
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* 3D Animated Background */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 0,
//         background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #fef7e0 40%, #f0fff0 60%, #fdf2f8 80%, #f8fafc 100%)',
//         backgroundSize: '400% 400%',
//         animation: 'admissionGradient 25s ease infinite'
//       }}>
//         {/* Floating 3D Elements */}
//         <div style={{
//           position: 'absolute',
//           top: '8%',
//           left: '5%',
//           width: '140px',
//           height: '140px',
//           background: 'linear-gradient(45deg, #dbeafe, #bfdbfe)',
//           borderRadius: '35px',
//           opacity: 0.3,
//           animation: 'admissionFloat 18s ease-in-out infinite, admissionRotate 15s linear infinite',
//           boxShadow: '0 25px 50px rgba(59, 130, 246, 0.15)'
//         }}></div>
        
//         <div style={{
//           position: 'absolute',
//           top: '55%',
//           right: '8%',
//           width: '100px',
//           height: '100px',
//           background: 'linear-gradient(45deg, #dcfce7, #bbf7d0)',
//           borderRadius: '50%',
//           opacity: 0.4,
//           animation: 'admissionFloat 20s ease-in-out infinite reverse, admissionPulse 7s ease-in-out infinite',
//           boxShadow: '0 20px 40px rgba(34, 197, 94, 0.15)'
//         }}></div>
        
//         <div style={{
//           position: 'absolute',
//           bottom: '15%',
//           left: '65%',
//           width: '120px',
//           height: '120px',
//           background: 'linear-gradient(45deg, #fef7e0, #fef3c7)',
//           clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
//           opacity: 0.35,
//           animation: 'admissionFloat 16s ease-in-out infinite, admissionSpin 12s linear infinite',
//           boxShadow: '0 22px 45px rgba(245, 158, 11, 0.15)'
//         }}></div>
        
//         <div style={{
//           position: 'absolute',
//           top: '25%',
//           left: '20%',
//           width: '90px',
//           height: '90px',
//           background: 'linear-gradient(45deg, #fdf2f8, #fce7f3)',
//           borderRadius: '25px',
//           opacity: 0.3,
//           animation: 'admissionFloat 19s ease-in-out infinite, admissionWave 9s ease-in-out infinite',
//           boxShadow: '0 18px 35px rgba(236, 72, 153, 0.15)'
//         }}></div>
        
//         <div style={{
//           position: 'absolute',
//           bottom: '35%',
//           right: '20%',
//           width: '130px',
//           height: '130px',
//           background: 'linear-gradient(45deg, #eef2ff, #e0e7ff)',
//           clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
//           opacity: 0.4,
//           animation: 'admissionFloat 14s ease-in-out infinite reverse, admissionBounce 8s ease-in-out infinite',
//           boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)'
//         }}></div>
        
//         <div style={{
//           position: 'absolute',
//           top: '70%',
//           left: '35%',
//           width: '80px',
//           height: '80px',
//           background: 'linear-gradient(45deg, #f7fee7, #f0fdf4)',
//           borderRadius: '50%',
//           opacity: 0.45,
//           animation: 'admissionFloat 13s ease-in-out infinite, admissionScale 10s ease-in-out infinite',
//           boxShadow: '0 15px 30px rgba(22, 163, 74, 0.15)'
//         }}></div>
        
//         <div style={{
//           position: 'absolute',
//           top: '40%',
//           right: '5%',
//           width: '110px',
//           height: '110px',
//           background: 'linear-gradient(45deg, #fef2e2, #fed7aa)',
//           clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
//           opacity: 0.3,
//           animation: 'admissionFloat 17s ease-in-out infinite, admissionTwist 11s ease-in-out infinite',
//           boxShadow: '0 18px 35px rgba(251, 146, 60, 0.15)'
//         }}></div>
//       </div>

//       <div style={{ 
//         maxWidth: '1200px', 
//         margin: '0 auto', 
//         padding: '40px 24px',
//         position: 'relative',
//         zIndex: 1
//       }}>
//         <h1 style={{
//           fontSize: '2.5rem',
//           fontWeight: 'bold',
//           marginBottom: '16px',
//           color: '#111827',
//           textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
//           textAlign: 'center'
//         }}>{getTranslation('admissionTitle', language)} — {getTranslation('documentsRequired', language)}</h1>

//         <div style={{ 
//           display: 'flex', 
//           gap: '12px', 
//           marginBottom: '32px', 
//           flexWrap: 'wrap',
//           justifyContent: 'center'
//         }}>
//           {tabs.map(t => (
//             <button
//               key={t.id}
//               onClick={() => setActive(t.id)}
//               style={{
//                 padding: '12px 24px',
//                 borderRadius: '12px',
//                 fontWeight: '600',
//                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease',
//                 border: active === t.id ? 'none' : '1px solid #e5e7eb',
//                 backgroundColor: active === t.id ? '#4f46e5' : 'rgba(255, 255, 255, 0.95)',
//                 color: active === t.id ? 'white' : '#374151',
//                 cursor: 'pointer',
//                 backdropFilter: 'blur(10px)',
//                 fontSize: '16px',
//                 minWidth: '160px'
//               }}
//               onMouseEnter={(e) => {
//                 if (active !== t.id) {
//                   e.target.style.transform = 'translateY(-3px)';
//                   e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (active !== t.id) {
//                   e.target.style.transform = 'translateY(0)';
//                   e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
//                 }
//               }}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>

//         {/* Document lists */}
//         {active !== 'form' && active !== 'scholarship' && active !== 'fee' && (
//           <div style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.95)',
//             borderRadius: '20px',
//             boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
//             padding: '32px',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255, 255, 255, 0.3)',
//             transition: 'all 0.4s ease',
//             transform: 'translateY(0)'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-8px)';
//             e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
//           }}>
//             <h2 style={{
//               fontSize: '1.75rem',
//               fontWeight: '700',
//               marginBottom: '24px',
//               color: '#111827',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '12px'
//             }}>
//               <span style={{
//                 padding: '8px 16px',
//                 backgroundColor: '#4f46e5',
//                 color: 'white',
//                 borderRadius: '8px',
//                 fontSize: '1rem'
//               }}>{tabs.find(t => t.id === active).label}</span>
//             </h2>
//             <ul style={{
//               listStyleType: 'none',
//               padding: 0,
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '12px'
//             }}>
//               {lists[active].map((item, idx) => (
//                 <li key={idx} style={{
//                   backgroundColor: 'rgba(249, 250, 251, 0.8)',
//                   padding: '16px 20px',
//                   borderRadius: '12px',
//                   borderLeft: '4px solid #4f46e5',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '16px',
//                   transition: 'all 0.3s ease',
//                   transform: 'translateX(0)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateX(8px)';
//                   e.currentTarget.style.backgroundColor = 'rgba(243, 244, 246, 0.9)';
//                   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateX(0)';
//                   e.currentTarget.style.backgroundColor = 'rgba(249, 250, 251, 0.8)';
//                   e.currentTarget.style.boxShadow = 'none';
//                 }}>
//                   <span style={{
//                     backgroundColor: '#4f46e5',
//                     color: 'white',
//                     width: '28px',
//                     height: '28px',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: '600',
//                     fontSize: '14px'
//                   }}>{idx + 1}</span>
//                   <span style={{
//                     color: '#374151',
//                     fontSize: '16px',
//                     lineHeight: '1.6',
//                     flex: 1
//                   }}>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* NEW FEE STRUCTURE DESIGN - Icon Based */}
//         {active === 'fee' && (
//           <div style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.95)',
//             borderRadius: '20px',
//             boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
//             padding: '32px',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255, 255, 255, 0.3)',
//             transition: 'all 0.4s ease',
//             overflow: 'hidden'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'translateY(-5px)';
//             e.currentTarget.style.boxShadow = '0 30px 70px rgba(0, 0, 0, 0.2)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
//           }}>
//             {/* Header */}
//             <div style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '32px',
//               flexWrap: 'wrap',
//               gap: '16px'
//             }}>
//               <div>
//                 <h2 style={{
//                   fontSize: '1.75rem',
//                   fontWeight: '700',
//                   marginBottom: '8px',
//                   color: '#111827',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '12px'
//                 }}>
//                   <span style={{
//                     padding: '8px 16px',
//                     background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
//                     color: 'white',
//                     borderRadius: '8px',
//                     fontSize: '1rem'
//                   }}>{getTranslation('feesStructure', language)}</span>
//                 </h2>
//                 <p style={{
//                   color: '#6b7280',
//                   fontSize: '14px',
//                   margin: 0
//                 }}>
//                   {language === 'mr' 
//                     ? 'अभ्यासक्रमानुसार फी स्ट्रक्चर पहा आणि डाउनलोड करा' 
//                     : 'View and download fee structure by course'}
//                 </p>
//               </div>
              
//               {/* Stats */}
//               <div style={{
//                 display: 'flex',
//                 gap: '16px',
//                 alignItems: 'center'
//               }}>
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   backgroundColor: 'rgba(239, 246, 255, 0.8)',
//                   padding: '8px 16px',
//                   borderRadius: '8px',
//                   border: '1px solid rgba(59, 130, 246, 0.2)'
//                 }}>
//                   <FaFilePdf style={{ color: '#3B82F6', fontSize: '18px' }} />
//                   <span style={{ fontSize: '14px', fontWeight: '500', color: '#1E40AF' }}>
//                     {courses.length} {language === 'mr' ? 'अभ्यासक्रम' : 'Courses'}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Fee Structure Table with Icons */}
//             <div style={{
//               backgroundColor: 'rgba(249, 250, 251, 0.5)',
//               borderRadius: '16px',
//               overflow: 'hidden',
//               border: '1px solid #e5e7eb'
//             }}>
//               {/* Table Header */}
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: '2fr 1fr 1fr',
//                 gap: '16px',
//                 padding: '20px 24px',
//                 backgroundColor: 'rgba(243, 244, 246, 0.8)',
//                 borderBottom: '2px solid #e5e7eb'
//               }}>
//                 <div style={{ fontSize: '16px', fontWeight: '600', color: '#374151' }}>
//                   {language === 'mr' ? 'अभ्यासक्रम' : 'Course Name'}
//                 </div>
//                 <div style={{ fontSize: '16px', fontWeight: '600', color: '#374151', textAlign: 'center' }}>
//                   {language === 'mr' ? 'पहा' : 'View'}
//                 </div>
//                 <div style={{ fontSize: '16px', fontWeight: '600', color: '#374151', textAlign: 'center' }}>
//                   {language === 'mr' ? 'डाउनलोड' : 'Download'}
//                 </div>
//               </div>

//               {/* Table Rows */}
//               <div style={{ padding: '8px' }}>
//                 {courses.map((course) => {
//                   const feeData = feeStructureData[course.id];
//                   const isAvailable = feeData && feeData.downloadURL;
                  
//                   return (
//                     <div key={course.id} style={{
//                       display: 'grid',
//                       gridTemplateColumns: '2fr 1fr 1fr',
//                       gap: '16px',
//                       padding: '20px 24px',
//                       alignItems: 'center',
//                       backgroundColor: 'white',
//                       borderBottom: '1px solid #f3f4f6',
//                       transition: 'all 0.3s ease',
//                       borderRadius: '8px',
//                       margin: '8px'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = 'rgba(249, 250, 251, 0.8)';
//                       e.currentTarget.style.transform = 'translateY(-2px)';
//                       e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'white';
//                       e.currentTarget.style.transform = 'translateY(0)';
//                       e.currentTarget.style.boxShadow = 'none';
//                     }}>
//                       {/* Course Name with Icon */}
//                       <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
//                         <div style={{
//                           width: '48px',
//                           height: '48px',
//                           borderRadius: '12px',
//                           backgroundColor: `${course.color}15`,
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           fontSize: '20px',
//                           color: course.color,
//                           border: `2px solid ${course.color}30`
//                         }}>
//                           {course.icon}
//                         </div>
//                         <div>
//                           <div style={{
//                             fontSize: '18px',
//                             fontWeight: '600',
//                             color: '#111827',
//                             marginBottom: '4px'
//                           }}>
//                             {course.name}
//                           </div>
//                           <div style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '8px'
//                           }}>
//                             <div style={{
//                               width: '8px',
//                               height: '8px',
//                               borderRadius: '50%',
//                               backgroundColor: isAvailable ? '#10B981' : '#9CA3AF'
//                             }}></div>
//                             <span style={{
//                               fontSize: '14px',
//                               color: isAvailable ? '#059669' : '#6B7280'
//                             }}>
//                               {isAvailable 
//                                 ? (language === 'mr' ? 'उपलब्ध' : 'Available')
//                                 : (language === 'mr' ? 'अपेक्षित' : 'Pending')}
//                             </span>
//                             {feeData && feeData.fileSize && (
//                               <>
//                                 <span style={{ color: '#D1D5DB' }}>•</span>
//                                 <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
//                                   {feeData.fileSize}
//                                 </span>
//                               </>
//                             )}
//                           </div>
//                         </div>
//                       </div>

//                       {/* View Button */}
//                       <div style={{ textAlign: 'center' }}>
//                         <button
//                           onClick={() => handleViewPDF(course.id)}
//                           disabled={!isAvailable || loading[`${course.id}-view`]}
//                           style={{
//                             width: '48px',
//                             height: '48px',
//                             borderRadius: '12px',
//                             border: 'none',
//                             display: 'inline-flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             cursor: isAvailable ? 'pointer' : 'not-allowed',
//                             transition: 'all 0.3s ease',
//                             backgroundColor: isAvailable ? '#3B82F6' : '#F3F4F6',
//                             color: isAvailable ? 'white' : '#9CA3AF'
//                           }}
//                           onMouseEnter={(e) => {
//                             if (isAvailable) {
//                               e.target.style.backgroundColor = '#2563EB';
//                               e.target.style.transform = 'scale(1.1)';
//                             }
//                           }}
//                           onMouseLeave={(e) => {
//                             if (isAvailable) {
//                               e.target.style.backgroundColor = '#3B82F6';
//                               e.target.style.transform = 'scale(1)';
//                             }
//                           }}
//                         >
//                           {loading[`${course.id}-view`] ? (
//                             <div style={{
//                               width: '20px',
//                               height: '20px',
//                               border: '2px solid rgba(255,255,255,0.3)',
//                               borderTopColor: 'white',
//                               borderRadius: '50%',
//                               animation: 'spin 1s linear infinite'
//                             }}></div>
//                           ) : (
//                             <FaEye style={{ fontSize: '20px' }} />
//                           )}
//                         </button>
//                       </div>

//                       {/* Download Button */}
//                       <div style={{ textAlign: 'center' }}>
//                         <button
//                           onClick={() => handleDownloadPDF(course.id)}
//                           disabled={!isAvailable || loading[`${course.id}-download`]}
//                           style={{
//                             width: '48px',
//                             height: '48px',
//                             borderRadius: '12px',
//                             border: 'none',
//                             display: 'inline-flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             cursor: isAvailable ? 'pointer' : 'not-allowed',
//                             transition: 'all 0.3s ease',
//                             backgroundColor: isAvailable ? '#10B981' : '#F3F4F6',
//                             color: isAvailable ? 'white' : '#9CA3AF'
//                           }}
//                           onMouseEnter={(e) => {
//                             if (isAvailable) {
//                               e.target.style.backgroundColor = '#059669';
//                               e.target.style.transform = 'scale(1.1)';
//                             }
//                           }}
//                           onMouseLeave={(e) => {
//                             if (isAvailable) {
//                               e.target.style.backgroundColor = '#10B981';
//                               e.target.style.transform = 'scale(1)';
//                             }
//                           }}
//                         >
//                           {loading[`${course.id}-download`] ? (
//                             <div style={{
//                               width: '20px',
//                               height: '20px',
//                               border: '2px solid rgba(255,255,255,0.3)',
//                               borderTopColor: 'white',
//                               borderRadius: '50%',
//                               animation: 'spin 1s linear infinite'
//                             }}></div>
//                           ) : (
//                             <FaDownload style={{ fontSize: '20px' }} />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Info Section */}
//             <div style={{
//               marginTop: '32px',
//               padding: '24px',
//               backgroundColor: 'rgba(249, 250, 251, 0.8)',
//               borderRadius: '16px',
//               border: '1px solid #e5e7eb'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
//                 <FaInfoCircle style={{ color: '#4F46E5', fontSize: '20px' }} />
//                 <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>
//                   {language === 'mr' ? 'महत्वाची माहिती' : 'Important Information'}
//                 </h3>
//               </div>
//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
//                 <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
//                   <FaFilePdf style={{ color: '#3B82F6', fontSize: '18px', marginTop: '2px' }} />
//                   <div>
//                     <p style={{ fontWeight: '500', color: '#374151', margin: '0 0 4px 0' }}>
//                       {language === 'mr' ? 'फॉरमॅट' : 'Format'}
//                     </p>
//                     <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
//                       {language === 'mr' 
//                         ? 'सर्व फी स्ट्रक्चर PDF फॉरमॅटमध्ये' 
//                         : 'All fee structures in PDF format'}
//                     </p>
//                   </div>
//                 </div>
                
//                 <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
//                   <FaCheckCircle style={{ color: '#10B981', fontSize: '18px', marginTop: '2px' }} />
//                   <div>
//                     <p style={{ fontWeight: '500', color: '#374151', margin: '0 0 4px 0' }}>
//                       {language === 'mr' ? 'अद्ययावत' : 'Updated'}
//                     </p>
//                     <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
//                       {language === 'mr' 
//                         ? 'नियमितपणे अद्ययावत केले जाते' 
//                         : 'Regularly updated information'}
//                     </p>
//                   </div>
//                 </div>
                
//                 <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
//                   <div style={{ 
//                     width: '20px', 
//                     height: '20px', 
//                     borderRadius: '4px', 
//                     backgroundColor: '#F59E0B15',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: '#F59E0B',
//                     fontSize: '12px',
//                     fontWeight: 'bold',
//                     marginTop: '2px'
//                   }}>
//                     i
//                   </div>
//                   <div>
//                     <p style={{ fontWeight: '500', color: '#374151', margin: '0 0 4px 0' }}>
//                       {language === 'mr' ? 'संपर्क' : 'Contact'}
//                     </p>
//                     <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
//                       {language === 'mr' 
//                         ? 'अधिक माहितीसाठी कार्यालयाशी संपर्क करा' 
//                         : 'Contact office for more information'}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Required Documents for Fee Concession */}
//             <div style={{
//               marginTop: '24px',
//               padding: '24px',
//               backgroundColor: 'rgba(254, 243, 199, 0.3)',
//               borderRadius: '16px',
//               border: '1px solid #FBBF24'
//             }}>
//               <h3 style={{
//                 fontSize: '18px',
//                 fontWeight: '600',
//                 color: '#92400E',
//                 marginBottom: '16px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px'
//               }}>
//                 📋 {language === 'mr' ? 'फी सवलतासाठी आवश्यक कागदपत्रे' : 'Documents Required for Fee Concession'}
//               </h3>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//                 gap: '12px'
//               }}>
//                 {lists.fee.map((item, idx) => (
//                   <div key={idx} style={{
//                     backgroundColor: 'white',
//                     padding: '12px 16px',
//                     borderRadius: '8px',
//                     border: '1px solid #FDE68A',
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: '12px',
//                     transition: 'all 0.3s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateY(-2px)';
//                     e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.1)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateY(0)';
//                     e.currentTarget.style.boxShadow = 'none';
//                   }}>
//                     <span style={{
//                       backgroundColor: '#F59E0B',
//                       color: 'white',
//                       width: '24px',
//                       height: '24px',
//                       borderRadius: '6px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       flexShrink: 0
//                     }}>
//                       {idx + 1}
//                     </span>
//                     <span style={{ color: '#92400E', fontSize: '14px' }}>{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Scholarship Section with Better Formatting */}
//         {active === 'scholarship' && (
//           <div style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.95)',
//             borderRadius: '24px',
//             boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
//             padding: '32px',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255, 255, 255, 0.3)',
//             transition: 'all 0.4s ease'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'translateY(-5px)';
//             e.currentTarget.style.boxShadow = '0 30px 70px rgba(0, 0, 0, 0.2)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
//           }}>
//             <h2 style={{
//               fontSize: '1.75rem',
//               fontWeight: '700',
//               marginBottom: '16px',
//               color: '#111827',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '12px'
//             }}>
//               <span style={{
//                 padding: '8px 16px',
//                 background: 'linear-gradient(135deg, #10b981, #059669)',
//                 color: 'white',
//                 borderRadius: '8px',
//                 fontSize: '1rem'
//               }}>{getTranslation('scholarships', language)}</span>
//             </h2>
            
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//               {lists.scholarship.map((item, idx) => {
//                 if (item.includes(' - ')) {
//                   // This is a detailed scholarship
//                   const [title, details] = item.split(' - ');
//                   const isExpanded = expandedScholarship === idx;
                  
//                   return (
//                     <div key={idx} style={{
//                       border: '1px solid #e5e7eb',
//                       borderRadius: '12px',
//                       backgroundColor: 'rgba(249, 250, 251, 0.8)',
//                       transition: 'all 0.3s ease'
//                     }}>
//                       {/* Clickable Header */}
//                       <div 
//                         onClick={() => setExpandedScholarship(isExpanded ? null : idx)}
//                         style={{
//                           padding: '16px',
//                           cursor: 'pointer',
//                           display: 'flex',
//                           justifyContent: 'space-between',
//                           alignItems: 'center'
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.backgroundColor = 'rgba(243, 244, 246, 0.9)';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.backgroundColor = 'transparent';
//                         }}
//                       >
//                         <h3 style={{
//                           fontSize: '1.1rem',
//                           fontWeight: '600',
//                           color: '#1f2937',
//                           margin: 0
//                         }}>📚 {title}</h3>
//                         <span style={{
//                           fontSize: '1.2rem',
//                           color: '#6b7280',
//                           transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
//                           transition: 'transform 0.3s ease'
//                         }}>▼</span>
//                       </div>
                      
//                       {/* Expandable Content */}
//                       {isExpanded && (
//                         <div style={{
//                           padding: '0 16px 16px 16px',
//                           borderTop: '1px solid #e5e7eb'
//                         }}>
//                           {/* Check if details contain document points (pipe separated) */}
//                           {details.includes(' | ') ? (
//                             <>
//                               <p style={{
//                                 fontSize: '14px',
//                                 color: '#6b7280',
//                                 lineHeight: '1.6',
//                                 marginLeft: '16px',
//                                 marginBottom: '12px',
//                                 marginTop: '12px'
//                               }}>{details.split(' | ')[0]}</p>
                              
//                               {/* Document Points */}
//                               <div style={{ marginLeft: '16px' }}>
//                                 <p style={{
//                                   fontSize: '14px',
//                                   fontWeight: '600',
//                                   color: '#374151',
//                                   marginBottom: '8px'
//                                 }}>{getTranslation('requiredDocuments', language)}:</p>
//                                 <ul style={{
//                                   listStyleType: 'disc',
//                                   paddingLeft: '20px',
//                                   display: 'flex',
//                                   flexDirection: 'column',
//                                   gap: '4px'
//                                 }}>
//                                   {details.split(' | ').slice(1).map((point, pointIdx) => (
//                                     <li key={pointIdx} style={{
//                                       fontSize: '13px',
//                                       color: '#6b7280',
//                                       lineHeight: '1.5'
//                                     }}>{point.trim()}</li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             </>
//                           ) : (
//                             <p style={{
//                               fontSize: '14px',
//                               color: '#6b7280',
//                               lineHeight: '1.6',
//                               marginLeft: '16px',
//                               marginTop: '12px'
//                             }}>{details}</p>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 } else {
//                   // Regular scholarship items - also make them clickable
//                   const isExpanded = expandedScholarship === idx;
                  
//                   return (
//                     <div key={idx} style={{
//                       backgroundColor: 'rgba(243, 244, 246, 0.5)',
//                       borderRadius: '8px',
//                       borderLeft: '4px solid #4f46e5',
//                       transition: 'all 0.3s ease'
//                     }}>
//                       <div 
//                         onClick={() => setExpandedScholarship(isExpanded ? null : idx)}
//                         style={{
//                           padding: '12px 16px',
//                           cursor: 'pointer',
//                           display: 'flex',
//                           justifyContent: 'space-between',
//                           alignItems: 'center'
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.backgroundColor = 'rgba(229, 231, 235, 0.7)';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.backgroundColor = 'transparent';
//                         }}
//                       >
//                         <p style={{
//                           fontSize: '16px',
//                           fontWeight: '500',
//                           color: '#374151',
//                           margin: 0
//                         }}>📋 {item}</p>
//                         <span style={{
//                           fontSize: '1rem',
//                           color: '#6b7280',
//                           transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
//                           transition: 'transform 0.3s ease'
//                         }}>▼</span>
//                       </div>
                      
//                       {isExpanded && (
//                         <div style={{
//                           padding: '12px 16px',
//                           borderTop: '1px solid #d1d5db',
//                           backgroundColor: 'rgba(255, 255, 255, 0.5)'
//                         }}>
//                           <p style={{
//                             fontSize: '14px',
//                             color: '#6b7280',
//                             lineHeight: '1.6',
//                             fontStyle: 'italic'
//                           }}>{getTranslation('clickForDetails', language)}</p>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 }
//               })}
//             </div>
//           </div>
//         )}

//         {active === 'form' && (
//           <div style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.95)',
//             borderRadius: '20px',
//             boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
//             padding: '32px',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255, 255, 255, 0.3)',
//             transition: 'all 0.4s ease',
//             textAlign: 'center'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'translateY(-5px)';
//             e.currentTarget.style.boxShadow = '0 30px 70px rgba(0, 0, 0, 0.2)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
//           }}>
//             <div style={{
//               width: '100px',
//               height: '100px',
//               margin: '0 auto 24px',
//               backgroundColor: 'rgba(79, 70, 229, 0.1)',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               border: '2px dashed #4f46e5'
//             }}>
//               <span style={{ fontSize: '48px' }}>📝</span>
//             </div>
            
//             <h2 style={{
//               fontSize: '1.75rem',
//               fontWeight: '700',
//               marginBottom: '16px',
//               color: '#111827'
//             }}>
//               {getTranslation('applicationForm', language)}
//             </h2>
            
//             <p style={{
//               fontSize: '16px',
//               color: '#374151',
//               marginBottom: '24px',
//               lineHeight: '1.6',
//               maxWidth: '600px',
//               marginLeft: 'auto',
//               marginRight: 'auto'
//             }}>
//               {language === 'mr' 
//                 ? 'कृपया खालील बटणावर क्लिक करून ऑनलाइन अर्ज फॉर्म भरा.' 
//                 : 'Please click the button below to fill the online application form.'}
//             </p>
            
//             <button 
//               onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIe1XZmcnQcL1bNoMmLr3smujbii_hy_yP_PK1IXEXs7vz2g/viewform?usp=publish-editor', '_blank')}
//               style={{
//                 padding: '16px 40px',
//                 background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
//                 color: 'white',
//                 borderRadius: '12px',
//                 border: 'none',
//                 fontSize: '18px',
//                 fontWeight: '600',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 boxShadow: '0 8px 24px rgba(79, 70, 229, 0.4)',
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: '12px'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = 'translateY(-4px) scale(1.05)';
//                 e.target.style.boxShadow = '0 16px 40px rgba(79, 70, 229, 0.6)';
//                 e.target.style.background = 'linear-gradient(135deg, #8b5cf6, #4f46e5)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0) scale(1)';
//                 e.target.style.boxShadow = '0 8px 24px rgba(79, 70, 229, 0.4)';
//                 e.target.style.background = 'linear-gradient(135deg, #4f46e5, #8b5cf6)';
//               }}
//             >
//               <span style={{ fontSize: '24px' }}>📝</span>
//               {language === 'mr' ? 'अर्ज फॉर्म भरा' : 'Fill Application Form'}
//             </button>
//           </div>
//         )}
//       </div>
      
//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes admissionGradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         @keyframes admissionFloat {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           25% { transform: translate(25px, -20px) rotate(90deg); }
//           50% { transform: translate(-15px, 25px) rotate(180deg); }
//           75% { transform: translate(20px, -15px) rotate(270deg); }
//         }
        
//         @keyframes admissionRotate {
//           0% { transform: rotate(0deg) scale(1); }
//           50% { transform: rotate(180deg) scale(1.15); }
//           100% { transform: rotate(360deg) scale(1); }
//         }
        
//         @keyframes admissionPulse {
//           0%, 100% { transform: scale(1); opacity: 0.4; }
//           50% { transform: scale(1.25); opacity: 0.7; }
//         }
        
//         @keyframes admissionSpin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
        
//         @keyframes admissionWave {
//           0%, 100% { transform: translateY(0) scaleX(1); }
//           50% { transform: translateY(-20px) scaleX(1.15); }
//         }
        
//         @keyframes admissionBounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-25px); }
//         }
        
//         @keyframes admissionScale {
//           0%, 100% { transform: scale(1) rotate(0deg); }
//           50% { transform: scale(1.35) rotate(180deg); }
//         }
        
//         @keyframes admissionTwist {
//           0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
//           25% { transform: rotateX(90deg) rotateY(45deg); }
//           50% { transform: rotateX(180deg) rotateY(90deg); }
//           75% { transform: rotateX(270deg) rotateY(135deg); }
//         }
        
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// }