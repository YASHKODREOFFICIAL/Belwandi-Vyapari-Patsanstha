import React from 'react';
import gramdaivat from '../assets/gramdaivat.png';
import uttamdake from '../assets/uttamdake.png';
import arunkalane from '../assets/arunkalane.png';
import sopandake from '../assets/sppanhirve.png';
import kisandake from '../assets/kisanvaradhe.png';

const MukhyaPaan = () => {
  return (
    <div className="p-6 flex flex-col items-center justify-start min-h-screen bg-white text-center">

      {/* Purple Header Info Section */}
      <br /><br />
      <div className="bg-purple-700 px-4 py-5 rounded-xl mb-6 w-full max-w-3xl space-y-2">
        {/* First two lines: black text with white stroke */}
        <p className="text-lg md:text-xl font-bold text-black drop-shadow-[0_0_1px_white]">
          ठेव नव्हे भविष्याची साथ । कर्ज नव्हे मदतीचा हात ।
        </p>
        <p className="text-sm md:text-base font-semibold text-black drop-shadow-[0_0_1px_white]">
          नोंदणी क्र. - ANR/SGA/RSR/CR/1256/2003-04 Reg. Dt.- 16/01/2004
        </p>

        {/* Rest of the lines: white text */}
        <p className="text-sm md:text-base font-semibold text-white">
          राष्ट्रीय सन्मान पारितोषिक सुवर्णपदक विजेती (नवी दिल्ली)
        </p>
        <p className="text-sm md:text-base font-semibold text-white">
          ISO 9001-2008 मानांकन प्राप्त
        </p>
        <p className="text-sm md:text-base font-semibold text-white">
          राज्यस्तरीय बँको पुरस्कार प्राप्त, राज्यस्तरीय दिपस्तंभ पुरस्कार प्राप्त
        </p>
      </div>
      {/* Divider with circles */}
    <div className="flex items-center justify-center my-6 w-full max-w-3xl">
    <div className="w-3 h-3 bg-purple-800 rounded-full mr-2"></div>
    <div className="w-3 h-3 bg-purple-800 rounded-full mr-2"></div>
    <div className="flex-grow h-[2px] bg-purple-400"></div>
    <div className="w-3 h-3 bg-purple-800 rounded-full ml-2"></div>
    <div className="w-3 h-3 bg-purple-800 rounded-full ml-2"></div>
    </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4 border-b-2 border-purple-400 pb-2">
        ।।श्री ग्रामदैवत।।
      </h1>

      {/* Image and Caption */}
      <img
        src={gramdaivat}
        alt="श्री भैरवनाथ महाराज"
        className="w-72 md:w-96 rounded-xl shadow-lg mb-3"
      />
      <p className="text-xl md:text-2xl text-gray-700 font-semibold">
        श्री भैरवनाथ महाराज
      </p>
      <div className="flex items-center justify-center my-6 w-full max-w-3xl">
    <div className="w-3 h-3 bg-purple-800 rounded-full mr-2"></div>
    <div className="w-3 h-3 bg-purple-800 rounded-full mr-2"></div>
    <div className="flex-grow h-[2px] bg-purple-400"></div>
    <div className="w-3 h-3 bg-purple-800 rounded-full ml-2"></div>
    <div className="w-3 h-3 bg-purple-800 rounded-full ml-2"></div>
    </div>
    {/* संचालक मंडळ Section */}
<div className="text-center mb-8">
  <h2 className="text-2xl font-bold text-purple-800 mb-1">* संचालक मंडळ *</h2>
  <p className="text-md font-medium text-gray-700">सन - २०२३-२४ ते २०२८-२९</p>
</div>

{/* Directors Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full px-4">
  {[
    {
      name: "श्री. उत्तम धोंडीबा डाके",
      post: "संस्थापक-चेअरमन",
      mobile: "मो. ९४२२४१५०५०",
      img: [uttamdake],
    },
    {
      name: "श्री. अरुण नारायण काळाणे",
      post: "व्हा.चेअरमन",
      mobile: "मो. ९४२२७३८६७०",
      img: [arunkalane],
    },
    {
      name: "श्री. सोपान (तात्या) दत्तात्रय हिरवे",
      post: "मार्गदर्शक",
      mobile: "मो. ९४२३७५६२५१",
      img: [sopandake],
    },
    {
      name: "श्री. किसन दादासाहेब वऱ्हाडे",
      post: "मॅनेजर",
      mobile: "मो. ८९७५१०५१५१",
      img: [kisandake],
    },
  ].map((director, index) => (
    <div
      key={index}
      className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    >
      <img
        src={director.img}
        alt={director.name}
        className="w-full h-72 object-cover"
      />
      <div className="absolute inset-0 bg-purple-700 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
        <p className="text-lg font-bold group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          {director.name}
        </p>
        <p className="text-sm group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          ({director.post})
        </p>
        <p className="text-sm group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          {director.mobile}
        </p>
      </div>
    </div>
  ))}
</div>
{/* Additional Members Section */}
<br /><br />
{/* Member Grid: 3 rows × 7 columns */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl w-full px-2">
  {[
    { name: "श्री. युबराज विठ्ठल पवार", mobile: "मो. ९९२३७५६६६६" },
    { name: "श्री. अर्जुन घोंडीचा हिवरकर", mobile: "मो. ९४२३२०११९९" },
    { name: "श्री. दौलतराव मानसिंग भोसले", mobile: "मो. ९७३०१४४४६०" },
    { name: "श्री. ज्ञानदेव किसन बैद्य", mobile: "मो. ९४२१५५८५९६" },
    { name: "श्री. दिपक राजेंद्र कोद्रे", mobile: "मो. ९८५०२७९८०५" },
    { name: "श्री. अनिल स्बंडू शेलार", mobile: "मो. ९४२१५८८१४२" },
    { name: "श्री. राजेंद्र आण्णा साळवे", mobile: "मो. ८८०६३९७०२०" },
    { name: "श्री. शिवाजी बाजू श्रीराम", mobile: "मो. ९५५२४५२३२१" },
    { name: "सौ. वैशाली तुकाराम शेलार", mobile: "मो. ९४२१४३७९६५" },
    { name: "श्रीमती लता कैलास घोडेकर", mobile: "मो. ९६२३६५६११०" },
    { name: "श्री. बादल बाहुबली पितळे", mobile: "मो. ९७६७१२९१११" },
    { name: "श्री. संतोष लक्ष्मण हिस्ये", mobile: "मो. ९९७५०५७९३५" },
    { name: "श्री. विठ्ठल दशरथ लोखंडे", mobile: "मो. ९७६६२२९८१६" },
    { name: "श्री. प्रमोद अशोक क्षिरसागर", mobile: "मो. ९९२११३७१७१" },
    { name: "सौ. आशा सुभाष दरबडे", mobile: "(अकौंटंट)" },
    { name: "श्री. सचिन भगवान जाधव", mobile: "(शिपाई)" },
    { name: "श्री. प्रविण अशोक खेडकर", mobile: "(क्लार्क / ड्रायव्हर)" },
    { name: "श्री. गणेश पुरी साहेब", mobile: "(जिल्हा उपनिबंधक, अ, नगर)" },
    { name: "श्री. अभिमान थोरात", mobile: "(सहाय्यक निबंधक, श्रीगोंदा)" },
    { name: "श्री. पांडुरंग खेतमाळीस", mobile: "कायदेशीर सल्लागार मो. ९४२३४६२७४४" },
    { name: "श्री. नंदकुमार सुपेकर", mobile: "विमा सल्लागार मो. ९४२२२२३५५२" },
  ].map((person, index) => (
    <div
      key={index}
      className="relative group rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
    >
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-purple-800 font-semibold">
        {/* Replace div below with <img src={...} /> if images available */}
        Image {index + 1}
      </div>
      <div className="absolute inset-0 bg-purple-700 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex flex-col items-center justify-center text-white p-2 text-center text-sm">
        <p className="font-semibold group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          {person.name}
        </p>
        <p className="group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          {person.mobile}
        </p>
      </div>
    </div>
  ))}
</div>


    </div>
    
  );
};

export default MukhyaPaan;
