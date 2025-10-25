import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../translations/translations';
import approvedPlaceImage from '../assets/1.jpg';

const Approver = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {getTranslation('approvedPlaces', language) || 'Approved Places'}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Image Container */}
        <div className="bg-white rounded-2xl shadow-xl p-2 md:p-4">
          <div className="overflow-x-auto">
            <img 
              src={approvedPlaceImage} 
              alt="Approved Places Table"
              className="w-full h-auto rounded-lg border border-gray-200"
            />
          </div>
          
          {/* Download Button */}
          <div className="mt-4 text-center">
            <a 
              href={approvedPlaceImage} 
              download="approved-places-table.jpg"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {getTranslation('downloadTable', language) || 'Download Table'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approver;
