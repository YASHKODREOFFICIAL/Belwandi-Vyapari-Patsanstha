import React from 'react';

const Pragati = () => {
  return (
    <div className="bg-white px-4 py-8 min-h-screen flex flex-col items-center">
        <br /><br />
      <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-10 text-center">
        संस्थेने केलेली ५ वर्षातील प्रगती व्यवसाय वृध्दीचा तक्ता - आज अखेर
      </h1>

      {/* Table 1: भांडवल व देणी */}
      <h2 className="text-2xl font-bold text-center mb-4">भांडवल व देणी (आदर्श प्रमाण)</h2>
      <div className="overflow-x-auto mb-12 w-full max-w-7xl">
        <table className="min-w-full border border-gray-300 text-center">
          <thead className="bg-purple-100 text-gray-800">
            <tr>
              <th className="border px-4 py-2">वर्ष</th>
              <th className="border px-4 py-2">२०१५-१६</th>
              <th className="border px-4 py-2">२०१६-१७</th>
              <th className="border px-4 py-2">२०१७-१८</th>
              <th className="border px-4 py-2">२०१८-१९</th>
              <th className="border px-4 py-2">२०१९-२०</th>
              <th className="border px-4 py-2">आदर्श प्रमाण</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['अधिकृत भांडवल', '२५००००००.००', '२५००००००.००', '२५००००००.००', '२५००००००.००', '२५००००००.००', ''],
              ['वसूल भागभांडवल ५%', '१६९६४६६५.००', '२०९५४४००.००', '२१०३५६००.००', '३०२७८२००.००', '३५१७९३००.००', '६.०९%'],
              ['निधी ५%', '२३३७६३१३.६४', '३१८२८३९०.११', '३९०३२५०६.१३', '३९०११०५१.००', '५५१२१५०६.९६', '७.५८%'],
              ['ठेवी ८०%', '२०५३३३६९.०४', '२४३३६४३००.०९', '२८९६६८३६.८८', '३६९३६८५७८.६८', '४६६६२३३१३.१०', '७८.२४%'],
              ['इतर देणी', '७५२८१५.००', '७४८९८२.००', '९५४६२९०५.०६', '२८१७८७२९.००', '२९९०४२५३१.०४', '६.९०%'],
              ['नफा', '४९१५०४६.२०', '४२१३०३४.००', '५३६६४११.००', '८२५२४४०.०९', '७५८८६४००.५४', '९.२९%'],
              ['एकूण खर्च भांडवल', '२५०३६५१०८.९५', '३५०२७४३१४.१०', '३७१२६१५१५.८४', '४६८१८२५१७.०१', '५९६२२५०५१.६०', '१००%'],
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td key={i} className="border px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table 2: मालमत्ता व येणी */}
      <h2 className="text-2xl font-bold text-center mb-4">मालमत्ता व येणी (आदर्श प्रमाण)</h2>
      <div className="overflow-x-auto w-full max-w-7xl">
        <table className="min-w-full border border-gray-300 text-center">
          <thead className="bg-purple-100 text-gray-800">
            <tr>
              <th className="border px-4 py-2">वर्ष</th>
              <th className="border px-4 py-2">२०१५-१६</th>
              <th className="border px-4 py-2">२०१६-१७</th>
              <th className="border px-4 py-2">२०१७-१८</th>
              <th className="border px-4 py-2">२०१८-१९</th>
              <th className="border px-4 py-2">२०१९-२०</th>
              <th className="border px-4 py-2">आदर्श प्रमाण</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['रोख व बँक शिल्लक', '३४७५४७०६.०५', '३३२५०५५.२०', '११४३८६८०.९४', '१२५५९२३४७.८१', '२०७०७६०६.५०', '४.६५%'],
              ['गुंतवणूक', '७२४०७६९६.००', '१०२९१४४३२.००', '१३२३९५११.००', '१२१२३३६०.००', '१५४३३१११.००', '२५.०८%'],
              ['कर्ज', '१७३०४५५१२.००', '२७०५०६९५५.००', '२१६२३६६८.००', '३१७३८३८८.००', '३८४७७४०५.००', '६४.५२%'],
              ['तरसुदी', '२१८२७६४.००', '३३१५५६३.९०', '७६५१५१८९.००', '१४७४०२४५.९०', '२४७५३११५.१०', '४.१९%'],
              ['मालमत्ता', '५५९५०३६.००', '५५५०८३.००', '४६८६५०४.००', '५०४७३८३.००', '५६३२५३२०.२०', '०.०७%'],
              ['एकूण खेळते भांडवल', '२५०३६५१०८.९५', '३५०२७४३१४.१४', '३७१२६१५१५.८४', '४६८१८२५१७.०१', '५९६२२५०५१.६०', '१००%'],
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td key={i} className="border px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pragati;
