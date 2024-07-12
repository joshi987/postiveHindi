import React from 'react';
import Lots from '../assets/img/lots.png';

function Fomomessage() {
  return (
    <div className="relative p-8 m-0 md:m-8 rounded-2xl shadow-xl bg-gradient-to-r bg-blue-100 text-white min-w-full md:min-w-96">
      {/* Content */}
      <div className="relative text-black">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          हमारा समाधान
        </h2>

        <p className="font-semibold text-sm md:text-lg leading-relaxed mb-4">
          हमारा शैक्षिक गेम बच्चों को मनोरंजक गतिविधियों के जरिए उनका फोकस और संज्ञानात्मक क्षमताएं बेहतर बनाने में मदद करता है, जिससे वे खेलते-खेलते सीखते हैं।
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">विशेषताएं</h3>
        <ul className="list-disc pl-5 mb-4">
          <li className="text-sm md:text-lg leading-relaxed">मिलान जोड़ियों के साथ स्मृति प्रतिधारण में सुधार</li>
          <li className="text-sm md:text-lg leading-relaxed">पैटर्न पहचान: पैटर्न की पहचान और पूरा करके विश्लेषणात्मक कौशल बढ़ाएं</li>
          <li className="text-sm md:text-lg leading-relaxed">फोकस व्यायाम: इंटरैक्टिव कार्यों के माध्यम से ध्यान अवधि बनाएं</li>
        </ul>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">लाभ</h3>
        <ul className="list-disc pl-5">
          <li className="text-sm md:text-lg leading-relaxed">बढ़ी हुई मेमोरी: इंटरैक्टिव गेम जो मेमोरी रिटेंशन को बढ़ावा देते हैं</li>
          <li className="text-sm md:text-lg leading-relaxed">बेहतर फोकस: मजेदार गतिविधियां जो धीरे-धीरे फोकस अवधि को बढ़ाती हैं</li>
          <li className="text-sm md:text-lg leading-relaxed">गंभीर सोच: पहेलियाँ और चुनौतियाँ जो समस्या-समाधान कौशल विकसित करती हैं</li>
        </ul>
      </div>
      {/* Image */}
      <div className="hidden md:block absolute bottom-0 right-0 m-4"> {/* Hidden on small screens, visible on medium and larger */}
        <img 
          src={Lots} 
          alt="Lots" 
          className="w-32 h-32 md:w-48 md:h-48" 
        />
      </div>
    </div>
  );
}

export default Fomomessage;
