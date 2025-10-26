
import React, { useState } from 'react';
import { 
  FaGraduationCap, 
  FaRunning, 
  FaHeart, 
  FaFirstAid, 
  FaFlask, 
  FaNewspaper, 
  FaAward, 
  FaMedal, 
  FaBook, 
  FaUsers, 
  FaMusic,
  FaCog,
  FaChartLine,
  FaHandsHelping,
  FaUserGraduate,
  FaCertificate,
  FaUniversity
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';

const Facilities = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('scholarships');

  const scholarshipFacilities = [
    {
      titleKey: 'sportsScholarship',
      icon: FaRunning,
      link: 'https://www.unishivaji.ac.in/uploads/dptsports/2025/March/12-Mar/sports-scholarship.pdf'
    },
    {
      titleKey: 'welfareScheme',
      icon: FaHeart,
      link: 'https://www.unishivaji.ac.in/uploads/students/2023/Kalyan%20Nidhi%202022%20All.pdf'
    },
    {
      titleKey: 'medicalAccident',
      icon: FaFirstAid,
      link: 'https://www.unishivaji.ac.in/uploads/studetns/2021/studetn%20Accident%20Scheme.pdf'
    },
    {
      titleKey: 'researchSensitization',
      icon: FaFlask,
      link: 'https://www.unishivaji.ac.in/uploads/admission/2022/award%20scholarship%20prize%20information%20RESEARCH%20SENSITAZATION/F%20RESEARCH%20SENSITIZATION.pdf'
    },
    {
      titleKey: 'collegeCompetition',
      icon: FaNewspaper,
      link: 'https://www.unishivaji.ac.in/uploads/bcud/2024/APRIL/PG-SEMINAR/महाविद्यालयीन%20नियतकालिक%20त्त्वधर्धा/२०२३-२४.pdf'
    },
    {
      titleKey: 'barodaAward',
      icon: FaAward,
      link: 'https://www.unishivaji.ac.in/uploads/admission/2024/Saptember/PG-Admission/2-Sept/Baroda%20Prize%202024.pdf'
    },
    {
      titleKey: 'presidentMedal',
      icon: FaMedal,
      link: 'https://www.unishivaji.ac.in/uploads/admission/2024/JUNE/1106/2024%20-2025%20President%20of%20india%20award.pdf'
    },
    {
      titleKey: 'meritScholarship',
      icon: FaGraduationCap,
      link: 'https://www.unishivaji.ac.in/uploads/admission/2022/award%20scholarship%20Prize%20information/SHIVAJI%20UNIVERSITY%20MERIT%20SCHOLARSHIP/A%20SHIVAJI%20UNIVERSITY%20MERIT%20OSCHOLARSHIP.pdf'
    },
    {
      titleKey: 'readingRoom',
      icon: FaBook,
      link: 'https://www.unishivaji.ac.in/uploads/library/Membership/Main%20Reading%20Application%20Format%20%20NEW.pdf'
    },
    {
      titleKey: 'walkInFacility',
      icon: FaUsers,
      link: 'https://www.unishivaji.ac.in/library/Membership-and-Reading-Facilities'
    },
    {
      titleKey: 'youthFestival',
      icon: FaMusic,
      link: 'https://www.unishivaji.ac.in/uploads/student/2024/August/DSW-Dept/22-aug/youthfestival&2024-25.pdf'
    }
  ];

  const nepFacilities = [
    {
      titleKey: 'majorMinorSelection',
      descriptionKey: 'majorMinorDesc',
      icon: FaGraduationCap
    },
    {
      titleKey: 'subjectContinuity',
      descriptionKey: 'subjectContinuityDesc',
      icon: FaChartLine
    },
    {
      titleKey: 'openElective',
      descriptionKey: 'openElectiveDesc',
      icon: FaBook
    },
    {
      titleKey: 'oeFlexibility',
      descriptionKey: 'oeFlexibilityDesc',
      icon: FaCog
    },
    {
      titleKey: 'secCourse',
      descriptionKey: 'secCourseDesc',
      icon: FaUserGraduate
    },
    {
      titleKey: 'vecCourse',
      descriptionKey: 'vecCourseDesc',
      icon: FaHeart
    },
    {
      titleKey: 'aecCourse',
      descriptionKey: 'aecCourseDesc',
      icon: FaUniversity
    },
    {
      titleKey: 'iksCourse',
      descriptionKey: 'iksCourseDesc',
      icon: FaMedal
    },
    {
      titleKey: 'ccCourse',
      descriptionKey: 'ccCourseDesc',
      icon: FaUsers
    },
    {
      titleKey: 'cepProgram',
      descriptionKey: 'cepProgramDesc',
      icon: FaHandsHelping
    },
    {
      titleKey: 'projectIntegration',
      descriptionKey: 'projectIntegrationDesc',
      icon: FaFlask
    },
    {
      titleKey: 'ojtTraining',
      descriptionKey: 'ojtTrainingDesc',
      icon: FaAward
    },
    {
      titleKey: 'multipleExit',
      descriptionKey: 'multipleExitDesc',
      icon: FaCertificate
    },
    {
      titleKey: 'honorsResearch',
      descriptionKey: 'honorsResearchDesc',
      icon: FaGraduationCap
    }
  ];






  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getTranslation('facilitiesTitle', language)}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getTranslation('facilitiesSubtitle', language)}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 px-4">
          <div className="bg-white rounded-xl p-1 shadow-lg w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-1">
              <button
                onClick={() => setActiveTab('scholarships')}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-center text-sm sm:text-base ${
                  activeTab === 'scholarships'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {getTranslation('scholarshipsTab', language)}
              </button>
              <button
                onClick={() => setActiveTab('nep')}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-center text-sm sm:text-base ${
                  activeTab === 'nep'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {getTranslation('nepTab', language)}
              </button>
            </div>
          </div>
        </div>

        {/* Scholarships Tab */}
        {activeTab === 'scholarships' && (
          <>

            {/* Scholarship Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {scholarshipFacilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-lg bg-blue-100 border-blue-200">
                          <IconComponent className="text-2xl text-blue-600" />
                        </div>
                        <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight line-clamp-2">
                        {getTranslation(facility.titleKey, language)}
                      </h3>
                      
                      <a
                        href={facility.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm w-full justify-center"
                      >
                        {getTranslation('viewDetails', language)}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* NEP 2020 Tab */}
        {activeTab === 'nep' && (
          <>
            {/* NEP Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-center text-green-800 mb-4">
                {getTranslation('nepIntroTitle', language)}
              </h2>
              <p className="text-gray-700 text-center text-lg leading-relaxed">
                {getTranslation('nepIntroText', language)}
              </p>
            </div>


            {/* NEP Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {nepFacilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-lg bg-green-100 border-green-200">
                          <IconComponent className="text-2xl text-green-600" />
                        </div>
                        <span className="text-sm font-bold text-green-600">#{index + 1}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                        {getTranslation(facility.titleKey, language)}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {getTranslation(facility.descriptionKey, language)}
                      </p>
                      
                      <div className="text-center">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {getTranslation('nepFeature', language)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* NEP Key Highlights */}
            {/* <div className="bg-green-50 rounded-2xl p-8 mb-12 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 text-center mb-6">
                NEP 2020 मुख्य वैशिष्ट्ये
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800">बहु-विषय अभ्यासक्रम</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800">कौशल्य विकासावर भर</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800">बहु-निर्गमन पर्याय</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800">संशोधन संधी</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800">व्यावसायिक प्रशिक्षण</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800">समुदाय सहभाग</p>
                  </div>
                </div>
              </div>
            </div> */}
          </>
        )}


        {/* Footer Note */}
        <div className="text-center">
          <div className={`rounded-2xl p-8 ${
            activeTab === 'scholarships' 
              ? 'bg-blue-600 text-white' 
              : 'bg-green-600 text-white'
          }`}>
            <h3 className="text-2xl font-bold mb-4">
              {activeTab === 'scholarships' 
                ? getTranslation('studentDevelopmentTitle', language)
                : getTranslation('modernEducationTitle', language)}
            </h3>
            <p className={`text-lg max-w-2xl mx-auto ${
              activeTab === 'scholarships' ? 'text-blue-100' : 'text-green-100'
            }`}>
              {activeTab === 'scholarships' 
                ? getTranslation('studentDevelopmentDesc', language)
                : getTranslation('modernEducationDesc', language)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;