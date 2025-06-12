import React from 'react';
import dashboardIcon from '../assets/home.png';
import settingsIcon from '../assets/schemes.png';
import aboutIcon from '../assets/aboutus.png';
import progressIcon from '../assets/progress.png';
import achievementIcon from '../assets/achievements.png'; // Add this to your assets
import galleryIcon from '../assets/gallery.png';         // Add this to your assets

const Sidebar = ({ sidebarOpen, activePage, setActivePage }) => {
  return (
    <aside
      className={`fixed top-[64px] left-0 h-[calc(120vh-64px)] bg-gray-100 shadow-md z-20
      transform transition-all duration-300 ease-in-out
      ${sidebarOpen ? 'w-64' : 'w-16'}`}
    >
      <nav className="mt-4">
        <ul className="flex flex-col space-y-4 px-2">
          <li
            onClick={() => setActivePage('mukhyaPaan')}
            className={`flex items-center cursor-pointer p-2 rounded hover:bg-purple-200 ${
              activePage === 'mukhyaPaan' ? 'bg-purple-300' : ''
            }`}
            title="मुख्य पान"
          >
            <img src={dashboardIcon} alt="मुख्य पान" className="w-6 h-6" />
            {sidebarOpen && <span className="ml-3 text-gray-700 font-medium">मुख्य पान</span>}
          </li>

          <li
            onClick={() => setActivePage('amchyaBaddal')}
            className={`flex items-center cursor-pointer p-2 rounded hover:bg-purple-200 ${
              activePage === 'amchyaBaddal' ? 'bg-purple-300' : ''
            }`}
            title="आमच्याबद्दल"
          >
            <img src={aboutIcon} alt="आमच्याबद्दल" className="w-6 h-6" />
            {sidebarOpen && <span className="ml-3 text-gray-700 font-medium">आमच्याबद्दल</span>}
          </li>

          <li
            onClick={() => setActivePage('yojana')}
            className={`flex items-center cursor-pointer p-2 rounded hover:bg-purple-200 ${
              activePage === 'yojana' ? 'bg-purple-300' : ''
            }`}
            title="योजना"
          >
            <img src={settingsIcon} alt="योजना" className="w-6 h-6" />
            {sidebarOpen && <span className="ml-3 text-gray-700 font-medium">योजना</span>}
          </li>

          <li
            onClick={() => setActivePage('pragati')}
            className={`flex items-center cursor-pointer p-2 rounded hover:bg-purple-200 ${
              activePage === 'pragati' ? 'bg-purple-300' : ''
            }`}
            title="प्रगती"
          >
            <img src={progressIcon} alt="प्रगती" className="w-6 h-6" />
            {sidebarOpen && <span className="ml-3 text-gray-700 font-medium">प्रगती</span>}
          </li>

          <li
            onClick={() => setActivePage('kamgiri')}
            className={`flex items-center cursor-pointer p-2 rounded hover:bg-purple-200 ${
              activePage === 'kamgiri' ? 'bg-purple-300' : ''
            }`}
            title="संस्थेची कामगिरी"
          >
            <img src={achievementIcon} alt="संस्थेची कामगिरी" className="w-6 h-6" />
            {sidebarOpen && <span className="ml-3 text-gray-700 font-medium">कामगिरी</span>}
          </li>

          <li
            onClick={() => setActivePage('gallery')}
            className={`flex items-center cursor-pointer p-2 rounded hover:bg-purple-200 ${
              activePage === 'gallery' ? 'bg-purple-300' : ''
            }`}
            title="गॅलरी"
          >
            <img src={galleryIcon} alt="गॅलरी" className="w-6 h-6" />
            {sidebarOpen && <span className="ml-3 text-gray-700 font-medium">गॅलरी</span>}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
