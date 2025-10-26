import React, { useState, useEffect } from 'react';
import { database } from '../../config/firebase';
import { ref, onValue } from 'firebase/database';

// Fallback image URL
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";

const ActivityCard = ({ activity }) => {
  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
  };

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden m-4 transform hover:scale-105 transition duration-300">
      <img
        className="w-full h-48 object-cover"
        src={activity.image || FALLBACK_IMAGE}
        alt={activity.heading}
        onError={handleImageError}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{activity.heading}</h2>
        <p className="text-gray-600 text-sm mt-2">{activity.description}</p>
      </div>
    </div>
  );
};

const CulturalActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch activities from Firebase
  useEffect(() => {
    const activitiesRef = ref(database, 'School/Activity');
    
    const unsubscribe = onValue(activitiesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object of activities to an array
        const activitiesArray = Object.values(data);
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
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600">No activities found. Please check back later.</p>
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

export default CulturalActivities;
