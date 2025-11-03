import React, { useState, useRef, useEffect } from "react";


const Academic = () => {
  const [selectedDept, setSelectedDept] = useState("");
  const coursesRef = useRef(null);

  // ✅ Department & Courses Data
  const departments = {
     Arts: [
      "B.A. Economics",
      "B.A. History",
      "B.A. Geography",
    ],
     Commerce: [
      "Moder Management Practices",
      "Business Regulatory Framework",
      "Co-Operative Development",
      "Business Environment",
      "Advance Accountancy",
    ],
    
    
    Science: [
      "B.Sc. Chemistry",
      // "B.Sc. Microbiology",
      "B.Sc. Computer Science",
      
    ],
   
   
     BCA: [
      "Problem Solving Techniques",
      "Computer Architecture",
    ],
  };

  const handleDeptClick = (dept) => {
    if (selectedDept === dept) {
      setSelectedDept(""); // Collapse if same department clicked again
    } else {
      setSelectedDept(dept);
      
      // For mobile devices, scroll to courses section after state update
      const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
      if (isMobile) {
        // Use requestAnimationFrame to ensure state update and DOM render complete
        requestAnimationFrame(() => {
          setTimeout(() => {
            if (coursesRef.current) {
              const yOffset = -20; // Small offset from top
              const element = coursesRef.current;
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              
              window.scrollTo({
                top: y,
                behavior: 'smooth'
              });
            }
          }, 300); // Wait for animation and rendering
        });
      }
    }
  };

  // Auto-scroll to courses section on mobile when department is selected
  useEffect(() => {
    if (selectedDept && coursesRef.current) {
      // Check if it's mobile view (screen width <= 768px) or touch device
      const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
      
      if (isMobile) {
        // Longer delay to ensure the courses section is fully rendered
        setTimeout(() => {
          if (coursesRef.current) {
            // Try multiple scroll methods for better mobile compatibility
            try {
              // Method 1: scrollIntoView with options
              coursesRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
            } catch (error) {
              // Method 2: Fallback for older mobile browsers
              const elementTop = coursesRef.current.offsetTop;
              const headerOffset = 80; // Account for any fixed headers
              const offsetPosition = elementTop - headerOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }
        }, 200); // Increased delay for mobile rendering
      }
    }
  }, [selectedDept]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="py-12 px-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-10">
          🎓 Academic Departments
        </h1>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full">
          {Object.keys(departments).map((dept) => (
            <div
              key={dept}
              onClick={() => handleDeptClick(dept)}
              className={`cursor-pointer bg-white shadow-lg rounded-2xl p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                selectedDept === dept ? "border-blue-500" : "border-transparent"
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {dept}
              </h2>
              <p className="text-gray-500">
                Click to view all {dept.toLowerCase()} courses
              </p>
            </div>
          ))}
        </div>

        {/* Course Cards */}
        {selectedDept && (
          <div ref={coursesRef} className="mt-10 w-full max-w-5xl" style={{ scrollMarginTop: '20px' }}>
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">
                📚 {selectedDept} Courses Offered
              </h2>
              <p className="text-center text-blue-600 text-sm">
                Explore our comprehensive {selectedDept.toLowerCase()} programs
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {departments[selectedDept].map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {course}
                  </h3>
                  <p className="text-sm text-gray-500">
                    A detailed and practical curriculum designed to strengthen
                    your foundation in {selectedDept.toLowerCase()} studies.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Academic;
