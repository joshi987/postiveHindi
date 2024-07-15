import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Logo from '../assets/img/Brain.png';
import Boy from '../assets/img/boy.png';
import Girl from '../assets/img/girl.png';
import Form from './Form';

const Header = () => {
  return (
    <HelmetProvider>
      <>
        {/* Header Section */}
        <div className="top-0 z-50 bg-white shadow-md h-20 md:h-24 lg:h-28 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12">
          <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 flex-grow">
            <img src={Logo} alt="QuizQuest Logo" className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            <img src={Boy} alt="Boy" className="hidden md:block w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" /> {/* Hide on small screens */}
            <h1 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-red-800 to-yellow-900 md:text-sm lg:text-md text-center shadow-lg flex-1">
              बच्चों में फोकस, स्मृति और संज्ञानात्मक कौशल में सुधार के लिए डिज़ाइन की गई आकर्षक गतिविधियाँ।
            </h1>
            <img src={Girl} alt="Girl" className="hidden md:block w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" /> {/* Hide on small screens */}
          </div>
          <div className="hidden md:block">
            <Form />
          </div>
        </div>
        <div className="block md:hidden mt-4">
          <Form />
        </div>
      </>
    </HelmetProvider>
  );
};

export default Header;
