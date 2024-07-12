import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Logo from '../assets/img/Brain.png';
import Boy from '../assets/img/boy.png';
import Girl from '../assets/img/girl.png';

const Header = () => {
  const videoUrl = "http://yourwebsiteurl.com/assets/video/negative.mp4"; // Adjust this URL as needed
  const imageUrl = "http://yourwebsiteurl.com/assets/img/Brain.png"; // Adjust this URL as needed

  return (
    <HelmetProvider>
      <>
        {/* Header Section */}
        <div className="relative flex flex-col items-center justify-center inset-0">
          <div className="flex items-center space-x-2 md:space-x-4">
            <img src={Logo} alt="QuizQuest Logo" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
            <img src={Boy} alt="Boy" className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" />
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-red-800 to-yellow-900 md:text-2xl lg:text-2xl text-center shadow-lg">
            बच्चों में फोकस, स्मृति और संज्ञानात्मक कौशल में सुधार के लिए डिज़ाइन की गई आकर्षक गतिविधियाँ।
            </h1>
            <img src={Girl} alt="Girl" className="hidden md:block md:w-16 md:h-16 lg:w-24 lg:h-24" /> {/* Hide on small screens */}
          </div>
        </div>
      </>
    </HelmetProvider>
  );
};

export default Header;
