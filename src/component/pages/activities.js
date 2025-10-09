import React from 'react';


// Cultural activities data with dummy photos
const activities = [
  {
    id: 1,
    name: "Dance Competition",
    description: "Students perform classical, folk, and modern dance styles showcasing rhythm and culture.",
    photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Music Night",
    description: "Solo singers, bands, and instrumentalists create a vibrant evening full of melodies.",
    photo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Drama & Skit",
    description: "Stage plays and street dramas on social and cultural themes performed by students.",
    photo: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Art & Rangoli",
    description: "Creative competitions including painting, rangoli, and poster-making to express ideas.",
    photo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Fashion Show",
    description: "A cultural runway featuring traditional attire and modern themes with student participation.",
    photo: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
];

const ActivityCard = ({ activity }) => {
  const handleImageError = (e) => {
    // Fallback image if the original fails to load
    e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden m-4 transform hover:scale-105 transition duration-300">
      <img
        className="w-full h-48 object-cover"
        src={activity.photo}
        alt={activity.name}
        onError={handleImageError}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{activity.name}</h2>
        <p className="text-gray-600 text-sm mt-2">{activity.description}</p>
      </div>
    </div>
  );
};

const CulturalActivities = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
      
    </div>
  );
};

export default CulturalActivities;
