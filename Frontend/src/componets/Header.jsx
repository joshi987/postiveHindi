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
        <div className="top-0 z-50 bg-white shadow-md h-20 md:h-24 lg:h-28 flex items-center justify-between px-4 md:px-8 lg:px-12">
          <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
          
            <img src={Logo} alt="QuizQuest Logo" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
            <img src={Boy} alt="Boy" className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" />
            <h1 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-red-800 to-yellow-900 md:text-md lg:text-lg text-center shadow-lg flex-1">
              बच्चों में फोकस, स्मृति और संज्ञानात्मक कौशल में सुधार के लिए डिज़ाइन की गई आकर्षक गतिविधियाँ।
            </h1>
            <img src={Girl} alt="Girl" className="hidden md:block md:w-16 md:h-16 lg:w-24 lg:h-24" /> {/* Hide on small screens */}
          </div>
          <div className="hidden md:block">
              <Form />
            </div>
        </div>
      </>
    </HelmetProvider>
  );
};

export default Header;
