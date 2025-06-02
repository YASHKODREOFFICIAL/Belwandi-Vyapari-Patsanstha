import React from 'react';

const AmchyaBaddal = () => {
  const features = [
    {
      title: "लॉकर सुविधा",
      description: "आपली अनमोल ठेव सुरक्षित ठेवण्यासाठी सुरक्षित व वाजवी दरात स्वास लॉकर सुविधा उपलब्ध..."
    },
    {
      title: "व्यवहार सुविधा",
      description: "* मुदत ठेवीवर मासिक व्याज देण्याची सुविधा.\n* सर्व सभासदांना/कर्जदारांना /ठेवीदारांना विमा संरक्षण.\n* चेक क्लेरींग व्यवस्था.\n* डिमांड ड्राफ्ट/RTGS/NEFT ऑनलाईन पेमेंट सुविधा\n* स्थापनेपासून ऑडिट वर्ग अ."
    },
    {
      title: "ठेव योजना",
      description: "आपल्या लाडक्या मुला-मुलींच्या भविष्यासाठी:\n* आवर्त ठेव योजना\n* मुदत ठेव योजना\n* दामदुप्पट ठेव योजना"
    },
    {
      title: "संस्थेची वैशिष्ट्ये",
      description: "* उत्कृष्ट व्यवस्थापन व प्रशिक्षित सेवक वर्ग\n* स्वतःच्या मालकीची प्रशस्त इमारत\n* आर्थिक गरजांसाठी विनाविलंब कर्ज पुरवठा\n* संपूर्ण स्वभांडवली पतसंस्था\n* विनम्र व तत्पर सेवा"
    },
    {
      title: "आकर्षक व्याजदर",
      description: "४६ दिवस ते ९२ दिवस: ८.००%\n९३ दिवस ते १८० दिवस: ९.००%\n१८१ दिवस ते १२ महिने: ९.५०%\n१३ महिने ते त्यापुढे: १०.००%\nदामदुप्पट ठेव: ८४ महिने"
    },
    {
      title: "बचत ठेव योजना",
      description: "दैनंदिन व्यवहारासाठी व बचतीसाठी नाथकृपा ठेव योजना.\nघरपोच सेवा तसेच सेव्हिंग खाते उघडण्यासाठी:\n* फक्त ₹१००/-\n* १ आधार कार्ड झेरॉक्स\n* २ फोटो"
    },
    {
      title: "कर्ज सुविधा",
      description: "१) वाहन कर्ज\n२) हॉटेलसाठी कर्ज\n३) शैक्षणिक कर्ज\n४) कापड व्यवसायासाठी\n५) बांधकामासाठी\n६) शेतीपूरक व्यवसायासाठी\n७) दुग्ध व्यवसाय व इतर व्यवसायांसाठी\n\nदर: द.सा.द.शे. १४%"
    },
    {
      title: "विमा संरक्षण",
      description: "मुदत ठेव रक्कम ₹१००० पेक्षा जास्त असेल तर ₹१,००,००० विमा संरक्षण\n(₹२०,००० मेडीकल विमा समाविष्ट)"
    }
  ];

  return (
    <div className="bg-white px-4 py-8 min-h-screen flex flex-col items-center">
      <br /><br />
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-800">आमच्याबद्दल</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg max-w-4xl w-full bg-purple-700 text-white p-6 rounded-xl shadow-md">
        <div><span className="font-semibold">१. स्थापना:</span> १६/०१/२००४ (SAM)</div>
        <div><span className="font-semibold">२. कार्यक्षेत्र:</span> श्रीगोंदा तालुका</div>
        <div><span className="font-semibold">३. शाखा:</span> बेलवंडी बु //</div>
        <div><span className="font-semibold">४. सी.आर.ए. आर.:</span> १४.६३%</div>
        <div><span className="font-semibold">५. सभासद संख्या:</span> १५५६</div>
        <div><span className="font-semibold">६. अधिकृत भागभांडवल:</span> १० कोटी</div>
        <div><span className="font-semibold">७. भागभांडवल:</span> ३५९१३४००.००</div>
        <div><span className="font-semibold">८. सी.डी. रेशो:</span> ७२.६२%</div>
        <div><span className="font-semibold">९. निधी:</span> ४५१२११०६.९९</div>
        <div><span className="font-semibold">१०. ठेवी:</span> ४६६८३२३१३.१०</div>
        <div><span className="font-semibold">११. बँक व रोख शिल्लक:</span> १८२१०२६२३.५७</div>
        <div><span className="font-semibold">१२. गुंतवणूक:</span> १५४३३१९४४.००</div>
        <div><span className="font-semibold">१३. कर्ज:</span> ३८४९७४०८५.००</div>
        <div><span className="font-semibold">१४. कायम मालमत्ता:</span> ४६३५९२७.२०</div>
        <div><span className="font-semibold">१५. खेळते भाग भांडवल:</span> ५९६६२५७५१.६७</div>
        <div><span className="font-semibold">१६. नफा:</span> ७५८६४००.५४</div>
        <div><span className="font-semibold">१७. ऑडीट वर्ग:</span> अ</div>
      </div>
    <div className="flex items-center justify-center my-6 w-full max-w-3xl">
    <div className="w-3 h-3 bg-purple-800 rounded-full mr-2"></div>
    <div className="w-3 h-3 bg-purple-800 rounded-full mr-2"></div>
    <div className="flex-grow h-[2px] bg-purple-400"></div>
    <div className="w-3 h-3 bg-purple-800 rounded-full ml-2"></div>
    <div className="w-3 h-3 bg-purple-800 rounded-full ml-2"></div>
    </div>
      <h2 className="text-2xl font-bold mt-12 mb-6 text-purple-800">*संस्थेची वैशिष्ट्ये*</h2>

      <div className="flex flex-col gap-6 max-w-4xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-purple-800 p-4 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 ease-in-out shadow-purple-400 whitespace-pre-line"
          >
            <div className="text-center font-bold text-xl mb-2">{feature.title}</div>
            <div>{feature.description}</div>
          </div>
        ))}

        <div className="bg-white text-purple-800 p-4 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 ease-in-out shadow-purple-400">
          <h3 className="text-xl font-semibold mb-4 text-center">मासिक आवर्त खाते</h3>
          <table className="w-full border-collapse border border-purple-800 text-center">
            <thead>
              <tr>
                <th className="border border-purple-800 px-3 py-1">अ.क्र.</th>
                <th className="border border-purple-800 px-3 py-1">रक्कम (Amount)</th>
                <th className="border border-purple-800 px-3 py-1">१ वर्ष</th>
                <th className="border border-purple-800 px-3 py-1">२ वर्ष</th>
                <th className="border border-purple-800 px-3 py-1">३ वर्ष</th>
                <th className="border border-purple-800 px-3 py-1">४ वर्ष</th>
                <th className="border border-purple-800 px-3 py-1">५ वर्ष</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-3 py-1">१)</td><td className="border px-3 py-1">१००</td><td className="border px-3 py-1">१२६५</td><td className="border px-3 py-1">२६११</td><td className="border px-3 py-1">४११६</td><td className="border px-3 py-1">५७४१</td><td className="border px-3 py-1">७४८६</td></tr>
              <tr><td className="border px-3 py-1">२)</td><td className="border px-3 py-1">२००</td><td className="border px-3 py-1">२५३०</td><td className="border px-3 py-1">५२२२</td><td className="border px-3 py-1">८२३२</td><td className="border px-3 py-1">११४८२</td><td className="border px-3 py-1">१४९७२</td></tr>
              <tr><td className="border px-3 py-1">३)</td><td className="border px-3 py-1">३००</td><td className="border px-3 py-1">३७९५</td><td className="border px-3 py-1">७८३३</td><td className="border px-3 py-1">१२३४८</td><td className="border px-3 py-1">१७२२३</td><td className="border px-3 py-1">२२४५८</td></tr>
              <tr><td className="border px-3 py-1">४)</td><td className="border px-3 py-1">५००</td><td className="border px-3 py-1">६३२५</td><td className="border px-3 py-1">१३०५५</td><td className="border px-3 py-1">२०५८०</td><td className="border px-3 py-1">२८७०५</td><td className="border px-3 py-1">३७४३०</td></tr>
              <tr><td className="border px-3 py-1">५)</td><td className="border px-3 py-1">१०००</td><td className="border px-3 py-1">१२६५०</td><td className="border px-3 py-1">२६११०</td><td className="border px-3 py-1">४११६०</td><td className="border px-3 py-1">५७४१०</td><td className="border px-3 py-1">७४८६०</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AmchyaBaddal;
