// import React from 'react';
// import { useLanguage } from '../../context/LanguageContext';
// import { getTranslation } from '../../translations/translations';
// import { FaSearch } from 'react-icons/fa';

// const ApprovedPlace = () => {
//   const { language } = useLanguage();

//   // Sample data - replace with your actual data
//   const approvedPlaces = [
//     { id: 1, name: 'Place 1', location: 'Mumbai', status: 'Approved' },
//     { id: 2, name: 'Place 2', location: 'Pune', status: 'Pending' },
//     { id: 3, name: 'Place 3', location: 'Nashik', status: 'Approved' },
//     { id: 4, name: 'Place 4', location: 'Nagpur', status: 'Rejected' },
//   ];

//   // Course/program data with exact structure from image
//   const coursePrograms = [
//     { 
//       id: 1, 
//       name: 'B.A.', 
//       intakeCapacity: { I: '120', II: '120', III: '120' },
//       minQualification: ''
//     },
//     { 
//       id: 2, 
//       name: 'B.Com', 
//       intakeCapacity: { I: '120', II: '120', III: '120' },
//       minQualification: '12th Pass or its equivalent'
//     },
//     { 
//       id: 3, 
//       name: 'B.Sc', 
//       intakeCapacity: { I: '120', II: '120', III: '120' },
//       minQualification: ''
//     },
//     { 
//       id: 4, 
//       name: 'B.C.A', 
//       intakeCapacity: { I: '60', II: '60', III: '60' },
//       minQualification: ''
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             {getTranslation('approvedPlaces', language) || 'Approved Places'}
//           </h1>
//           <p className="text-lg text-gray-600">
//             {getTranslation('viewApprovedLocations', language) || 'View all approved locations and their status'}
//           </p>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
//         </div>
      

//         {/* Course Programs Table - Exact structure from image */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="p-6 border-b border-gray-200">
//             <h2 className="text-xl font-bold text-gray-800 text-center">
//               Number of seats approved in respect of each course or programs
//             </h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th rowSpan={2} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     Sr.No.
//                   </th>
//                   <th rowSpan={2} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     Name of Program
//                   </th>
//                   <th colSpan={3} scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     Non Grantable : Intake Capacity
//                   </th>
//                   <th rowSpan={2} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Minimum Qualification
//                   </th>
//                 </tr>
//                 <tr>
//                   <th scope="col" className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     I
//                   </th>
//                   <th scope="col" className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     II
//                   </th>
//                   <th scope="col" className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     III
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {coursePrograms.map((program, index) => (
//                   <tr key={program.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
//                       {index + 1}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
//                       {program.name}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center border-r border-gray-200">
//                       {program.intakeCapacity.I}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center border-r border-gray-200">
//                       {program.intakeCapacity.II}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center border-r border-gray-200">
//                       {program.intakeCapacity.III}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {program.minQualification}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApprovedPlace;






// import React from 'react';
// import { useLanguage } from '../../context/LanguageContext';
// import { getTranslation } from '../../translations/translations';
// import { FaSearch } from 'react-icons/fa';

// const ApprovedPlace = () => {
//   const { language } = useLanguage();

//   // Sample data - replace with your actual data
//   const approvedPlaces = [
//     { id: 1, name: 'Place 1', location: 'Mumbai', status: 'Approved' },
//     { id: 2, name: 'Place 2', location: 'Pune', status: 'Pending' },
//     { id: 3, name: 'Place 3', location: 'Nashik', status: 'Approved' },
//     { id: 4, name: 'Place 4', location: 'Nagpur', status: 'Rejected' },
//   ];

//   // Course/program data with exact structure from image
//   const coursePrograms = [
//     { 
//       id: 1, 
//       name: 'B.A.', 
//       intakeCapacity: { I: '120', II: '120', III: '120' }
//     },
//     { 
//       id: 2, 
//       name: 'B.Com', 
//       intakeCapacity: { I: '120', II: '120', III: '120' }
//     },
//     { 
//       id: 3, 
//       name: 'B.Sc', 
//       intakeCapacity: { I: '120', II: '120', III: '120' }
//     },
//     { 
//       id: 4, 
//       name: 'B.C.A', 
//       intakeCapacity: { I: '60', II: '60', III: '60' }
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             {getTranslation('approvedPlaces', language) || 'Approved Places'}
//           </h1>
//           <p className="text-lg text-gray-600">
//             {getTranslation('viewApprovedLocations', language) || 'View all approved locations and their status'}
//           </p>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
//         </div>

      

//         {/* Course Programs Table - Exact structure from image */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="p-6 border-b border-gray-200">
//             <h2 className="text-xl font-bold text-gray-800 text-center">
//               Number of seats approved in respect of each course or programs
//             </h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th rowSpan={2} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     Sr.No.
//                   </th>
//                   <th rowSpan={2} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     Name of Program
//                   </th>
//                   <th colSpan={3} scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     Non Grantable : Intake Capacity
//                   </th>
//                 </tr>
//                 <tr>
//                   <th scope="col" className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     I
//                   </th>
//                   <th scope="col" className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     II
//                   </th>
//                   <th scope="col" className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                     III
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {coursePrograms.map((program, index) => (
//                   <tr key={program.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
//                       {index + 1}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
//                       {program.name}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center border-r border-gray-200">
//                       {program.intakeCapacity.I}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center border-r border-gray-200">
//                       {program.intakeCapacity.II}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center border-r border-gray-200">
//                       {program.intakeCapacity.III}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {/* Minimum Qualification displayed only once at the bottom */}
//           <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
//             <p className="text-sm font-medium text-gray-900">
//               Minimum Qualification: 12th Pass or its equivalent
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApprovedPlace;




import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';
import { FaSearch, FaUniversity, FaGraduationCap, FaChartBar } from 'react-icons/fa';

const ApprovedPlace = () => {
  const { language } = useLanguage();

  // Sample data - replace with your actual data
  const approvedPlaces = [
    { id: 1, name: 'Place 1', location: 'Mumbai', status: 'Approved' },
    { id: 2, name: 'Place 2', location: 'Pune', status: 'Pending' },
    { id: 3, name: 'Place 3', location: 'Nashik', status: 'Approved' },
    { id: 4, name: 'Place 4', location: 'Nagpur', status: 'Rejected' },
  ];

  // Course/program data with exact structure from image
  const coursePrograms = [
    { 
      id: 1, 
      name: 'B.A.', 
      intakeCapacity: { I: '120', II: '120', III: '120' }
    },
    { 
      id: 2, 
      name: 'B.Com', 
      intakeCapacity: { I: '120', II: '120', III: '120' }
    },
    { 
      id: 3, 
      name: 'B.Sc', 
      intakeCapacity: { I: '120', II: '120', III: '120' }
    },
    { 
      id: 4, 
      name: 'B.C.A', 
      intakeCapacity: { I: '60', II: '60', III: '60' }
    },
  ];

  // Statistics data
  const stats = [
    {
      icon: FaUniversity,
      label: 'Total Programs',
      value: '4',
      color: 'bg-blue-500'
    },
    {
      icon: FaGraduationCap,
      label: 'Total Seats',
      value: '1,260',
      color: 'bg-green-500'
    },
    {
      icon: FaChartBar,
      label: 'Approval Rate',
      value: '75%',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FaUniversity className="text-white text-2xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {getTranslation('ApprovedPlaces', language) || 'Approved Places'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {getTranslation('ViewApprovedLocations', language) || 'Comprehensive overview of approved educational institutions and their program capacities'}
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full shadow-sm"></div>
        </div>

      


        {/* Course Programs Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FaGraduationCap className="text-white text-2xl" />
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                Number of seats approved in respect of each course or programs
              </h2>
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <p className="text-blue-100 text-center text-lg">
              Academic Year 2024-2025 | All India Council for Technical Education
            </p>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th rowSpan={2} scope="col" className="px-8 py-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200 bg-blue-50">
                    <div className="flex items-center space-x-2">
                      <span>#</span>
                      <span className="text-xs text-gray-500">Sr.No.</span>
                    </div>
                  </th>
                  <th rowSpan={2} scope="col" className="px-8 py-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200 bg-blue-50">
                    <div className="flex items-center space-x-2">
                      <FaUniversity className="text-gray-500" />
                      <span>Program Name</span>
                    </div>
                  </th>
                  <th colSpan={3} scope="col" className="px-8 py-6 text-center text-sm font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200 bg-green-50">
                    <div className="flex items-center justify-center space-x-2">
                      <FaChartBar className="text-gray-500" />
                      <span>Non Grantable : Intake Capacity</span>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider border-r border-gray-200 bg-green-50">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-blue-600">I</span>
                      <span className="text-xs text-gray-500">Year 1</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider border-r border-gray-200 bg-green-50">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-blue-600">II</span>
                      <span className="text-xs text-gray-500">Year 2</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider border-r border-gray-200 bg-green-50">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-blue-600">III</span>
                      <span className="text-xs text-gray-500">Year 3</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coursePrograms.map((program, index) => (
                  <tr 
                    key={program.id} 
                    className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group"
                  >
                    <td className="px-8 py-6 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-100 group-hover:border-blue-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <span className="text-blue-700 font-bold">{index + 1}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg font-semibold text-gray-900 border-r border-gray-100 group-hover:border-blue-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                          <FaGraduationCap className="text-white text-sm" />
                        </div>
                        <span>{program.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-lg text-center font-bold text-gray-900 border-r border-gray-100 group-hover:border-blue-200">
                      <div className="bg-blue-50 rounded-lg py-3 px-4 group-hover:bg-blue-100 transition-colors">
                        {program.intakeCapacity.I}
                      </div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-lg text-center font-bold text-gray-900 border-r border-gray-100 group-hover:border-blue-200">
                      <div className="bg-green-50 rounded-lg py-3 px-4 group-hover:bg-green-100 transition-colors">
                        {program.intakeCapacity.II}
                      </div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-lg text-center font-bold text-gray-900 border-r border-gray-100 group-hover:border-blue-200">
                      <div className="bg-purple-50 rounded-lg py-3 px-4 group-hover:bg-purple-100 transition-colors">
                        {program.intakeCapacity.III}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Minimum Qualification Section */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <FaGraduationCap className="text-yellow-600 text-lg" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Minimum Qualification Requirement
                  </p>
                  <p className="text-gray-600 mt-1">
                    12th Pass or its equivalent from recognized board
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="text-sm font-medium text-gray-700">March 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-900 px-8 py-4">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <FaUniversity className="text-blue-400" />
                <span>Education Management System</span>
              </div>
              <div>
                <span>© 2024 All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ApprovedPlace;