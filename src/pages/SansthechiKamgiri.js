import React, { useState } from 'react';

const awardsData = [
  {
    src: '/images/award1.jpg',
    title: 'राष्ट्रीय सन्मान पारितोषिक सुवर्णपदक विजेती (नवी दिल्ली)',
  },
  {
    src: '/images/award2.jpg',
    title: 'ISO 9001-2008 मानांकन प्राप्त',
  },
  {
    src: '/images/award3.jpg',
    title: 'राज्यस्तरीय बँको पुरस्कार प्राप्त',
  },
  {
    src: '/images/award4.jpg',
    title: 'राज्यस्तरीय दिपस्तंभ पुरस्कार प्राप्त',
  },
];

const Awards = () => {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const openFullscreen = (src) => setFullscreenImg(src);
  const closeFullscreen = () => setFullscreenImg(null);

  return (
    <div className="text-gray-800 px-4 sm:px-10 py-8 max-w-5xl mx-auto">
        <br /><br />
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">
        राष्ट्रीय सन्मान आणि पुरस्कार
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {awardsData.map((award, idx) => (
          <div
            key={idx}
            onClick={() => openFullscreen(award.src)}
            className="cursor-pointer flex items-center gap-4 bg-white p-4 rounded shadow-md
              transform transition-transform duration-300 hover:scale-105 
              hover:shadow-purple-600/50"
          >
            <img
              src={award.src}
              alt={`award-${idx + 1}`}
              className="w-20 h-20 object-contain rounded"
              draggable={false}
            />
            <p className="text-lg">{award.title}</p>
          </div>
        ))}
      </div>

      {fullscreenImg && (
        <div
          onClick={closeFullscreen}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
        >
          <img
            src={fullscreenImg}
            alt="fullscreen-award"
            className="max-w-full max-h-full rounded shadow-lg "
            draggable={false}
          />
        </div>
      )}
    </div>
  );
};

export default Awards;
