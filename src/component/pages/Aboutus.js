import React from 'react';
import vilasraoImage from '../assets/17vilasrao-shinde_201906253646.jpg';
import coFounderImage from '../assets/vaibhav.JPG';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';


const Aboutus = () => {
  const { language } = useLanguage();
  
  return (
    <div className="about-us" style={{
      minHeight: '100vh'
    }}>
      <div style={{
        padding: '40px 0'
      }}>
        <div className="about-container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
        <h1 className="main-title" style={{
          textAlign: 'center',
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '40px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          fontFamily: 'Arial, sans-serif'
        }}>{getTranslation('aboutUsTitle', language)}</h1>
        
        {/* Leadership Section - Founder and Co-Founder Side by Side */}
        <div className="leadership-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Founder Image Card */}
          <div className="founder-card" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(30, 64, 175, 0.15)',
            padding: '30px',
            border: '2px solid #e5e7eb',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            <img 
              src={vilasraoImage} 
              alt="स्व. विलासराव शिंदे साहेब" 
              className="founder-image"
              style={{
                width: '220px',
                height: '270px',
                objectFit: 'cover',
                borderRadius: '15px',
                border: '4px solid #1e40af',
                boxShadow: '0 8px 20px rgba(30, 64, 175, 0.3)',
                transition: 'transform 0.3s ease',
                marginBottom: '25px'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            
            <h3 style={{
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#dc2626',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              {getTranslation('founder', language)}
            </h3>
            
            <h2 className="founder-name" style={{ 
              color: '#1e40af', 
              fontSize: '24px', 
              marginBottom: '20px',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
             {language === 'mr' ? 'माजी आमदार तथा आमदार परिषद सदस्य (एम.एल.सी.) स्वर्गीय विलासराव शिंदे (साहेब)' : (
               <>
                 Late Hon. Vilasrao Shinde(Saheb) <span style={{ whiteSpace: 'nowrap' }}>Ex. MLA & MLC</span>
               </>
             )}
            </h2>
            
            <div style={{ 
              color: '#1f2937', 
              background: 'linear-gradient(45deg, #dbeafe, #bfdbfe)', 
              padding: '12px 20px', 
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid #3b82f6',
              marginTop: '10px'
            }}>
              {getTranslation('establishmentDate', language)}
            </div>
          </div>

          {/* Co-Founder Image Card */}
          <div className="cofounder-card" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(5, 150, 105, 0.15)',
            padding: '30px',
            border: '2px solid #e5e7eb',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            <img 
              src={coFounderImage} 
              alt="श्री वैभव विलासराव शिंदे" 
              className="cofounder-image"
              style={{
                width: '220px',
                height: '270px',
                objectFit: 'cover',
                borderRadius: '15px',
                border: '4px solid #059669',
                boxShadow: '0 8px 20px rgba(5, 150, 105, 0.3)',
                transition: 'transform 0.3s ease',
                marginBottom: '25px'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            
            <h3 style={{
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#dc2626',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              {getTranslation('coFounderChairman', language)}
            </h3>
            
            <h2 className="cofounder-name" style={{ 
              color: '#059669', 
              fontSize: '24px', 
              marginBottom: '20px',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              {language === 'mr' ? 'श्री वैभव विलासराव शिंदे (दादा)' : 'Shri Vaibhav Vilasrao Shinde (Dada)'}
            </h2>
            
            <div style={{ 
              color: '#1f2937', 
              background: 'linear-gradient(45deg, #d1fae5, #a7f3d0)', 
              padding: '12px 20px', 
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid #10b981',
              marginTop: '10px'
            }}>
              {getTranslation('chairmanTitle', language)}
            </div>
          </div>
        </div>
        
        {/* Key Features Section */}
        
        
        {/* Heritage Section */}
        <section style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          padding: '30px',
          marginBottom: '30px',
          transition: 'transform 0.3s ease',
          border: '1px solid #e5e7eb'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
          <h2 className="section-title" style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '20px',
            borderBottom: '3px solid #3b82f6',
            paddingBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {getTranslation('ourHeritage', language)}
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify'
          }}>
            {getTranslation('heritageText', language)}
          </p>
        </section>

        {/* Founding Section */}
        <section style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          padding: '30px',
          marginBottom: '30px',
          transition: 'transform 0.3s ease',
          border: '1px solid #e5e7eb'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
          <h2 className="section-title" style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#dc2626',
            marginBottom: '20px',
            borderBottom: '3px solid #ef4444',
            paddingBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {getTranslation('foundingTitle', language)}
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify'
          }}>
            {getTranslation('foundingText', language)}
          </p>
        </section>

        {/* Educational Institutions Section */}
        <section style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          padding: '30px',
          marginBottom: '30px',
          transition: 'transform 0.3s ease',
          border: '1px solid #e5e7eb'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
          <h2 className="section-title" style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#059669',
            marginBottom: '20px',
            borderBottom: '3px solid #10b981',
            paddingBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {getTranslation('currentInstitutionsTitle', language)}
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify'
          }}>
            {getTranslation('currentInstitutionsText', language)}
          </p>
        </section>

        {/* Vision Section */}
        <section style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          padding: '30px',
          marginBottom: '30px',
          transition: 'transform 0.3s ease',
          border: '1px solid #e5e7eb'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
          <h2 className="section-title" style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#7c3aed',
            marginBottom: '20px',
            borderBottom: '3px solid #8b5cf6',
            paddingBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {getTranslation('visionLeadershipTitle', language)}
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify'
          }}>
            {getTranslation('visionLeadershipText', language)}
          </p>
        </section>

        {/* College Section */}
        <section style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(30, 64, 175, 0.3)',
          padding: '40px',
          marginBottom: '30px',
          transition: 'transform 0.3s ease',
          color: 'white',
          position: 'relative'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
          

          <h2 className="section-title" style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '25px',
            borderBottom: '3px solid rgba(255,255,255,0.3)',
            paddingBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            paddingRight: '250px' // Add space for the principal card
          }}>
            {getTranslation('collegeTitle', language)}
          </h2>
          <p className="section-text" style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#e0f2fe',
            textAlign: 'justify',
            marginBottom: '20px'
          }}>
            {getTranslation('collegeMainText', language)}
          </p>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)',
            position: 'relative'
          }}>
            <p className="section-text" style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#e0f2fe',
              textAlign: 'justify',
              marginBottom: '20px'
            }}>
              {getTranslation('collegeDetailedText', language)}
            </p>
            
            {/* Principal Text with Enhanced Design */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '25px',
              paddingTop: '20px',
              borderTop: '2px solid rgba(251, 191, 36, 0.3)',
              position: 'relative'
            }}>
              {/* Decorative Corner Element */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '0',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #fbbf24)',
                borderRadius: '2px'
              }}></div>
              
              <div style={{
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(59, 130, 246, 0.1))',
                padding: '18px 25px',
                borderRadius: '12px',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
                minWidth: '220px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '40px',
                  height: '40px',
                  background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1), transparent)',
                  borderRadius: '50%'
                }}></div>
                
                {/* Principal Title with Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  color: '#fbbf24',
                  letterSpacing: '1px',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}>
                  <span style={{ fontSize: '20px' }}>👨‍🎓</span>
                  {getTranslation('principalTitle', language)}
                </div>
                
                {/* College Details with Enhanced Typography */}
                <div style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  lineHeight: '1.6',
                  fontWeight: '600',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                }}>
                  <div style={{
                    fontSize: '14px',
                    marginBottom: '4px',
                    color: '#e0f2fe'
                  }}>
                    {getTranslation('collegeName', language)}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontStyle: 'italic'
                  }}>
                    {getTranslation('collegeAddress', language)}
                  </div>
                </div>
                
                {/* Decorative Bottom Line */}
                <div style={{
                  marginTop: '12px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
                  borderRadius: '1px'
                }}></div>
              </div>
            </div>
          </div>
        </section>
        <section style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          padding: '40px',
          marginBottom: '0px',
          transition: 'transform 0.3s ease',
          border: '1px solid #e5e7eb'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
          <h2 className="section-title" style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#dc2626',
            marginBottom: '30px',
            borderBottom: '3px solid #ef4444',
            paddingBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textAlign: 'center',
            justifyContent: 'center'
          }}>
            {getTranslation('keyFeaturesTitle', language)}
          </h2>
          
          <div className="features-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '20px',
            marginTop: '25px'
          }}>
            {[
              getTranslation('feature1', language),
              getTranslation('feature2', language),
              getTranslation('feature3', language),
              getTranslation('feature4', language),
              getTranslation('feature5', language),
              getTranslation('feature6', language),
              getTranslation('feature7', language),
              getTranslation('feature8', language),
              getTranslation('feature9', language),
              getTranslation('feature10', language),
              getTranslation('feature11', language),
              getTranslation('feature12', language),
              getTranslation('feature13', language),
              getTranslation('feature14', language),
              getTranslation('feature15', language),
              getTranslation('feature16', language)
            ].map((feature, index) => (
              <div key={index} style={{
                background: 'linear-gradient(45deg, #f0f9ff, #e0f2fe)',
                padding: '15px 20px',
                borderRadius: '12px',
                border: '2px solid #0ea5e9',
                fontSize: '16px',
                fontWeight: '500',
                color: '#0f172a',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 4px 15px rgba(14, 165, 233, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}>
                {feature}
              </div>
            ))}
          </div>
        </section>
        </div>
      </div>
      
      {/* Responsive CSS Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .main-title {
            font-size: 32px !important;
            margin-bottom: 24px !important;
            padding: 0 16px !important;
          }
          
          .leadership-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-bottom: 24px !important;
          }
          
          .founder-card, .cofounder-card {
            padding: 20px !important;
            margin: 0 8px !important;
          }
          
          .founder-image, .cofounder-image {
            width: 180px !important;
            height: 220px !important;
            margin-bottom: 16px !important;
          }
          
          .founder-name, .cofounder-name {
            font-size: 18px !important;
            margin-bottom: 16px !important;
            line-height: 1.3 !important;
          }
          
          .section-title {
            font-size: 20px !important;
            margin-bottom: 16px !important;
            flex-direction: column !important;
            text-align: center !important;
            gap: 8px !important;
          }
          
          .section-text {
            font-size: 16px !important;
            line-height: 1.6 !important;
            text-align: left !important;
          }
          
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            margin-top: 20px !important;
          }
          
          .about-container {
            padding: 0 16px !important;
          }
          
          section {
            padding: 20px !important;
            margin-bottom: 20px !important;
          }
          
          h3 {
            font-size: 18px !important;
            margin-bottom: 12px !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-title {
            font-size: 28px !important;
            margin-bottom: 20px !important;
          }
          
          .founder-image, .cofounder-image {
            width: 150px !important;
            height: 180px !important;
          }
          
          .founder-name, .cofounder-name {
            font-size: 16px !important;
          }
          
          .section-title {
            font-size: 18px !important;
          }
          
          .section-text {
            font-size: 14px !important;
          }
          
          .about-container {
            padding: 0 12px !important;
          }
          
          section {
            padding: 16px !important;
            margin-bottom: 16px !important;
          }
          
          .founder-card, .cofounder-card {
            padding: 16px !important;
            margin: 0 4px !important;
          }
          
          /* Principal card responsive */
          .section-title {
            padding-right: 0 !important;
          }
          
          div[style*="position: absolute"][style*="bottom: 30px"][style*="right: 30px"] {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin: 20px auto 0 auto !important;
            text-align: center !important;
            max-width: 250px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Aboutus;
