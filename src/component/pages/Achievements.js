import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';


const Achievements = () => {
  const { language } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  // Achievement data with translations
  const achievements = [
    {
      id: 1,
      title: getTranslation('bestCollegeAward', language),
      description: getTranslation('bestCollegeAwardDesc', language),
      date: "March 2024",
      image:
        "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: getTranslation('nationalScienceFair', language),
      description: getTranslation('nationalScienceFairDesc', language),
      date: "December 2023",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: getTranslation('sportsChampionship', language),
      description: getTranslation('sportsChampionshipDesc', language),
      date: "October 2023",
      image:
        "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: getTranslation('culturalFestivalWinner', language),
      description: getTranslation('culturalFestivalWinnerDesc', language),
      date: "August 2023",
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="bg-gray-100" style={{ 
      minHeight: '100vh', 
      paddingTop: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch'
    }}>
      <div className="pt-2 pb-10 px-3 md:pt-6 md:px-6" style={{ flex: '1' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-700 mb-6 md:mb-10 mt-2 md:mt-0">
            🎓 {getTranslation('achievementsTitle', language)}
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <p className="text-blue-600 font-medium text-sm">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile-specific CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          body {
            overflow-x: hidden;
          }
          * {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
};

export default Achievements;
