import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';
import { ref, onValue } from 'firebase/database';
import { database } from '../../config/firebase';


const Achievements = () => {
  const { language } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch achievements from Firebase
  useEffect(() => {
    const achievementsRef = ref(database, 'School/Achievement');
    
    const unsubscribe = onValue(achievementsRef, (snapshot) => {
      try {
        const data = snapshot.val();
        if (data) {
          // Convert object to array and include the key as id
          const achievementsList = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }));
          // Sort by date (newest first)
          achievementsList.sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
          setAchievements(achievementsList);
        } else {
          setAchievements([]);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error loading achievements:', err);
        setError('Failed to load achievements. Please try again later.');
        setLoading(false);
      }
    }, (error) => {
      console.error('Error fetching data:', error);
      setError('Failed to load achievements. Please check your connection.');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">
              {error}
            </div>
          ) : achievements.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={item.photoUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                    }}
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h2>
                    {item.description && (
                      <p className="text-gray-600 text-sm mb-4">
                        {item.description}
                      </p>
                    )}
                    <p className="text-blue-600 font-medium text-sm">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No achievements found. Check back later!
            </div>
          )}
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
