import profitImg from '../assets/profitscheme.png';
import oldAgeImg from '../assets/oldage.png';
import longTermImg from '../assets/longterm.png';
import monthlyImg from '../assets/moneysaving.png';
import saveOnTimeImg from '../assets/saveontime.png';
import businessImg from '../assets/businessloan.png';

const schemes = [
  {
    title: 'PROFIT SCHEMES',
    description: 'आपणांसर्वांच्या घरात लक्ष्मीधी पावले सदैव पहूदेत हीथ आमची मनोकामना',
    image: profitImg,
  },
  {
    title: 'OLD AGE SAVING',
    description: 'शेवटच्या क्षणाला आधार ह्या स्पामुळे आताच सुरूवात करा',
    image: oldAgeImg,
  },
  {
    title: 'LONG TERM SAVINGS',
    description: 'एकदा केलेती गुंतवणूक करेल आपल्या प्रत्येक पिढीला सुरक्षित..!',
    image: longTermImg,
  },
  {
    title: 'MONTHLY SAVING',
    description: 'भविष्याची चिंता होईल कमी जेव्हा प्रत्येक महिन्याला लावू बचतीची सवय',
    image: monthlyImg,
  },
  {
    title: 'SAVE ON TIME',
    description: 'योग्य वेळेवर जमवलेला पैसा वेळप्रसंगी तुम्हांला जपेल.',
    image: saveOnTimeImg,
  },
  {
    title: 'BUSINESS LOAN',
    description: 'व्यवसायात नाविन्य येईल तेव्हाच आपला व्यवसाय प्रगतीच्या दिशेने जाईल',
    image: businessImg,
  },
];

const Yojana = () => (
  <div className="py-12 px-4 md:px-16 bg-white">
    <br />
    <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10">योजना</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {schemes.map((scheme, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src={scheme.image}
            alt={scheme.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-800 via-purple-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-gradient-to-t from-purple-900 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-300">
            <h3 className="text-lg font-bold">{scheme.title}</h3>
            <p className="text-sm mt-1">{scheme.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Yojana;
