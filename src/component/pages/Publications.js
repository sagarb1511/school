import React, { useState } from 'react';


// Sample data for papers and books with publisher information
const publications = [
  {
    id: 1,
    title: "Advanced Mathematics in Engineering",
    authors: ["Dr. Rajesh Kumar", "Prof. Priya Sharma"],
    type: "Research Paper",
    journal: "International Journal of Mathematics",
    year: 2023,
    publisher: "Academic Press",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    title: "Environmental Science and Sustainability",
    authors: ["Dr. Meena Kulkarni", "Mr. Sunil Patankar"],
    type: "Book",
    journal: "Environmental Studies Quarterly",
    year: 2023,
    publisher: "Green Publications",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    title: "Computer Science Fundamentals",
    authors: ["Mrs. Kavita Mane"],
    type: "Textbook",
    journal: "Tech Education Review",
    year: 2022,
    publisher: "Tech Books Ltd",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 4,
    title: "Modern Physics Applications",
    authors: ["Mr. Rajesh Pawar", "Dr. Amit Joshi"],
    type: "Research Paper",
    journal: "Physics Today",
    year: 2023,
    publisher: "Science Publications",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=60"
  }
];

const Publications = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPublisher, setSelectedPublisher] = useState(null);

  const types = ['All', 'Research Paper', 'Book', 'Textbook'];
  
  const filteredPublications = selectedType === 'All' 
    ? publications 
    : publications.filter(pub => pub.type === selectedType);

  const PublisherModal = ({ publisher, onClose }) => {
    if (!publisher) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Publisher Information</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ×
            </button>
          </div>
          <p className="text-gray-700">Publisher: {publisher}</p>
          <p className="text-gray-600 mt-2">Contact information and details would be displayed here.</p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 3D Animated Background with Light Colors */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 18%, #f0fff0 36%, #fef7e0 54%, #fdf2f8 72%, #f8fafc 90%, #f0f9ff 100%)',
        backgroundSize: '400% 400%',
        animation: 'publicationsGradient 28s ease infinite'
      }}>
        {/* Floating 3D Publication Elements with Light Colors */}
        <div style={{
          position: 'absolute',
          top: '12%',
          left: '6%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, #dbeafe, #bfdbfe)',
          borderRadius: '20px',
          opacity: 0.4,
          animation: 'publicationsFloat 17s ease-in-out infinite, publicationsRotate 13s linear infinite',
          boxShadow: '0 18px 35px rgba(59, 130, 246, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '65%',
          right: '12%',
          width: '85px',
          height: '85px',
          background: 'linear-gradient(45deg, #dcfce7, #bbf7d0)',
          borderRadius: '50%',
          opacity: 0.45,
          animation: 'publicationsFloat 19s ease-in-out infinite reverse, publicationsPulse 7s ease-in-out infinite',
          boxShadow: '0 16px 32px rgba(34, 197, 94, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '18%',
          left: '72%',
          width: '95px',
          height: '95px',
          background: 'linear-gradient(45deg, #fef3c7, #fef7e0)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          opacity: 0.4,
          animation: 'publicationsFloat 15s ease-in-out infinite, publicationsSpin 11s linear infinite',
          boxShadow: '0 19px 38px rgba(245, 158, 11, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '22%',
          width: '75px',
          height: '75px',
          background: 'linear-gradient(45deg, #fce7f3, #fdf2f8)',
          borderRadius: '15px',
          opacity: 0.35,
          animation: 'publicationsFloat 18s ease-in-out infinite, publicationsWave 9s ease-in-out infinite',
          boxShadow: '0 15px 30px rgba(236, 72, 153, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '42%',
          right: '28%',
          width: '110px',
          height: '110px',
          background: 'linear-gradient(45deg, #e0e7ff, #eef2ff)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          opacity: 0.4,
          animation: 'publicationsFloat 14s ease-in-out infinite reverse, publicationsBounce 8s ease-in-out infinite',
          boxShadow: '0 22px 45px rgba(99, 102, 241, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '78%',
          left: '38%',
          width: '70px',
          height: '70px',
          background: 'linear-gradient(45deg, #f0fdf4, #f7fee7)',
          borderRadius: '50%',
          opacity: 0.45,
          animation: 'publicationsFloat 12s ease-in-out infinite, publicationsScale 10s ease-in-out infinite',
          boxShadow: '0 14px 28px rgba(22, 163, 74, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '48%',
          right: '8%',
          width: '90px',
          height: '90px',
          background: 'linear-gradient(45deg, #fef2e2, #fed7aa)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          opacity: 0.35,
          animation: 'publicationsFloat 16s ease-in-out infinite, publicationsTwist 12s ease-in-out infinite',
          boxShadow: '0 18px 35px rgba(251, 146, 60, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '12%',
          left: '18%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, #f0f9ff, #e0f2fe)',
          borderRadius: '25px',
          opacity: 0.4,
          animation: 'publicationsFloat 13s ease-in-out infinite reverse, publicationsDance 11s ease-in-out infinite',
          boxShadow: '0 16px 32px rgba(14, 165, 233, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '18%',
          right: '38%',
          width: '65px',
          height: '65px',
          background: 'linear-gradient(45deg, #fdf4ff, #fae8ff)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          opacity: 0.4,
          animation: 'publicationsFloat 11s ease-in-out infinite, publicationsFlip 9s ease-in-out infinite',
          boxShadow: '0 13px 26px rgba(168, 85, 247, 0.15)'
        }}></div>
      </div>

      <div style={{ 
        padding: '40px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
            📚 Publications
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Publications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((publication) => (
              <div
                key={publication.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {publication.type}
                    </span>
                    <span className="text-gray-500 text-sm">{publication.year}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {publication.title}
                  </h2>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-1">Authors:</p>
                    <p className="text-sm font-medium text-gray-800">
                      {publication.authors.join(', ')}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Published in:</p>
                    <p className="text-sm font-medium text-gray-800">{publication.journal}</p>
                  </div>
                  
                  <button
                    onClick={() => setSelectedPublisher(publication.publisher)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Publisher Info
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Publisher Modal */}
          <PublisherModal 
            publisher={selectedPublisher} 
            onClose={() => setSelectedPublisher(null)} 
          />
        </div>
      </div>
      
      
      
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes publicationsGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes publicationsFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(18px, -12px) rotate(90deg); }
          50% { transform: translate(-12px, 18px) rotate(180deg); }
          75% { transform: translate(12px, -8px) rotate(270deg); }
        }
        
        @keyframes publicationsRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.08); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes publicationsPulse {
          0%, 100% { transform: scale(1); opacity: 0.45; }
          50% { transform: scale(1.15); opacity: 0.7; }
        }
        
        @keyframes publicationsSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes publicationsWave {
          0%, 100% { transform: translateY(0) scaleX(1); }
          50% { transform: translateY(-15px) scaleX(1.08); }
        }
        
        @keyframes publicationsBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes publicationsScale {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
        
        @keyframes publicationsTwist {
          0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(45deg); }
          50% { transform: rotateX(180deg) rotateY(90deg); }
          75% { transform: rotateX(270deg) rotateY(135deg); }
        }
        
        @keyframes publicationsDance {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(8px) rotate(90deg); }
          50% { transform: translateX(-8px) rotate(180deg); }
          75% { transform: translateX(4px) rotate(270deg); }
        }
        
        @keyframes publicationsFlip {
          0%, 100% { transform: rotateY(0deg) translateZ(0); }
          50% { transform: rotateY(180deg) translateZ(15px); }
        }
      `}</style>
    </div>
  );
};

export default Publications;