import React from 'react';
import logo from '../assets/logo1.png'; // Make sure this path is correct

const IntroScreen = ({ onContinue }) => {
  return (
    <div className="fixed inset-0 bg-purple-800 flex flex-col items-center justify-center text-center px-4 z-50">
      <img
        src={logo}
        alt="Logo"
        className="w-24 h-24 md:w-32 md:h-32 mb-6 rounded-xl shadow-lg"
      />

      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-red-600 text-stroke-white">
        बेलवंडी व्यापारी ग्रामीण बिगरशेती सहकारी पतसंस्था मर्या.
      </h1>

      <p className="text-sm md:text-lg mb-2 text-black text-stroke-white">
        बेलवंडी बु.।।, ता. श्रीगोंदा जि. अहमदनगर (महाराष्ट्र) <br />
        Phone & Fax: ०२४८७ - २५०२५१
      </p>

      <p className="text-sm md:text-lg mb-6 text-black text-stroke-white">
        E-mail - belwandivyapari@gmail.com
      </p>

      <button
        onClick={onContinue}
        className="bg-white text-purple-800 px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-gray-100 transition"
      >
        Tap to Continue
      </button>
    </div>
  );
};

export default IntroScreen;
