import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

const LanguageDropdown = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative group">
      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#3c2d2d] text-[#e0ddd7] text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {getTranslation('changeLanguage', language)}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-[#3c2d2d] rotate-45"></div>
      </div>

      {/* Language Dropdown Button with animation */}
      <div className="relative">
        <div className="relative inline-block">
          {/* Permanent highlight border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#832936] to-[#775448] opacity-30"></div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex items-center space-x-2 px-3 py-2 text-sm font-medium text-[#e0ddd7] bg-gradient-to-r from-[#832936]/80 to-[#775448]/80 hover:from-[#832936] hover:to-[#775448] rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#b29990] min-w-[60px] sm:min-w-[100px] border border-[#b29990]/50 hover:border-[#b29990] group-hover:animate-pulse"
            aria-label={getTranslation('selectLanguage', language)}
            aria-expanded={isOpen}
            title={getTranslation('changeLanguage', language)}
          >
            <span className="text-lg flex-shrink-0">{currentLanguage?.flag}</span>
            <span className="hidden sm:inline text-ellipsis overflow-hidden whitespace-nowrap">
              {currentLanguage?.name}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-1 bg-[#e0ddd7] shadow-2xl border border-[#b29990] rounded-lg py-1 z-[9999] min-w-[140px] w-full animate-slideDown">
            <div className="px-3 py-1 text-xs text-[#3c2d2d] border-b border-[#b29990] mb-1 font-semibold">
              {getTranslation('selectLanguage', language)}
            </div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center px-3 py-2 text-sm transition-all duration-200 ${
                  language === lang.code
                    ? 'bg-gradient-to-r from-[#832936] to-[#775448] text-[#e0ddd7] font-semibold'
                    : 'text-[#3c2d2d] hover:bg-gradient-to-r hover:from-[#b29990] hover:to-[#977765] hover:text-[#e0ddd7]'
                }`}
                title={`${getTranslation('switchTo', language)} ${lang.name}`}
              >
                <span className="text-lg w-6 flex-shrink-0">{lang.flag}</span>
                <span className="text-left flex-grow mx-2">{lang.name}</span>
                {language === lang.code && (
                  <span className="text-[#e0ddd7] w-4 flex-shrink-0">✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageDropdown;
