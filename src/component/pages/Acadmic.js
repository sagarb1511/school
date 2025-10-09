import React, { useState } from "react";


const Academic = () => {
  const [selectedDept, setSelectedDept] = useState("");

  // ✅ Department & Courses Data
  const departments = {
    Science: [
      "B.Sc. Physics",
      "B.Sc. Chemistry",
      "B.Sc. Mathematics",
      "M.Sc. Physics",
      "M.Sc. Chemistry",
    ],
    Commerce: [
      "B.Com (General)",
      "M.Com (Advanced Accounting)",
      "Diploma in Business Management",
      "Certificate in Financial Accounting",
    ],
    Arts: [
      "B.A. English",
      "B.A. History",
      "B.A. Political Science",
      "M.A. Sociology",
      "M.A. Marathi",
    ],
  };

  const handleDeptClick = (dept) => {
    if (selectedDept === dept) {
      setSelectedDept(""); // Collapse if same department clicked again
    } else {
      setSelectedDept(dept);
    }
  };

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
          <div className="mt-10 w-full max-w-5xl">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
              {selectedDept} Courses Offered
            </h2>
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
