import React from 'react';
import { FaGraduationCap, FaRunning, FaHeart, FaFirstAid, FaFlask, FaNewspaper, FaAward, FaMedal, FaBook, FaUsers, FaMusic } from 'react-icons/fa';

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: 'शिवाजी विद्यापीठ प्रोत्साहनपर क्रिडा शिष्यवृत्ती योजना',
      icon: FaRunning,
      link: 'https://www.unishivaji.ac.in/uploads/dptsports/2025/March/12-Mar/sports-scholarship.pdf',
      category: 'Sports'
    },
    {
      id: 2,
      title: 'कल्याण निधी योजना',
      icon: FaHeart,
      link: 'https://www.unishivaji.ac.in/uploads/students/2023/Kalyan%20Nidhi%202022%20All.pdf',
      category: 'Welfare'
    },
    {
      id: 3,
      title: 'वैद्यकिय अपघात मदत निधी योजना',
      icon: FaFirstAid,
      link: 'https://www.unishivaji.ac.in/uploads/studetns/2021/studetn%20Accident%20Scheme.pdf',
      category: 'Medical'
    },
    {
      id: 4,
      title: 'Research Sensitization Scheme',
      icon: FaFlask,
      link: 'https://www.unishivaji.ac.in/uploads/admission/2022/award%20scholarship%20prize%20information%20RESEARCH%20SENSITAZATION/F%20RESEARCH%20SENSITIZATION.pdf',
      category: 'Research'
    },
    {
      id: 5,
      title: 'शिवाजी विद्यापीठ सलग्न महाविद्यालयीन नियतकालिक स्पर्धा',
      icon: FaNewspaper,
      link: 'https://www.unishivaji.ac.in/uploads/bcud/2024/APRIL/PG-SEMINAR/महाविद्यालयीन%20नियतकालिक%20त्त्वधर्धा/२०२३-२४.pdf',
      category: 'Competition'
    },
    {
      id: 6,
      title: 'Baroda Achievers Award',
      icon: FaAward,
      link: 'https://www.unishivaji.ac.in/uploads/admission/2024/Saptember/PG-Admission/2-Sept/Baroda%20Prize%202024.pdf',
      category: 'Award'
    },
    {
      id: 7,
      title: 'दि प्रेसिंडेंट ऑफ इंडिया मेडल फॉर जनरल प्रोफेशियंसी, शिवाजी विद्यापीठ',
      icon: FaMedal,
      link: 'https://www.unishivaji.ac.in/uploads/admission/2024/JUNE/1106/2024%20-2025%20President%20of%20india%20award.pdf',
      category: 'Prestige'
    },
    {
      id: 8,
      title: 'शिवाजी विद्यापीठ मेरिट स्कॉलरशिप',
      icon: FaGraduationCap,
      link: 'https://www.unishivaji.ac.in/uploads/admission/2022/award%20scholarship%20Prize%20information/SHIVAJI%20UNIVERSITY%20MERIT%20SCHOLARSHIP/A%20SHIVAJI%20UNIVERSITY%20MERIT%20OSCHOLARSHIP.pdf',
      category: 'Scholarship'
    },
    {
      id: 9,
      title: 'Main Reading Room Facilities For Student of UPSC, NET/SET/& CA/CS/ICWE Banking',
      icon: FaBook,
      link: 'https://www.unishivaji.ac.in/uploads/library/Membership/Main%20Reading%20Application%20Format%20%20NEW.pdf',
      category: 'Study'
    },
    {
      id: 10,
      title: 'Walk in Users/Reference Facility',
      icon: FaUsers,
      link: 'https://www.unishivaji.ac.in/library/Membership-and-Reading-Facilities',
      category: 'Library'
    },
    {
      id: 11,
      title: 'युवक महोत्सव',
      icon: FaMusic,
      link: 'https://www.unishivaji.ac.in/uploads/student/2024/August/DSW-Dept/22-aug/youthfestival&2024-25.pdf',
      category: 'Cultural'
    }
  ];

//   const categories = [
//     { name: 'All', count: facilities.length },
//     // { name: 'Scholarship', count: facilities.filter(f => f.category === 'Scholarship').length },
//     // { name: 'Sports', count: facilities.filter(f => f.category === 'Sports').length },
//     // { name: 'Welfare', count: facilities.filter(f => f.category === 'Welfare').length },
//     // { name: 'Research', count: facilities.filter(f => f.category === 'Research').length },
//     // { name: 'Cultural', count: facilities.filter(f => f.category === 'Cultural').length },
//     // { name: 'Study', count: facilities.filter(f => f.category === 'Study').length }
//   ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredFacilities = selectedCategory === 'All' 
    ? facilities 
    : facilities.filter(facility => facility.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      Sports: 'bg-blue-100 text-blue-800 border-blue-200',
      Welfare: 'bg-green-100 text-green-800 border-green-200',
      Medical: 'bg-red-100 text-red-800 border-red-200',
      Research: 'bg-purple-100 text-purple-800 border-purple-200',
      Competition: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      Award: 'bg-orange-100 text-orange-800 border-orange-200',
      Prestige: 'bg-pink-100 text-pink-800 border-pink-200',
      Scholarship: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      Study: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      Library: 'bg-gray-100 text-gray-800 border-gray-200',
      Cultural: 'bg-teal-100 text-teal-800 border-teal-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getIconColor = (category) => {
    const colors = {
      Sports: 'text-blue-600',
      Welfare: 'text-green-600',
      Medical: 'text-red-600',
      Research: 'text-purple-600',
      Competition: 'text-yellow-600',
      Award: 'text-orange-600',
      Prestige: 'text-pink-600',
      Scholarship: 'text-indigo-600',
      Study: 'text-cyan-600',
      Library: 'text-gray-600',
      Cultural: 'text-teal-600'
    };
    return colors[category] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            शिवाजी विद्यापीठ विद्यार्थी योजना
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            विद्यापीठामार्फत विद्यार्थ्यांसाठी राबवत असलेल्या सर्व योजनांची माहिती
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Filters
        // <div className="flex flex-wrap justify-center gap-3 mb-8">
        //   {categories.map((category) => (
        //     <button
        //       key={category.name}
        //       onClick={() => setSelectedCategory(category.name)}
        //       className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
        //         selectedCategory === category.name
        //           ? 'bg-blue-600 text-white shadow-lg transform scale-105'
        //           : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        //       }`}
        //     >
        //       {category.name} ({category.count})
        //     </button>
        //   ))}
        // </div> */}

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFacilities.map((facility) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${getCategoryColor(facility.category)}`}>
                      <IconComponent className={`text-2xl ${getIconColor(facility.category)}`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(facility.category)}`}>
                      {facility.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {facility.title}
                  </h3>
                  
                  <a
                    href={facility.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      

        {/* Footer Note */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              विद्यार्थ्यांच्या संपूर्ण विकासासाठी
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              शिवाजी विद्यापीठ विद्यार्थ्यांच्या शैक्षणिक, क्रीडा, सांस्कृतिक आणि सर्वांगीण विकासासाठी 
              विविध योजना राबवत आहे. प्रत्येक विद्यार्थ्याला त्यांच्या क्षमतेनुसार संधी मिळावी यासाठी 
              विद्यापीठ सतत प्रयत्नशील आहे.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
