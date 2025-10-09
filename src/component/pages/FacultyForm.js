import React from "react";


const TeachingStaff = () => {
  const teachingStaff = [
    {
      id: 1,
      name: "Dr. Vilas Shinde",
      position: "Principal",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 2,
      name: "Prof. Priya Patil",
      position: "Head of Chemistry Department",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 3,
      name: "Mr. Amit Joshi",
      position: "Mathematics Lecturer",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 4,
      name: "Mrs. Sneha Deshmukh",
      position: "English Lecturer",
      photo: "https://images.unsplash.com/photo-1551836026-d5c88ac5c4d9?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 5,
      name: "Mr. Rajesh Pawar",
      position: "Physics Lecturer",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 6,
      name: "Mrs. Kavita Mane",
      position: "Computer Science Faculty",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 7,
      name: "Mr. Sunil Patankar",
      position: "Economics Lecturer",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 8,
      name: "Mrs. Meena Kulkarni",
      position: "Biology Lecturer",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* 3D Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="floating-shapes">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`shape shape-${i % 5} ${i % 2 === 0 ? 'animate-float-slow' : 'animate-float-fast'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-fast"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="py-10 px-6">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            🎓 Teaching Staff
          </h1>
          <p className="text-center text-gray-300 mb-10 text-lg">
            Meet our dedicated and experienced faculty members
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teachingStaff.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center p-6 border border-white/20 hover:border-white/40 hover:scale-105 group"
              >
                <div className="relative inline-block">
                  <div className="relative">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-400/50 shadow-lg group-hover:border-blue-400/80 transition-all duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(teacher.name)}&background=3B82F6&color=fff&size=200`;
                      }}
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-spin-slow opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  {teacher.name}
                </h2>
                <p className="text-gray-300 text-sm bg-black/20 rounded-full px-3 py-1 inline-block group-hover:bg-black/30 transition-all duration-300">
                  {teacher.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-medium 6s ease-in-out infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .shape {
          position: absolute;
          opacity: 0.1;
          animation-timing-function: ease-in-out;
        }
        
        .shape-0 {
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #3B82F6, #8B5CF6);
          border-radius: 50%;
        }
        
        .shape-1 {
          width: 30px;
          height: 30px;
          background: linear-gradient(45deg, #10B981, #3B82F6);
          border-radius: 10px;
          transform: rotate(45deg);
        }
        
        .shape-2 {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #8B5CF6, #EC4899);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        
        .shape-3 {
          width: 35px;
          height: 35px;
          background: linear-gradient(45deg, #F59E0B, #EF4444);
          border-radius: 5px;
        }
        
        .shape-4 {
          width: 45px;
          height: 45px;
          background: linear-gradient(45deg, #06B6D4, #10B981);
          clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
};

export default TeachingStaff;