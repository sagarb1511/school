import React from 'react';
import vilasraoImage from '../assets/17vilasrao-shinde_201906253646.jpg';
import coFounderImage from '../assets/vaibhav.JPG';


const Aboutus = () => {
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
        <h1 style={{
          textAlign: 'center',
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '40px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          fontFamily: 'Arial, sans-serif'
        }}>About Us</h1>
        
        {/* Leadership Section - Founder and Co-Founder Side by Side */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Founder Image Card */}
          <div style={{
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
              FOUNDER
            </h3>
            
            <h2 style={{ 
              color: '#1e40af', 
              fontSize: '24px', 
              marginBottom: '20px',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
             माजी आमदार विलासराव शिंदे साहेब
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
              📅 स्थापना दिनांक: ०३ नोव्हेंबर १९६२
            </div>
          </div>

          {/* Co-Founder Image Card */}
          <div style={{
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
              CO-FOUNDER & CHAIRMAN
            </h3>
            
            <h2 style={{ 
              color: '#059669', 
              fontSize: '24px', 
              marginBottom: '20px',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              श्री वैभव विलासराव शिंदे (दादा)
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
              🎓 राजाराम शिक्षण संस्थेचे चेअरमन
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
          <h2 style={{
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
            🏛️ Our Heritage
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify'
          }}>
            आष्टा या शहराला सामाजिक, राजकिय व शैक्षणिक वारसा आहे. आष्टा शहराची नगरपालिका ही ६ डिसेंबर १८५३ पासूनची असून, महाराष्ट्रातील सर्वात जुनी नगरपालिका आहे.
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
          <h2 style={{
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
            📚 Founding of Rajaram Shikshan Sanstha
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify'
          }}>
            सुसंस्कृत समाज निर्मितीसाठी लोकनेते स्व. राजारामबापू पाटील यांच्यावरील अढळ निष्ठेने स्व. विलासराव शिंदे (साहेब) यांनी ०३ नोव्हेंबर १९६२ रोजी 'राजाराम शिक्षण संस्थेची' स्थापना केली. या शिक्षण संस्थेच्या माध्यमातून ग्रामीण भागातील बहुजनांना शिक्षण देऊन साक्षर बनविण्याचे काम राजाराम शिक्षण संस्थेने केले आहे.
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
          <h2 style={{
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
            🏫 Current Educational Institutions
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify'
          }}>
            संस्थेच्या वतीने सध्या सांगली जिल्ह्यात वाळवा, शिराळा, मिरज व कोल्हापूर जिल्ह्यात कागल तालुक्यात वंदूर असे एकूण १० माध्यमिक व उच्च माध्यमिक शाळा सुरू आहेत. तसेच यशवंतराव चव्हाण महाराष्ट्र मुक्त विद्यापीठ नाशिक यांचे केंद्र सुरू आहे.
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
          <h2 style={{
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
            👑 Vision and Leadership
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify'
          }}>
            समाजातील सर्व उपेक्षित घटकांना न्याय देण्याची, माणसाला माणूस जोडण्याची दृष्टी शिंदे साहेबांनी सातत्याने जागृत ठेवली म्हणूनच ते लोकनेते ठरले. या मातीतील खरेखुरे लोकनेते हे अढळपद त्यांना समाजानेच बहाल केले.
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
          color: 'white'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '25px',
            borderBottom: '3px solid rgba(255,255,255,0.3)',
            paddingBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🎓 Vilasrao Shinde Mahavidyalaya
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#e0f2fe',
            textAlign: 'justify',
            marginBottom: '20px'
          }}>
            या संस्थेचे आष्टा शहरातील चिरंतन स्फूर्तीदायक स्मारक म्हणजेच सन २०२२ मध्ये सुरू होत असलेले नवीन विलासराव शिंदे महाविद्यालय (कला, वाणिज्य व विज्ञान) शाखा असणारे महाविद्यालय होय.
          </p>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#e0f2fe',
              textAlign: 'justify'
            }}>
              आष्टा शहर व परिसरातील ग्रामीण भागातील विद्यार्थ्यांची उच्च शिक्षणाची शैक्षणिक सोय व्हावी व त्यांना दर्जेदार शिक्षण देऊन सक्षम बनवावे तसेच २१ व्या शतकातील माहिती व तंत्रज्ञानाचा उपयोग करून स्पर्धेच्या युगात व्यक्तिमत्व विकास घडवावा या हेतूने आष्टा शहराचे उगवते नेतृत्व व राजाराम शिक्षण संस्थेचे चेअरमन मा. वैभव विलासराव शिंदे (दादा) यांनी कला, वाणिज्य व विज्ञान शाखा असणारे वरिष्ठ महाविद्यालय ०१ सप्टेंबर २०२२ पासून महाराष्ट्र शासन व शिवाजी विद्यापीठ, कोल्हापूर यांच्या मान्यतेने सुरू केले आहे.
            </p>
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
          <h2 style={{
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
            🏆 Key Features of the College
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '20px',
            marginTop: '25px'
          }}>
            {[
              "१) स्वमालकिची सुसज्ज इमारत",
              "२) अनुभवी व तज्ञ प्राध्यापक वर्ग", 
              "३) गरीब व गरजु विद्यार्थ्यांना अर्थसहाय्य",
              "४) सुसज्ज अभ्यासिका व ग्रंथालय",
              "५) स्पर्धा परिक्षा अभ्यास केंद्र",
              "६) सुक्ष्मजीवशास्त्र विषय शिकविण्याची सोय",
              "७) संगणकशास्त्र (Computer Science) विषयाची सुसज्ज प्रयोगशाळा",
              "८) विज्ञान विभागाकडे सुसज्ज प्रयोगशाळा",
              "९) राष्ट्रीय सेवा योजना (NSS)",
              "१०) मागासवर्गीय, इतर मागासवर्गीय व खुल्या प्रवर्गातील विद्यार्थ्यांना शासनाच्या शिष्यवृत्तीची सोय",
              "११) विविध विषयांवरील चर्चासत्र व परिसंवाद",
              "१२) सर्व सोईंनी सुसज्ज क्रिडांगण",
              "१३) आ. विलासराव शिंदे आंतरमहाविद्यालयीन वत्कृत्व स्पर्धा",
              "१४) शैक्षणिक व औद्योगिक सहलींचे आयोजन",
              "१५) यशवंतराव चव्हाण महाराष्ट्र मुक्त विद्यापीठ, नाशिकचे अभ्यासकेंद्र",
              "१६) शैक्षणिक वर्ष २०२४-२५ पासून B.C.A. अभ्यासक्रम सुरू, प्रवेश सुरू"
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
      
    </div>
  );
};

export default Aboutus;
