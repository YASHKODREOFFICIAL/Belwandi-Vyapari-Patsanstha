import React, { useState } from 'react';

const images = [
  {
    src: '/images/gallery1.jpg',
    description: '२० वी वार्षिक सर्वसाधारण सभेमध्ये संस्थेचे विद्यमान चेअरमन श्री. उत्तम धोंडीबा डाके सभासदांना मार्गदर्शन करताना',
  },
  {
    src: '/images/gallery2.jpg',
    description: '२० वी वार्षिक सर्वसाधारण सभेमध्ये अध्यक्ष माजी चेअरमन तथा विद्यमान संचालक श्री. सोपान हिरवे सभासदांच्या प्रश्नांना उत्तर देताना.',
  },
  {
    src: '/images/gallery3.jpg',
    description: 'बेलवंडी व्यापारी पतसंस्थेस भेट प्रसंगी मा. श्री. ठेंगे साहेब (पि.आय. बेलवंडी) यांचा सत्कार करताना चेअरमन श्री. उत्तम डाके व इतर मान्यवर',
  },
  {
    src: '/images/gallery4.jpg',
    description: 'संस्थेचा सामाजिक उपक्रम अंतर्गत सभासद श्री. सुभाष साळवे यांचे सत्कार करताना संस्थेचे पदाधिकारी व मान्यवर',
  },
  {
    src: '/images/gallery5.jpg',
    description: '२० वी वार्षिक सर्वसाधारण सभेमध्ये संस्थेचे मॅनेजर श्री. किसन वन्हाडे अहवाल वाचन करताना.',
  },
  {
    src: '/images/gallery6.jpg',
    description: 'संस्थेचा सामाजिक उपक्रम अंतर्गत श्री. भगवानराव निंबाळकर साहेब यांचा सत्कार करताना संचालक व पदाधिकारी',
  },
  {
    src: '/images/gallery7.jpg',
    description: 'तलाठी श्री. विनायकराव निंबाळकर यांचा सत्कार करताना संचालक व पदाधिकारी.',
  },
  {
    src: '/images/gallery8.jpg',
    description: 'सभासद श्री. किसन शेलार यांना अपघाती विमा चेक प्रदान करताना संचालक व पदाधिकारी.',
  },
  {
    src: '/images/gallery9.jpg',
    description: 'विठ्ठल रुक्मीणी मठास देणगी स्विकारताना संस्थेचे पदाधिकारी व मान्यवर.',
  },
  {
    src: '/images/gallery10.jpg',
    description: 'श्री भैरवनाथ मंदिरास देणगी स्विकारताना संस्थेचे पदाधिकारी व मान्यवर.',
  },
  {
    src: '/images/gallery11.jpg',
    description: 'श्री. बाळासाहेब ठाणगे यांचा सत्कार करताना संस्थेचे पदाधिकारी व मान्यवर.',
  },
  {
    src: '/images/gallery12.jpg',
    description: 'संस्थेच्या २१ व्या वार्षिक सभेत उपस्थित मान्यवर सभासद.',
  },
];

const Gallery = () => {
    const [fullscreenImg, setFullscreenImg] = useState(null);

  const openFullscreen = (img) => {
    setFullscreenImg(img);
  };

  const closeFullscreen = () => {
    setFullscreenImg(null);
  };
  return (
    <div className="text-gray-800 px-4 sm:px-10 py-8">
        <br /><br />
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">गॅलरी</h1>
<p className="text-center mb-10 text-purple-800">येथे संस्थेच्या कार्यक्रमांची छायाचित्रे दाखविली जातील.</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded overflow-hidden shadow-md transition duration-300 hover:shadow-purple-600/50 transform hover:scale-105 cursor-pointer"
            onClick={() => openFullscreen(img)}
          >
            <img
              src={img.src}
              alt={`gallery-image-${index + 1}`}
              className="w-full h-64 object-cover"
              draggable={false}
            />
            <div className="p-4 border-t text-sm text-gray-700">
              {img.description}
            </div>
          </div>
        ))}
      </div>

      {fullscreenImg && (
        <div
          onClick={closeFullscreen}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={fullscreenImg.src}
            alt="Fullscreen Preview"
            className="max-w-[90%] max-h-[90%] shadow-lg rounded"
            onClick={(e) => e.stopPropagation()} // prevent close on clicking image itself
            draggable={false}
          />
          <button
            onClick={closeFullscreen}
            className="absolute top-5 right-5 text-white bg-purple-700 rounded-full p-2 hover:bg-purple-800"
            aria-label="Close fullscreen"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;