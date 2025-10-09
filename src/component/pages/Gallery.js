import React, { useState } from "react";


const Gallery = () => {
  // 🧩 Dummy Image Data with multiple images for each category
  const galleryData = [
    {
      id: 1,
      title: "College Campus",
      mainImage: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
      desc: "Beautiful view of our main campus building.",
      images: [
        "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "Science Laboratory",
      mainImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      desc: "Modern equipment and practical learning environment.",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581093458791-8a0a708b4f5d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581093458872-63c6e8c36d1e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581093458681-bdc2d4a6a84c?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      title: "Library Hall",
      mainImage: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
      desc: "Quiet and resourceful library for students.",
      images: [
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      title: "Computer Lab",
      mainImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      desc: "High-end systems for IT and Computer Science students.",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      title: "Cultural Event",
      mainImage: "https://images.unsplash.com/photo-1596496059846-0e7d89e9a88e?auto=format&fit=crop&w=800&q=80",
      desc: "Students performing during annual cultural fest.",
      images: [
        "https://images.unsplash.com/photo-1596496059846-0e7d89e9a88e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      title: "Sports Ground",
      mainImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      desc: "Inter-college sports events held every year.",
      images: [
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1549060279-7e168fce7090?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 7,
      title: "Classroom Learning",
      mainImage: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=800&q=80",
      desc: "Interactive classroom teaching with modern methods.",
      images: [
        "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 8,
      title: "Annual Function",
      mainImage: "https://images.unsplash.com/photo-1551503766-ac63b6956f9f?auto=format&fit=crop&w=800&q=80",
      desc: "Award ceremony for academic excellence.",
      images: [
        "https://images.unsplash.com/photo-1551503766-ac63b6956f9f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 9,
      title: "Campus Garden",
      mainImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
      desc: "Eco-friendly green environment around campus.",
      images: [
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560703650-5e35debefb5c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab995?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
      ]
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique categories from gallery data
  const categories = ['All', ...new Set(galleryData.map(item => item.title))];

  // Filter gallery items based on active filter
  const filteredGallery = activeFilter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.title === activeFilter);

  const openModal = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedCategory.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedCategory.images.length - 1 : prevIndex - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle keyboard navigation
  // React.useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (!selectedCategory) return;
      
  //     if (event.key === 'Escape') {
  //       closeModal();
  //     } else if (event.key === 'ArrowRight') {
  //       nextImage();
  //     } else if (event.key === 'ArrowLeft') {
  //       prevImage();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, [selectedCategory]);

  React.useEffect(() => {
  const handleKeyDown = (event) => {
    if (!selectedCategory) return;
    
    if (event.key === 'Escape') {
      closeModal();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [selectedCategory, nextImage, prevImage, closeModal]);


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
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 15%, #fef7e0 30%, #f0fff0 45%, #fdf2f8 60%, #f8fafc 75%, #e0f2fe 90%, #f0f9ff 100%)',
        backgroundSize: '400% 400%',
        animation: 'galleryGradient 25s ease infinite'
      }}>
        {/* Floating 3D Elements with Light Colors */}
        <div style={{
          position: 'absolute',
          top: '8%',
          left: '5%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, #dbeafe, #bfdbfe)',
          borderRadius: '30px',
          opacity: 0.4,
          animation: 'galleryFloat 18s ease-in-out infinite, galleryRotate 14s linear infinite',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '55%',
          right: '8%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, #dcfce7, #bbf7d0)',
          borderRadius: '50%',
          opacity: 0.45,
          animation: 'galleryFloat 20s ease-in-out infinite reverse, galleryPulse 7s ease-in-out infinite',
          boxShadow: '0 18px 35px rgba(34, 197, 94, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '12%',
          left: '65%',
          width: '110px',
          height: '110px',
          background: 'linear-gradient(45deg, #fef3c7, #fef7e0)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          opacity: 0.4,
          animation: 'galleryFloat 16s ease-in-out infinite, gallerySpin 12s linear infinite',
          boxShadow: '0 22px 45px rgba(245, 158, 11, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '18%',
          width: '85px',
          height: '85px',
          background: 'linear-gradient(45deg, #fce7f3, #fdf2f8)',
          borderRadius: '25px',
          opacity: 0.35,
          animation: 'galleryFloat 19s ease-in-out infinite, galleryWave 9s ease-in-out infinite',
          boxShadow: '0 16px 32px rgba(236, 72, 153, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '35%',
          right: '18%',
          width: '130px',
          height: '130px',
          background: 'linear-gradient(45deg, #e0e7ff, #eef2ff)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          opacity: 0.4,
          animation: 'galleryFloat 15s ease-in-out infinite reverse, galleryBounce 8s ease-in-out infinite',
          boxShadow: '0 25px 50px rgba(99, 102, 241, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '70%',
          left: '35%',
          width: '75px',
          height: '75px',
          background: 'linear-gradient(45deg, #f0fdf4, #f7fee7)',
          borderRadius: '50%',
          opacity: 0.45,
          animation: 'galleryFloat 13s ease-in-out infinite, galleryScale 10s ease-in-out infinite',
          boxShadow: '0 15px 30px rgba(22, 163, 74, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '5%',
          width: '105px',
          height: '105px',
          background: 'linear-gradient(45deg, #fef2e2, #fed7aa)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          opacity: 0.35,
          animation: 'galleryFloat 17s ease-in-out infinite, galleryTwist 11s ease-in-out infinite',
          boxShadow: '0 20px 40px rgba(251, 146, 60, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '8%',
          left: '12%',
          width: '95px',
          height: '95px',
          background: 'linear-gradient(45deg, #f0f9ff, #e0f2fe)',
          borderRadius: '20px',
          opacity: 0.4,
          animation: 'galleryFloat 14s ease-in-out infinite reverse, galleryDance 12s ease-in-out infinite',
          boxShadow: '0 18px 35px rgba(14, 165, 233, 0.15)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '12%',
          right: '30%',
          width: '70px',
          height: '70px',
          background: 'linear-gradient(45deg, #fdf4ff, #fae8ff)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          opacity: 0.4,
          animation: 'galleryFloat 12s ease-in-out infinite, galleryFlip 9s ease-in-out infinite',
          boxShadow: '0 14px 28px rgba(168, 85, 247, 0.15)'
        }}></div>
      </div>

      <div style={{ 
        padding: '48px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
          📸 College Gallery
        </h1>

        {/* Filter Dropdown */}
        <div style={{
          maxWidth: '300px',
          margin: '0 auto 30px',
          position: 'relative'
        }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#374151',
            textAlign: 'center'
          }}>
            Filter by Category
          </label>
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              border: '2px solid #e5e7eb',
              backgroundColor: 'white',
              fontSize: '16px',
              color: '#374151',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              outline: 'none',
              transition: 'all 0.3s ease',
              appearance: 'none',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' fill=\'%23374151\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              paddingRight: '40px'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <option value="All">🏫 All Categories</option>
            {categories.filter(cat => cat !== 'All').map((category) => {
              const icons = {
                'College Campus': '🏫',
                'Science Laboratory': '🔬',
                'Library Hall': '📚',
                'Computer Lab': '💻',
                'Cultural Event': '🎭',
                'Sports Ground': '⚽',
                'Classroom Learning': '📖',
                'Annual Function': '🎉',
                'Campus Garden': '🌿'
              };
              return (
                <option key={category} value={category}>
                  {icons[category] || '📷'} {category}
                </option>
              );
            })}
          </select>
        </div>

        {/* Results Info */}
        {activeFilter !== 'All' && (
          <div style={{
            textAlign: 'center',
            marginBottom: '20px',
            padding: '12px 20px',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #bfdbfe',
            maxWidth: '500px',
            margin: '0 auto 20px'
          }}>
            <p style={{
              color: '#1e40af',
              fontSize: '14px',
              fontWeight: '500',
              margin: 0
            }}>
              📋 Showing {filteredGallery.length} {filteredGallery.length === 1 ? 'item' : 'items'} in "{activeFilter}" category
            </p>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="space-y-8 max-w-6xl mx-auto" style={{
          animation: 'fadeIn 0.5s ease-in-out'
        }}>
          {filteredGallery.length > 0 ? (
            filteredGallery.map((item) => {
              const icons = {
                'College Campus': '🏫',
                'Science Laboratory': '🔬',
                'Library Hall': '📚',
                'Computer Lab': '💻',
                'Cultural Event': '🎭',
                'Sports Ground': '⚽',
                'Classroom Learning': '📖',
                'Annual Function': '🎉',
                'Campus Garden': '🌿'
              };
              
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  style={{
                    border: '1px solid #e5e7eb',
                    padding: '24px',
                    marginBottom: '24px'
                  }}
                >
                  {/* Header Section */}
                  <div style={{
                    marginBottom: '16px'
                  }}>
                    <h2 style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#1f2937',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>{icons[item.title] || '📷'}</span>
                      {item.title}
                    </h2>
                    
                    <p style={{
                      fontSize: '16px',
                      color: '#6b7280',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Images Row */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    overflowX: 'auto',
                    paddingBottom: '8px'
                  }}>
                    {item.images.slice(0, 5).map((image, index) => (
                      <div
                        key={index}
                        style={{
                          flexShrink: 0,
                          width: '180px',
                          height: '120px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease'
                        }}
                        onClick={() => {
                          setCurrentImageIndex(index);
                          openModal(item);
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        <img
                          src={image}
                          alt={`${item.title} ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80";
                          }}
                        />
                      </div>
                    ))}
                    
                    {/* Show More Button if more than 5 images */}
                    {item.images.length > 5 && (
                      <div
                        style={{
                          flexShrink: 0,
                          width: '180px',
                          height: '120px',
                          borderRadius: '8px',
                          backgroundColor: '#f3f4f6',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          border: '2px dashed #d1d5db',
                          transition: 'all 0.2s ease'
                        }}
                        onClick={() => openModal(item)}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#e5e7eb';
                          e.target.style.borderColor = '#9ca3af';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#f3f4f6';
                          e.target.style.borderColor = '#d1d5db';
                        }}
                      >
                        <div style={{
                          fontSize: '24px',
                          color: '#6b7280',
                          marginBottom: '4px'
                        }}>
                          +{item.images.length - 5}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: '#6b7280',
                          textAlign: 'center'
                        }}>
                          View More
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer Info */}
                  <div style={{
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid #f3f4f6',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      📸 {item.images.length} photos available
                    </span>
                    <button
                      onClick={() => openModal(item)}
                      style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#2563eb';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#3b82f6';
                      }}
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '60px 20px',
              color: '#6b7280'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                No items found
              </h3>
              <p style={{ fontSize: '14px' }}>
                No gallery items match the selected filter.
              </p>
            </div>
          )}
        </div>

        {/* Gallery Stats */}
        
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedCategory.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors duration-200"
              >
                ×
              </button>
            </div>

            {/* Main Image */}
            <div className="relative">
              <img
                src={selectedCategory.images[currentImageIndex]}
                alt={`${selectedCategory.title} ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80";
                }}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedCategory.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="p-4 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">More Images:</h3>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {selectedCategory.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedCategory.title} ${index + 1}`}
                    className={`w-20 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'border-blue-500 scale-105' 
                        : 'border-transparent hover:border-blue-300'
                    }`}
                    onClick={() => goToImage(index)}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="p-6">
              <p className="text-gray-600">{selectedCategory.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer note */}
      <p style={{
        textAlign: 'center',
        color: '#6b7280',
        marginTop: '40px',
        fontSize: '0.875rem',
        position: 'relative',
        zIndex: 1
      }}>
        *All images are for demo purposes (Unsplash © Free Use)*
      </p>
      
     
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes galleryGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes galleryFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(25px, -20px) rotate(90deg); }
          50% { transform: translate(-15px, 25px) rotate(180deg); }
          75% { transform: translate(20px, -15px) rotate(270deg); }
        }
        
        @keyframes galleryRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes galleryPulse {
          0%, 100% { transform: scale(1); opacity: 0.45; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
        
        @keyframes gallerySpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes galleryWave {
          0%, 100% { transform: translateY(0) scaleX(1); }
          50% { transform: translateY(-20px) scaleX(1.1); }
        }
        
        @keyframes galleryBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes galleryScale {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
        }
        
        @keyframes galleryTwist {
          0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(45deg); }
          50% { transform: rotateX(180deg) rotateY(90deg); }
          75% { transform: rotateX(270deg) rotateY(135deg); }
        }
        
        @keyframes galleryDance {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(12px) rotate(90deg); }
          50% { transform: translateX(-12px) rotate(180deg); }
          75% { transform: translateX(8px) rotate(270deg); }
        }
        
        @keyframes galleryFlip {
          0%, 100% { transform: rotateY(0deg) translateZ(0); }
          50% { transform: rotateY(180deg) translateZ(20px); }
        }
      `}</style>
    </div>
  );
};

export default Gallery;