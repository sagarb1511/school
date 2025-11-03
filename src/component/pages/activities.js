import React, { useState, useEffect } from 'react';
import { database } from '../../config/firebase';
import { ref, onValue } from 'firebase/database';

// Fallback image URL
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";

const ActivityCard = ({ activity, onClick }) => {
  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
  };

  return (
    <div 
      onClick={onClick}
      className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden m-4 transform hover:scale-105 transition duration-300 cursor-pointer"
    >
      <img
        className="w-full h-48 object-cover"
        src={activity.image || FALLBACK_IMAGE}
        alt={activity.heading}
        onError={handleImageError}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{activity.heading}</h2>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{activity.description}</p>
        {activity.description && activity.description.length > 100 && (
          <span className="text-purple-600 text-xs font-semibold mt-1 block">Click to read more...</span>
        )}
      </div>
    </div>
  );
};

const CulturalActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Fetch activities from Firebase
  useEffect(() => {
    const activitiesRef = ref(database, 'School/activities');
    
    const unsubscribe = onValue(activitiesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object of activities to an array
        const activitiesArray = Object.keys(data).map(key => ({
          id: key,
          heading: data[key].competitionName || data[key].heading,
          description: data[key].description,
          image: data[key].image,
          ...data[key]
        }));
        setActivities(activitiesArray);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching activities:", error);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-700 mx-auto mb-4"></div>
          <p className="text-gray-700">Loading activities...</p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-2xl md:text-4xl font-bold text-center text-purple-700 mb-6 md:mb-10 mt-2 md:mt-0">
            🎭 School Activities
          </h1>
          {activities.length > 0 ? (
            <div className="flex flex-wrap justify-center">
              {activities.map((activity, index) => (
                <ActivityCard 
                  key={index} 
                  activity={activity} 
                  onClick={() => setSelectedActivity(activity)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600">No activities found. Please check back later.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal for full activity details */}
      {selectedActivity && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedActivity(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-200 z-10 shadow-lg"
            >
              ×
            </button>

            {/* Image */}
            <div className="w-full h-64 md:h-96 bg-gray-200 overflow-hidden rounded-t-2xl">
              <img
                src={selectedActivity.image || FALLBACK_IMAGE}
                alt={selectedActivity.heading}
                className="w-full h-full object-cover"
                onError={(e) => e.target.src = FALLBACK_IMAGE}
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {selectedActivity.heading}
              </h2>

              {/* Description */}
              <div className="bg-purple-50 rounded-xl p-5 mb-4">
                <h3 className="text-lg font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  📝 Description
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedActivity.description}
                </p>
              </div>

              {/* Created Date */}
              {selectedActivity.createdAt && (
                <div className="text-sm text-gray-500 mt-4">
                  📅 Added on: {new Date(selectedActivity.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile-specific CSS */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
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

export default CulturalActivities;
