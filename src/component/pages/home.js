import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import founderImage from '../assets/17vilasrao-shinde_201906253646.jpg';
import coFounderImage from '../assets/vaibhav.JPG';
import principalImage from '../assets/principal.JPG';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';
import img1 from '../assets/slider1.jpg';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();

  // Slider images data
  const getSliderImages = () => [
    {
      image: require('../assets/slider1.jpg'),
      title: getTranslation('welcomeToCollege', language),
      description: getTranslation('collegeDescription', language)
    },
    {
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: getTranslation('qualityEducation', language),
      description: getTranslation('qualityEducationDesc', language)
    },
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: getTranslation('modernFacilities', language),
      description: getTranslation('modernFacilitiesDesc', language)
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: getTranslation('sports', language),
      description: getTranslation('experiencedFacultyDesc', language)
    }
  ];

  const sliderImages = getSliderImages();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };
  // Sample data for notices
  // const notices = [
  //   "Admissions open for 2024-25 academic year",
  //   "Mid-term exams scheduled for next week",
  //   "College will remain closed on Monday for public holiday",
  //   "Annual sports day on 15th March"
  // ];

  // Sample data for achievements (showing only 3 for home page)
  const getAchievements = () => [
    {
      title: language === 'mr' ? "राज्यातील टॉप 10 महाविद्यालयांमध्ये स्थान" : "Ranked among top 10 colleges in the state",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
      icon: "🏆",
      description: language === 'mr' ? "शैक्षणिक उत्कृष्टता आणि दर्जेदार शिक्षणासाठी मान्यता" : "Recognized for academic excellence and quality education"
    },
    {
      title: language === 'mr' ? "आंतर-विद्यापीठ क्रीडांमध्ये विद्यार्थ्याने सुवर्णपदक जिंकले" : "Student won gold medal in inter-university sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      icon: "🥇",
      description: language === 'mr' ? "क्रीडा आणि स्पर्धांमध्ये उत्कृष्ट कामगिरी" : "Outstanding performance in athletics and sports competitions"
    },
    {
      title: language === 'mr' ? "NAAC मान्यता 'A' ग्रेडसह" : "NAAC Accreditation with 'A' Grade",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80",
      icon: "⭐",
      description: language === 'mr' ? "शिक्षण आणि पायाभूत सुविधांमध्ये सर्वोच्च दर्जाचे मानक" : "Highest quality standards in education and infrastructure"
    }
  ];

  const achievements = getAchievements();

  // Sample data for events
  // const events = [
  //   { name: "Cultural Fest", date: "March 20, 2024" },
  //   { name: "NSS Camp", date: "April 5-10, 2024" },
  //   { name: "Sports Tournament", date: "March 25, 2024" },
  //   { name: "Annual Function", date: "April 15, 2024" }
  // ];

  // Sample gallery images
  const getGalleryImages = () => [
    {
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=300&q=80",
      title: language === 'mr' ? "महाविद्यालय परिसर" : "College Campus",
      description: language === 'mr' ? "आमच्या मुख्य परिसर इमारतीचे सुंदर दृश्य" : "Beautiful view of our main campus building"
    },
    {
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=300&q=80",
      title: language === 'mr' ? "ग्रंथालय हॉल" : "Library Hall",
      description: language === 'mr' ? "विद्यार्थ्यांसाठी शांत आणि संसाधनपूर्ण ग्रंथालय" : "Quiet and resourceful library for students"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&q=80",
      title: language === 'mr' ? "क्रीडा मैदान" : "Sports Ground",
      description: language === 'mr' ? "दरवर्षी आंतर-महाविद्यालयीन क्रीडा स्पर्धा आयोजित केल्या जातात" : "Inter-college sports events held every year"
    }
  ];

  const galleryImages = getGalleryImages();

  // Sample cultural activities (showing only 3 for home page)
  const getCulturalActivities = () => [
    {
      id: 1,
      name: language === 'mr' ? "नृत्य स्पर्धा" : "Dance Competition",
      description: language === 'mr' ? "विद्यार्थी शास्त्रीय, लोक आणि आधुनिक नृत्य शैलींचे प्रदर्शन करून ताल आणि संस्कृती दाखवतात." : "Students perform classical, folk, and modern dance styles showcasing rhythm and culture.",
      photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      icon: "💃"
    },
    {
      id: 2,
      name: language === 'mr' ? "संगीत रात्री" : "Music Night",
      description: language === 'mr' ? "एकल गायक, बँड आणि वादक मधुर संगीताने भरलेली जीवंत संध्या तयार करतात." : "Solo singers, bands, and instrumentalists create a vibrant evening full of melodies.",
      photo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      icon: "🎵"
    },
    {
      id: 3,
      name: language === 'mr' ? "नाटक आणि स्किट" : "Drama & Skit",
      description: language === 'mr' ? "विद्यार्थ्यांद्वारे सामाजिक आणि सांस्कृतिक विषयांवर रंगमंचीय नाटके आणि रस्त्यावरील नाटके सादर केली जातात." : "Stage plays and street dramas on social and cultural themes performed by students.",
      photo: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      icon: "🎭"
    }
  ];

  const culturalActivities = getCulturalActivities();

  // Sample testimonials
  // const testimonials = [
  //   {
  //     text: "This college provided me with excellent opportunities for growth and learning.",
  //     author: "Rahul Sharma, Alumni"
  //   },
  //   {
  //     text: "The faculty is very supportive and the campus environment is wonderful.",
  //     author: "Priya Patel, Current Student"
  //   }
  // ];

  return (
    <>
   
    <div style={styles.container}>
     

      {/* 2. Image Slider */}
      <div style={styles.sliderSection}>
        <div className="slider-container" style={styles.sliderContainer}>
          {sliderImages.map((slide, index) => (
            <div
              key={index}
              style={{
                ...styles.slide,
                opacity: index === currentSlide ? 1 : 0,
                transform: `translateX(${(index - currentSlide) * 100}%)`
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={styles.sliderImage}
              />
              <div style={styles.slideOverlay}>
                <div className="slide-content" style={styles.slideContent}>
                  {index === 0 ? (
                    <h2 className="slide-title" style={styles.slideTitle}>
                      {language === 'mr' ? (
                        <>
                          <div className="college-name-text" style={{whiteSpace: 'nowrap'}}>विलासराव शिंदे महाविद्यालय, आष्टा</div>
                          <div className="welcome-text-mr" style={{marginTop: '10px', whiteSpace: 'nowrap'}}>आपले सहर्ष स्वागत आहे</div>
                        </>
                      ) : (
                        <>
                          <div>Welcome To</div>
                          <div className="college-name-text" style={{marginTop: '10px', whiteSpace: 'nowrap'}}>Vilasrao Shinde Mahavidyalaya, Ashta</div>
                        </>
                      )}
                    </h2>
                  ) : (
                    <h2 className="slide-title" style={styles.slideTitle}>{slide.title}</h2>
                  )}
                  <p className="slide-description" style={styles.slideDescription}>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide} style={{...styles.sliderArrow, ...styles.sliderArrowLeft}}>
            &#8249;
          </button>
          <button className="slider-arrow slider-arrow-right" onClick={nextSlide} style={{...styles.sliderArrow, ...styles.sliderArrowRight}}>
            &#8250;
          </button>
          
          {/* Slide Indicators */}
          <div style={styles.sliderIndicators}>
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  ...styles.sliderDot,
                  backgroundColor: index === currentSlide ? '#FF6B35' : 'rgba(255,255,255,0.5)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Leadership Team with 3D Animated Background */}
      <div className="section-container" style={{...styles.section, position: 'relative', overflow: 'hidden', padding: '60px 0', maxWidth: '100%', margin: '0'}}>
        {/* Leadership 3D Animated Background - Light Blue Theme */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0,
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #dbeafe 60%, #bfdbfe 100%)',
          backgroundSize: '400% 400%',
          animation: 'leadershipGradient 20s ease infinite'
        }}>
          {/* Leadership 3D Elements - Light Blue Tones */}
          <div className="floating-element" style={{
            position: 'absolute',
            top: '15%',
            left: '8%',
            width: '90px',
            height: '90px',
            background: 'linear-gradient(45deg, #dbeafe, #bfdbfe)',
            borderRadius: '25px',
            opacity: 0.4,
            animation: 'leadershipFloat 16s ease-in-out infinite, leadershipRotate 12s linear infinite',
            boxShadow: '0 15px 30px rgba(59, 130, 246, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '65%',
            right: '12%',
            width: '70px',
            height: '70px',
            background: 'linear-gradient(45deg, #e0f2fe, #f0f9ff)',
            borderRadius: '50%',
            opacity: 0.45,
            animation: 'leadershipFloat 14s ease-in-out infinite reverse, leadershipPulse 8s ease-in-out infinite',
            boxShadow: '0 12px 25px rgba(14, 165, 233, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '25%',
            left: '75%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, #bfdbfe, #dbeafe)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            opacity: 0.4,
            animation: 'leadershipFloat 18s ease-in-out infinite, leadershipBounce 10s ease-in-out infinite',
            boxShadow: '0 10px 20px rgba(59, 130, 246, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '25%',
            width: '50px',
            height: '50px',
            background: 'linear-gradient(45deg, #f0f9ff, #e0f2fe)',
            borderRadius: '15px',
            opacity: 0.35,
            animation: 'leadershipFloat 12s ease-in-out infinite, leadershipSpin 15s linear infinite',
            boxShadow: '0 8px 16px rgba(14, 165, 233, 0.15)'
          }}></div>
        </div>

        {/* Content with higher z-index */}
        <div className="content-container" style={{ position: 'relative', zIndex: 1 }}>
    <h2 className="section-title" style={{...styles.sectionTitle, textAlign: 'center', color: 'black', width: '100%', display: 'block', margin: '0 auto 40px auto', borderBottom: '2px solid #FF6B35', paddingBottom: '8px'}}>{language === 'mr' ? 'आमचे नेतृत्व' : 'Our Leadership'}</h2>
    <div className="grid-container" style={styles.leadershipContainer}>
      <div style={styles.leaderCard}>
        <div style={styles.leaderImageContainer}>
          <img 
            src={founderImage} 
            alt="Late Hon. Vilasrao Shinde(Saheb) Ex. MLA & MLC" 
            style={styles.leaderImage}
          />
        </div>
        <h3 className="leader-name" style={styles.leaderName}>{language === 'mr' ? 'माजी आमदार तथा आमदार परिषद सदस्य (एम.एल.सी.) स्वर्गीय विलासराव शिंदे (साहेब)' : 'Late Hon. Vilasrao Shinde(Saheb) Ex. MLA & MLC'}</h3>
        <p style={styles.leaderTitle}>{language === 'mr' ? 'संस्थापक' : 'Founder'}</p>
        <p className="leader-description" style={styles.leaderDescription}>
          {language === 'mr' ? 'दूरदर्शी नेते ज्यांनी सर्वांना दर्जेदार शिक्षण प्रदान करण्याच्या उद्देशाने या संस्थेची स्थापना केली.' : 'Visionary leader who established this institution with a mission to provide quality education to all.'}
        </p>
      </div>

      <div style={styles.leaderCard}>
        <div style={styles.leaderImageContainer}>
          <img 
            src={coFounderImage} 
            alt="Prof. Rajesh Kumar - Co-Founder" 
            style={styles.leaderImage}
          />
        </div>
        <h3 className="leader-name" style={styles.leaderName}>{language === 'mr' ? 'श्री वैभव विलासराव शिंदे (दादा)' : 'Shri Vaibhav Vilasrao Shinde (Dada)'}</h3>
        <p style={styles.leaderTitle}>{language === 'mr' ? 'सह-संस्थापक' : 'Co-Founder'}</p>
        <p className="leader-description" style={styles.leaderDescription}>
          {language === 'mr' ? 'समर्पित शिक्षक आणि प्रशासक ज्यांनी आमच्या संस्थेच्या शैक्षणिक दृष्टिकोनाला आकार देण्यास मदत केली.' : 'Dedicated educator and administrator who helped shape the academic vision of our institution.'}
        </p>
      </div>

      <div style={styles.leaderCard}>
        <div style={styles.leaderImageContainer}>
          <img 
            src={principalImage} 
            alt="Dr. Priya Sharma - Principal" 
            style={styles.leaderImage}
          />
        </div>
        <h3 className="leader-name" style={styles.leaderName}>{language === 'mr' ? 'डॉ. माणिकराव विष्णु पाटील' : 'Dr. Manikrao Vishnu Patil'}</h3>
        <p style={styles.leaderTitle}>{language === 'mr' ? 'प्राचार्य' : 'Principal'}</p>
        <p className="leader-description" style={styles.leaderDescription}>
          {language === 'mr' ? 'सध्याचे मुख्याध्यापक जे संस्थेला शिक्षण आणि विद्यार्थी विकासात उत्कृष्टतेकडे नेत आहेत.' : 'Current principal leading the institution towards excellence in education and student development.'}
        </p>
      </div>
    </div>
  </div>
</div>

      {/* 3. Welcome Message */}
      {/* <div style={styles.section}>
        <div style={styles.welcomeContainer}>
          <h2 style={styles.sectionTitle}>Welcome Message</h2>
          <div style={styles.welcomeMessage}>
            <p style={styles.welcomeText}>
              "Welcome to Vilasrao Sinde Mahavidyalaya, Adgaon – committed to academic excellence 
              and all-round development of students. Our institution provides a nurturing environment 
              where students can explore their potential and achieve their dreams."
            </p>
            <p style={styles.principalSignature}>- Principal, VSM College</p>
          </div>
        </div>
      </div> */}

      

      

    

      

      {/* 4. Achievements Section with Animated Background */}
      <div className="section-container" style={{...styles.section, position: 'relative', overflow: 'hidden', padding: '60px 0', maxWidth: '100%', margin: '0'}}>
        {/* Achievements 3D Animated Background - Light Green Theme */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0,
          background: 'linear-gradient(135deg, #f0fff0 0%, #f7fee7 30%, #dcfce7 60%, #bbf7d0 100%)',
          backgroundSize: '400% 400%',
          animation: 'achievementGradient 18s ease infinite'
        }}>
          {/* Achievement 3D Elements - Light Green Tones */}
          <div style={{
            position: 'absolute',
            top: '12%',
            left: '10%',
            width: '85px',
            height: '85px',
            background: 'linear-gradient(45deg, #dcfce7, #bbf7d0)',
            borderRadius: '50%',
            opacity: 0.4,
            animation: 'achievementFloat 15s ease-in-out infinite, achievementSpin 12s linear infinite',
            boxShadow: '0 16px 32px rgba(34, 197, 94, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '68%',
            right: '15%',
            width: '65px',
            height: '65px',
            background: 'linear-gradient(45deg, #f7fee7, #f0fff0)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            opacity: 0.45,
            animation: 'achievementFloat 17s ease-in-out infinite reverse, achievementBounce 9s ease-in-out infinite',
            boxShadow: '0 13px 26px rgba(22, 163, 74, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '22%',
            left: '72%',
            width: '75px',
            height: '75px',
            background: 'linear-gradient(45deg, #bbf7d0, #dcfce7)',
            borderRadius: '20px',
            opacity: 0.4,
            animation: 'achievementFloat 13s ease-in-out infinite, achievementPulse 7s ease-in-out infinite',
            boxShadow: '0 15px 30px rgba(34, 197, 94, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '42%',
            left: '18%',
            width: '55px',
            height: '55px',
            background: 'linear-gradient(45deg, #f0fff0, #f7fee7)',
            borderRadius: '15px',
            opacity: 0.35,
            animation: 'achievementFloat 11s ease-in-out infinite, achievementScale 8s ease-in-out infinite',
            boxShadow: '0 11px 22px rgba(22, 163, 74, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '25%',
            right: '35%',
            width: '45px',
            height: '45px',
            background: 'linear-gradient(45deg, #dcfce7, #f7fee7)',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            opacity: 0.4,
            animation: 'achievementFloat 14s ease-in-out infinite, achievementRotate 10s linear infinite',
            boxShadow: '0 9px 18px rgba(34, 197, 94, 0.15)'
          }}></div>
        </div>

        {/* Content with higher z-index */}
        <div className="content-container" style={{ position: 'relative', zIndex: 1, padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{...styles.sectionTitle, textAlign: 'center', color: 'black', width: '100%', display: 'block', margin: '0 auto 40px auto', borderBottom: '3px solid #ffd700', paddingBottom: '10px', textShadow: '2px 2px 4px rgba(255,255,255,0.8)'}}>{getTranslation('achievements', language)}</h2>
          <div className="grid-container" style={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className="card-element" style={styles.achievementCard}>
                <div style={styles.achievementImageContainer}>
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    style={styles.achievementImage}
                  />
                  <div style={styles.achievementIconOverlay}>
                    <span style={styles.achievementIcon}>{achievement.icon}</span>
                  </div>
                </div>
                <div style={styles.achievementContent}>
                  <h3 style={styles.achievementTitle}>{achievement.title}</h3>
                  <p style={styles.achievementDescription}>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.achievementButtonContainer}>
            <button 
              className="primary-button"
              style={styles.achievementButton}
            >
              <Link to="/achievements">
              {language === 'mr' ? 'अधिक उपलब्धी दाखवा' : 'Show More Achievements'}
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* 5. Cultural Activities Section with Animated Background */}
      <div className="section-container" style={{...styles.section, position: 'relative', overflow: 'hidden', padding: '60px 0', maxWidth: '100%', margin: '0'}}>
        {/* Cultural 3D Animated Background - Light Pink Theme */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0,
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 30%, #fbcfe8 60%, #f9a8d4 100%)',
          backgroundSize: '400% 400%',
          animation: 'culturalGradient 22s ease infinite'
        }}>
          {/* Cultural 3D Elements - Light Pink Tones */}
          <div style={{
            position: 'absolute',
            top: '18%',
            left: '12%',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(45deg, #fce7f3, #fbcfe8)',
            borderRadius: '50%',
            opacity: 0.4,
            animation: 'culturalFloat 16s ease-in-out infinite, culturalRotate 13s linear infinite',
            boxShadow: '0 14px 28px rgba(236, 72, 153, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '65%',
            right: '15%',
            width: '70px',
            height: '70px',
            background: 'linear-gradient(45deg, #fdf2f8, #fce7f3)',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            opacity: 0.45,
            animation: 'culturalFloat 18s ease-in-out infinite reverse, culturalWave 10s ease-in-out infinite',
            boxShadow: '0 12px 24px rgba(219, 39, 119, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '28%',
            left: '68%',
            width: '65px',
            height: '65px',
            background: 'linear-gradient(45deg, #fbcfe8, #f9a8d4)',
            borderRadius: '20px',
            opacity: 0.4,
            animation: 'culturalFloat 14s ease-in-out infinite, culturalPulse 8s ease-in-out infinite',
            boxShadow: '0 13px 26px rgba(236, 72, 153, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '38%',
            left: '28%',
            width: '55px',
            height: '55px',
            background: 'linear-gradient(45deg, #f9a8d4, #fce7f3)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            opacity: 0.35,
            animation: 'culturalFloat 12s ease-in-out infinite, culturalDance 9s ease-in-out infinite',
            boxShadow: '0 11px 22px rgba(219, 39, 119, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '48%',
            right: '30%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, #fdf2f8, #fbcfe8)',
            borderRadius: '15px',
            opacity: 0.4,
            animation: 'culturalFloat 15s ease-in-out infinite reverse, culturalSpin 11s linear infinite',
            boxShadow: '0 12px 24px rgba(236, 72, 153, 0.15)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '40%',
            width: '45px',
            height: '45px',
            background: 'linear-gradient(45deg, #fce7f3, #fdf2f8)',
            borderRadius: '50%',
            opacity: 0.35,
            animation: 'culturalFloat 10s ease-in-out infinite, culturalScale 7s ease-in-out infinite',
            boxShadow: '0 9px 18px rgba(219, 39, 119, 0.15)'
          }}></div>
        </div>

        {/* Content with higher z-index */}
        <div className="content-container" style={{ position: 'relative', zIndex: 1, padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{...styles.sectionTitle, textAlign: 'center', color: 'black', width: '100%', display: 'block', margin: '0 auto 40px auto', borderBottom: '3px solid #f72585', paddingBottom: '10px', textShadow: '2px 2px 4px rgba(255,255,255,0.8)'}}>{getTranslation('activities', language)}</h2>
          <div className="grid-container" style={styles.activitiesGrid}>
            {culturalActivities.map((activity) => (
              <div key={activity.id} style={styles.activityCard}>
                <div style={styles.activityImageContainer}>
                  <img 
                    src={activity.photo} 
                    alt={activity.name}
                    style={styles.activityImage}
                  />
                  <div style={styles.activityIconOverlay}>
                    <span style={styles.activityIcon}>{activity.icon}</span>
                  </div>
                </div>
                <div style={styles.activityContent}>
                  <h3 style={styles.activityTitle}>{activity.name}</h3>
                  <p style={styles.activityDescription}>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.activityButtonContainer}>
            <button 
              className="primary-button"
              style={styles.activityButton}
            >
              <Link to="/activities">
               {getTranslation('viewAll', language)} {getTranslation('activities', language)}
              </Link>
             
            </button>
          </div>
        </div>
      </div>

      {/* 6. Gallery Preview with Light Animated Background */}
      <div className="section-container" style={{
        ...styles.section, 
        position: 'relative',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #f0fff0 50%, #fef7e0 75%, #f8fafc 100%)',
        backgroundSize: '300% 300%',
        animation: 'galleryLightGradient 25s ease infinite',
        padding: '60px 0 40px 0',
        maxWidth: '100%', 
        margin: '0'
      }}>
        {/* Subtle Light Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, rgba(219, 234, 254, 0.3), rgba(191, 219, 254, 0.3))',
          borderRadius: '50%',
          animation: 'galleryLightFloat 20s ease-in-out infinite',
          boxShadow: '0 8px 16px rgba(59, 130, 246, 0.1)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '70%',
          right: '12%',
          width: '45px',
          height: '45px',
          background: 'linear-gradient(45deg, rgba(220, 252, 231, 0.3), rgba(187, 247, 208, 0.3))',
          borderRadius: '15px',
          animation: 'galleryLightFloat 18s ease-in-out infinite reverse',
          boxShadow: '0 6px 12px rgba(34, 197, 94, 0.1)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '75%',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(45deg, rgba(254, 243, 199, 0.3), rgba(253, 230, 138, 0.3))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'galleryLightFloat 16s ease-in-out infinite',
          boxShadow: '0 7px 14px rgba(245, 158, 11, 0.1)'
        }}></div>

        {/* Content Container */}
        <div className="content-container" style={{ position: 'relative', zIndex: 1, padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{...styles.sectionTitle, textAlign: 'center', color: 'black', width: '100%', display: 'block', margin: '0 auto 40px auto', borderBottom: '3px solid #00c9ff', paddingBottom: '10px', textShadow: '2px 2px 4px rgba(255,255,255,0.8)'}}>{getTranslation('gallery', language)}</h2>
          <div className="grid-container" style={styles.galleryContainer}>
            {galleryImages.map((item, index) => (
              <div key={index} style={styles.galleryItem}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={styles.galleryImage}
                />
                <div style={styles.galleryOverlay}>
                  <h3 style={styles.galleryTitle}>{item.title}</h3>
                  <p style={styles.galleryDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.galleryButtonContainer}>
            <button 
              className="primary-button"
              style={styles.galleryButton}
            >
              <Link to="/gallery">
              {language === 'mr' ? 'संपूर्ण गॅलरी पहा' : 'View Full Gallery'}
              </Link>
            </button>
          </div>
        </div>
      </div>
      
      
      {/* 3D Animation CSS and Responsive Styles */}
      <style jsx>{`
        /* Responsive Styles */
        @media (max-width: 768px) {
          .slider-container {
            height: 70vh !important;
          }
          .slide-title {
            font-size: 2.2rem !important;
            margin-bottom: 15px !important;
          }
          .slide-description {
            font-size: 1.1rem !important;
          }
          .slider-arrow {
            font-size: 1.5rem !important;
            padding: 12px 15px !important;
          }
          .slide-content {
            max-width: 90% !important;
            padding: 0 15px !important;
          }
          .college-name-text {
            font-size: 1.8rem !important;
            white-space: normal !important;
            line-height: 1.3 !important;
          }
          .welcome-text-mr {
            font-size: 1.8rem !important;
            white-space: normal !important;
            line-height: 1.3 !important;
          }
          .leader-name {
            font-size: 1.2rem !important;
          }
          .leader-description {
            font-size: 0.95rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .slider-container {
            height: 60vh !important;
          }
          .slide-title {
            font-size: 1.8rem !important;
            margin-bottom: 10px !important;
            line-height: 1.2 !important;
          }
          .slide-description {
            font-size: 1rem !important;
            line-height: 1.4 !important;
          }
          .slider-arrow {
            font-size: 1.2rem !important;
            padding: 10px 12px !important;
          }
          .slider-arrow-left {
            left: 10px !important;
          }
          .slider-arrow-right {
            right: 10px !important;
          }
          .slide-content {
            max-width: 95% !important;
            padding: 0 10px !important;
          }
          .college-name-text {
            font-size: 1.3rem !important;
            line-height: 1.4 !important;
            white-space: normal !important;
            word-wrap: break-word !important;
          }
          .welcome-text-mr {
            font-size: 1.3rem !important;
            line-height: 1.4 !important;
            white-space: normal !important;
            word-wrap: break-word !important;
          }
          .leader-name {
            font-size: 1.1rem !important;
            line-height: 1.3 !important;
          }
          .leader-description {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }
        }
        
        @media (max-width: 360px) {
          .college-name-text {
            font-size: 1.1rem !important;
            line-height: 1.5 !important;
            white-space: normal !important;
            word-wrap: break-word !important;
            hyphens: auto !important;
          }
          .welcome-text-mr {
            font-size: 1.1rem !important;
            line-height: 1.5 !important;
            white-space: normal !important;
            word-wrap: break-word !important;
            hyphens: auto !important;
          }
        }
        
        /* 3D Animations */
        @keyframes backgroundRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float3d {
          0%, 100% { transform: translate(0, 0) rotateZ(0deg); }
          25% { transform: translate(20px, -10px) rotateZ(90deg); }
          50% { transform: translate(-15px, 20px) rotateZ(180deg); }
          75% { transform: translate(10px, -15px) rotateZ(270deg); }
        }
        
        @keyframes rotate3d {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(90deg); }
          50% { transform: rotateX(180deg) rotateY(180deg); }
          75% { transform: rotateX(270deg) rotateY(270deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes pulse3d {
          0%, 100% { transform: scale(1) rotateZ(0deg); }
          50% { transform: scale(1.3) rotateZ(180deg); }
        }
        
        @keyframes bounce3d {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-30px) rotateX(180deg); }
        }

        @keyframes achievementGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes achievementFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -20px) rotate(90deg); }
          50% { transform: translate(-10px, 15px) rotate(180deg); }
          75% { transform: translate(20px, -10px) rotate(270deg); }
        }
        
        @keyframes achievementSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes achievementBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes achievementPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        
        @keyframes achievementScale {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.4) rotate(180deg); }
        }

        @keyframes culturalGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes culturalFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(25px, -15px) rotate(45deg); }
          50% { transform: translate(-20px, 25px) rotate(90deg); }
          75% { transform: translate(15px, -20px) rotate(135deg); }
        }
        
        @keyframes culturalRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes culturalWave {
          0%, 100% { transform: translateY(0) scaleX(1); }
          50% { transform: translateY(-20px) scaleX(1.2); }
        }
        
        @keyframes culturalPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.8; }
        }
        
        @keyframes culturalDance {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(10px) rotate(90deg); }
          50% { transform: translateX(-10px) rotate(180deg); }
          75% { transform: translateX(5px) rotate(270deg); }
        }
        
        @keyframes culturalSpin {
          0% { transform: rotate(0deg) translateY(0); }
          25% { transform: rotate(90deg) translateY(-10px); }
          50% { transform: rotate(180deg) translateY(0); }
          75% { transform: rotate(270deg) translateY(10px); }
          100% { transform: rotate(360deg) translateY(0); }
        }

        @keyframes galleryGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes galleryFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -25px) rotate(60deg); }
          50% { transform: translate(-25px, 20px) rotate(120deg); }
          75% { transform: translate(15px, -15px) rotate(180deg); }
        }
        
        @keyframes galleryRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes galleryZoom {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.25) rotate(45deg); }
        }
        
        @keyframes galleryPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.35); opacity: 0.8; }
        }
        
        @keyframes galleryTwist {
          0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(45deg); }
          50% { transform: rotateX(180deg) rotateY(90deg); }
          75% { transform: rotateX(270deg) rotateY(135deg); }
        }
        
        @keyframes gallerySway {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(15px) rotate(15deg); }
          50% { transform: translateX(-15px) rotate(-15deg); }
          75% { transform: translateX(10px) rotate(10deg); }
        }
        
        @keyframes galleryFlip {
          0%, 100% { transform: rotateY(0deg) translateZ(0); }
          50% { transform: rotateY(180deg) translateZ(20px); }
        }
      `}</style>
    </div>
    </>
  )
}

// Inline CSS Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  heroSection: {
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://via.placeholder.com/1200x600/2E7D32/white?text=College+Campus")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '20px',
  },
  heroContent: {
    maxWidth: '800px',
  },
  collegeName: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  tagline: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    fontWeight: '300',
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '12px 30px',
    fontSize: '1.1rem',
    backgroundColor: '#FF6B35',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    '@media (max-width: 768px)': {
      padding: '10px 25px',
      fontSize: '1rem',
    },
    '@media (max-width: 480px)': {
      padding: '8px 20px',
      fontSize: '0.9rem',
      width: '100%',
    },
  },
  secondaryButton: {
    padding: '12px 30px',
    fontSize: '1.1rem',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  section: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      padding: '40px 15px',
    },
    '@media (max-width: 480px)': {
      padding: '30px 10px',
    },
  },
  welcomeContainer: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#2E7D32',
    borderBottom: '3px solid #FF6B35',
    paddingBottom: '10px',
    display: 'inline-block',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
      marginBottom: '30px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.5rem',
      marginBottom: '20px',
      borderBottom: '2px solid #FF6B35',
    },
  },
  welcomeMessage: {
    backgroundColor: '#f8f9fa',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      padding: '30px',
    },
    '@media (max-width: 480px)': {
      padding: '20px',
    },
  },
  welcomeText: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    fontStyle: 'italic',
  },
  principalSignature: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#666',
  },
  noticesContainer: {
    backgroundColor: '#fff3cd',
    border: '1px solid #ffeaa7',
    borderRadius: '10px',
    padding: '20px',
  },
  noticesScroll: {
    maxHeight: '200px',
    overflowY: 'auto',
  },
  noticeItem: {
    padding: '10px 0',
    borderBottom: '1px solid #ffeaa7',
    fontSize: '1.1rem',
  },
  bullet: {
    color: '#FF6B35',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  quickLinks: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    textAlign: 'center',
  },
  link: {
    display: 'block',
    padding: '20px',
    backgroundColor: '#2E7D32',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'transform 0.3s, background-color 0.3s',
  },
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '15px',
    },
  },
  achievementCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  achievementImageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
  },
  achievementImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  achievementIconOverlay: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(255, 107, 53, 0.9)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementIcon: {
    fontSize: '1.5rem',
  },
  achievementContent: {
    padding: '25px',
  },
  achievementTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: '10px',
    margin: '0 0 10px 0',
    lineHeight: '1.4',
  },
  achievementDescription: {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: '1.6',
    margin: '0',
  },
  achievementButtonContainer: {
    textAlign: 'center',
    marginTop: '40px',
  },
  achievementButton: {
    padding: '12px 30px',
    backgroundColor: '#FF6B35',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
  },
  activitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '15px',
    },
  },
  activityCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  activityImageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
  },
  activityImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  activityIconOverlay: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(156, 39, 176, 0.9)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIcon: {
    fontSize: '1.5rem',
  },
  activityContent: {
    padding: '25px',
  },
  activityTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#9C27B0',
    marginBottom: '10px',
    margin: '0 0 10px 0',
    lineHeight: '1.4',
  },
  activityDescription: {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: '1.6',
    margin: '0',
  },
  activityButtonContainer: {
    textAlign: 'center',
    marginTop: '40px',
  },
  activityButton: {
    padding: '12px 30px',
    backgroundColor: '#9C27B0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 4px 12px rgba(156, 39, 176, 0.3)',
  },
  eventsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
  },
  eventCard: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    borderLeft: '4px solid #2196F3',
  },
  eventName: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2E7D32',
  },
  eventDate: {
    color: '#666',
    marginBottom: '15px',
    fontWeight: '500',
  },
  eventButton: {
    padding: '8px 20px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  galleryContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '15px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '15px',
    },
    marginBottom: '30px',
  },
  galleryItem: {
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    cursor: 'pointer',
  },
  galleryImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  galleryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    color: 'white',
    padding: '20px 15px 15px',
    transform: 'translateY(100%)',
    transition: 'transform 0.3s ease-in-out',
  },
  galleryTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
    margin: '0 0 5px 0',
  },
  galleryDescription: {
    fontSize: '0.9rem',
    opacity: 0.9,
    margin: '0',
  },
  galleryButtonContainer: {
    textAlign: 'center',
  },
  galleryButton: {
    padding: '12px 30px',
    backgroundColor: '#9C27B0',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  testimonialsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  testimonialCard: {
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderLeft: '4px solid #FF6B35',
  },
  testimonialText: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  testimonialAuthor: {
    fontWeight: 'bold',
    color: '#666',
    textAlign: 'right',
  },
  footer: {
    backgroundColor: '#2E7D32',
    color: 'white',
    textAlign: 'center',
    padding: '30px 20px',
    marginTop: '50px',
  },
  footerText: {
    fontSize: '1rem',
    margin: '0',
  },
  leadershipContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
    maxWidth: '1000px',
    margin: '0 auto',
  },
  leaderCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    border: '1px solid #f0f0f0',
  },
  leaderImageContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  leaderImage: {
    width: '150px',
    height: '180px',
    borderRadius: '10px',
    objectFit: 'cover',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    border: '3px solid #fff',
  },
  leaderName: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: '8px',
    margin: '0 0 8px 0',
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem',
      lineHeight: '1.3',
    },
  },
  leaderTitle: {
    fontSize: '1.1rem',
    color: '#FF6B35',
    fontWeight: '600',
    marginBottom: '15px',
    margin: '0 0 15px 0',
  },
  leaderDescription: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    margin: '0',
    '@media (max-width: 768px)': {
      fontSize: '0.95rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
      lineHeight: '1.5',
    },
  },
  sliderSection: {
    padding: '0',
    margin: '0',
    backgroundColor: '#f8f9fa',
  },
  sliderContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      height: '70vh',
    },
    '@media (max-width: 480px)': {
      height: '60vh',
    },
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'all 0.5s ease-in-out',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  slideOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideContent: {
    textAlign: 'center',
    color: 'white',
    maxWidth: '800px',
    padding: '0 20px',
    '@media (max-width: 768px)': {
      maxWidth: '90%',
      padding: '0 15px',
    },
    '@media (max-width: 480px)': {
      maxWidth: '95%',
      padding: '0 10px',
    },
  },
  slideTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    margin: '0 0 20px 0',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem',
      marginBottom: '15px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
      marginBottom: '10px',
      lineHeight: '1.2',
    },
  },
  slideDescription: {
    fontSize: '1.3rem',
    fontWeight: '300',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    margin: '0',
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem',
      lineHeight: '1.4',
    },
  },
  sliderArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: 'none',
    fontSize: '2rem',
    padding: '15px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    zIndex: 10,
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
      padding: '12px 15px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.2rem',
      padding: '10px 12px',
    },
  },
  sliderArrowLeft: {
    left: '20px',
    '@media (max-width: 480px)': {
      left: '10px',
    },
  },
  sliderArrowRight: {
    right: '20px',
    '@media (max-width: 480px)': {
      right: '10px',
    },
  },
  sliderIndicators: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 10,
  },
  sliderDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
}

// Add hover effects
Object.assign(styles.primaryButton, {
  ':hover': {
    backgroundColor: '#e55a2b'
  }
})

Object.assign(styles.secondaryButton, {
  ':hover': {
    backgroundColor: 'rgba(255,255,255,0.1)'
  }
})

Object.assign(styles.link, {
  ':hover': {
    transform: 'translateY(-5px)',
    backgroundColor: '#1B5E20'
  }
})

Object.assign(styles.galleryImage, {
  ':hover': {
    transform: 'scale(1.05)'
  }
})

Object.assign(styles.eventButton, {
  ':hover': {
    backgroundColor: '#1976D2'
  }
})

Object.assign(styles.galleryButton, {
  ':hover': {
    backgroundColor: '#7B1FA2'
  }
})

Object.assign(styles.leaderCard, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 25px rgba(0,0,0,0.15)'
  }
})

Object.assign(styles.sliderArrow, {
  ':hover': {
    backgroundColor: 'rgba(255,255,255,0.4)'
  }
})

Object.assign(styles.galleryItem, {
  ':hover': {
    transform: 'translateY(-5px)'
  }
})

Object.assign(styles.galleryImage, {
  ':hover': {
    transform: 'scale(1.05)'
  }
})

Object.assign(styles.achievementCard, {
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
  }
})

Object.assign(styles.achievementImage, {
  ':hover': {
    transform: 'scale(1.1)'
  }
})

Object.assign(styles.achievementButton, {
  ':hover': {
    backgroundColor: '#e55a2b',
    transform: 'translateY(-2px)'
  }
})

Object.assign(styles.activityCard, {
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
  }
})

Object.assign(styles.activityImage, {
  ':hover': {
    transform: 'scale(1.1)'
  }
})

Object.assign(styles.activityButton, {
  ':hover': {
    backgroundColor: '#7B1FA2',
    transform: 'translateY(-2px)'
  }
})

// Add CSS animations for section-specific 3D backgrounds
const sectionAnimations = `
  <style>
    @keyframes leadershipGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes leadershipFloat {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(15px, -10px) rotate(90deg); }
      50% { transform: translate(-10px, 15px) rotate(180deg); }
      75% { transform: translate(10px, -8px) rotate(270deg); }
    }
    
    @keyframes leadershipRotate {
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.05); }
      100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes leadershipPulse {
      0%, 100% { transform: scale(1); opacity: 0.45; }
      50% { transform: scale(1.15); opacity: 0.7; }
    }
    
    @keyframes leadershipBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    
    @keyframes leadershipSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes achievementGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes achievementFloat {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(18px, -12px) rotate(90deg); }
      50% { transform: translate(-12px, 18px) rotate(180deg); }
      75% { transform: translate(12px, -10px) rotate(270deg); }
    }
    
    @keyframes achievementSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes achievementBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-18px); }
    }
    
    @keyframes achievementPulse {
      0%, 100% { transform: scale(1); opacity: 0.4; }
      50% { transform: scale(1.2); opacity: 0.7; }
    }
    
    @keyframes achievementScale {
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.25) rotate(180deg); }
    }
    
    @keyframes achievementRotate {
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.08); }
      100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes culturalGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes culturalFloat {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(20px, -15px) rotate(90deg); }
      50% { transform: translate(-15px, 20px) rotate(180deg); }
      75% { transform: translate(15px, -12px) rotate(270deg); }
    }
    
    @keyframes culturalRotate {
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.1); }
      100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes culturalWave {
      0%, 100% { transform: translateY(0) scaleX(1); }
      50% { transform: translateY(-16px) scaleX(1.08); }
    }
    
    @keyframes culturalPulse {
      0%, 100% { transform: scale(1); opacity: 0.4; }
      50% { transform: scale(1.18); opacity: 0.7; }
    }
    
    @keyframes culturalDance {
      0%, 100% { transform: translateX(0) rotate(0deg); }
      25% { transform: translateX(12px) rotate(90deg); }
      50% { transform: translateX(-12px) rotate(180deg); }
      75% { transform: translateX(8px) rotate(270deg); }
    }
    
    @keyframes culturalSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes culturalScale {
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.22) rotate(180deg); }
    }
    
    @keyframes galleryGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes galleryFloat {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(22px, -18px) rotate(90deg); }
      50% { transform: translate(-18px, 22px) rotate(180deg); }
      75% { transform: translate(18px, -15px) rotate(270deg); }
    }
    
    @keyframes galleryRotate {
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.12); }
      100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes galleryZoom {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }
    
    @keyframes galleryPulse {
      0%, 100% { transform: scale(1); opacity: 0.4; }
      50% { transform: scale(1.2); opacity: 0.7; }
    }
    
    @keyframes galleryTwist {
      0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
      25% { transform: rotateX(90deg) rotateY(45deg); }
      50% { transform: rotateX(180deg) rotateY(90deg); }
      75% { transform: rotateX(270deg) rotateY(135deg); }
    }
    
    @keyframes gallerySway {
      0%, 100% { transform: translateX(0) rotate(0deg); }
      25% { transform: translateX(15px) rotate(45deg); }
      50% { transform: translateX(-15px) rotate(-45deg); }
      75% { transform: translateX(10px) rotate(22deg); }
    }
    
    @keyframes galleryFlip {
      0%, 100% { transform: rotateY(0deg) translateZ(0); }
      50% { transform: rotateY(180deg) translateZ(20px); }
    }
    
    @keyframes galleryScale {
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.3) rotate(180deg); }
    }
    
    @keyframes galleryLightGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes galleryLightFloat {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
      25% { transform: translate(10px, -8px) scale(1.05); opacity: 0.5; }
      50% { transform: translate(-8px, 12px) scale(0.95); opacity: 0.4; }
      75% { transform: translate(8px, -6px) scale(1.02); opacity: 0.45; }
    }
    
    /* Responsive Styles */
    @media (max-width: 1200px) {
      .section-container {
        padding: 50px 15px !important;
        max-width: 100% !important;
      }
    }
    
    @media (max-width: 768px) {
      .section-container {
        padding: 40px 15px !important;
      }
      .section-title {
        font-size: 2rem !important;
        margin-bottom: 30px !important;
      }
      .floating-element {
        width: 40px !important;
        height: 40px !important;
      }
      .content-container {
        padding: 0 15px !important;
      }
      .grid-container {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
        gap: 20px !important;
      }
      .button-container {
        flex-direction: column !important;
        gap: 15px !important;
      }
      .primary-button, .secondary-button {
        width: 100% !important;
        padding: 12px 20px !important;
        font-size: 1rem !important;
      }
    }
    
    @media (max-width: 480px) {
      .section-container {
        padding: 30px 10px !important;
      }
      .section-title {
        font-size: 1.5rem !important;
        margin-bottom: 20px !important;
        border-bottom: 2px solid #FF6B35 !important;
      }
      .floating-element {
        width: 30px !important;
        height: 30px !important;
      }
      .content-container {
        padding: 0 10px !important;
      }
      .grid-container {
        grid-template-columns: 1fr !important;
        gap: 15px !important;
      }
      .card-element {
        margin-bottom: 15px !important;
      }
      .image-container {
        height: 180px !important;
      }
      .text-content {
        font-size: 0.9rem !important;
        padding: 15px !important;
      }
      .primary-button, .secondary-button {
        padding: 10px 15px !important;
        font-size: 0.9rem !important;
      }
    }
    
    @media (max-width: 320px) {
      .section-container {
        padding: 20px 8px !important;
      }
      .section-title {
        font-size: 1.3rem !important;
      }
      .floating-element {
        display: none !important;
      }
      .content-container {
        padding: 0 8px !important;
      }
    }
  </style>
`;

// Inject the animations into the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('div');
  styleElement.innerHTML = sectionAnimations;
  document.head.appendChild(styleElement.firstElementChild);
}

export default Home
