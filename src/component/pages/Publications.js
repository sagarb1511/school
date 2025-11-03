import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../config/firebase';

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('All');

  // Function to handle PDF viewing
  const handleViewPdf = (pdfBase64, pdfName) => {
    try {
      // Extract base64 data (remove data:application/pdf;base64, prefix if present)
      const base64Data = pdfBase64.includes('base64,') 
        ? pdfBase64.split('base64,')[1] 
        : pdfBase64;
      
      // Convert base64 to binary
      const binaryString = window.atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      // Create blob from binary data
      const blob = new Blob([bytes], { type: 'application/pdf' });
      
      // Create object URL
      const blobUrl = URL.createObjectURL(blob);
      
      // Open in new tab
      window.open(blobUrl, '_blank');
      
      // Clean up the URL after a delay
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
    } catch (error) {
      console.error('Error viewing PDF:', error);
      alert('Unable to view PDF. Please try downloading instead.');
    }
  };

  // Fetch publications from Firebase
  useEffect(() => {
    const researchRef = ref(database, 'School/research');
    
    const unsubscribe = onValue(researchRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const publicationsArray = Object.keys(data).map(key => {
          const item = data[key];
          const publication = {
            id: key,
            title: item.headingName || 'Untitled Research',
            authors: item.authorsName ? item.authorsName.split(',').map(a => a.trim()) : ['Unknown'],
            type: item.publicationType || 'Research Paper', // Use actual type from Firebase
            journal: item.publishedIn || 'Not specified',
            year: item.createdAt ? new Date(item.createdAt).getFullYear() : new Date().getFullYear(),
            image: item.image || 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=60',
            pdf: item.pdf || null,
            pdfName: item.pdfName || 'research.pdf'
          };
          console.log('Loaded publication:', publication.title, 'Type:', publication.type, 'Raw publicationType:', item.publicationType);
          return publication;
        });
        setPublications(publicationsArray);
      } else {
        setPublications([]);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching publications:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const types = ['All', 'Research Paper', 'Book', 'Others'];
  
  const filteredPublications = selectedType === 'All' 
    ? publications 
    : publications.filter(pub => {
        console.log('Filtering:', pub.title, 'Type:', pub.type, 'Selected:', selectedType, 'Match:', pub.type === selectedType);
        return pub.type === selectedType;
      });
  
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

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading publications...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && publications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No publications available yet.</p>
            </div>
          )}

          {/* Publications Grid */}
          {!loading && publications.length > 0 && (
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
                  
                  {publication.pdf ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewPdf(publication.pdf, publication.pdfName)}
                        className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                      </button>
                      <a
                        href={publication.pdf}
                        download={publication.pdfName}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                        </svg>
                        Download
                      </a>
                    </div>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg text-sm font-medium cursor-not-allowed"
                    >
                      No PDF Available
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          )}
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