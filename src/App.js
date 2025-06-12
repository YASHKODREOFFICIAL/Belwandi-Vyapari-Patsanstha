import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';
import Pragati from './pages/Pragati';
import SansthechiKamgiri from './pages/SansthechiKamgiri';
import Gallery from './pages/Gallery';


import MukhyaPaan from './pages/MukhyaPaan';
import Yojana from './pages/Yojana';
import AmchyaBaddal from './pages/AmchyaBaddal';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [activePage, setActivePage] = useState('mukhyaPaan'); // default page

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const handleContinue = () => setShowIntro(false);

  const renderActivePage = () => {
    switch (activePage) {
      case 'mukhyaPaan':
        return <MukhyaPaan />;
      case 'yojana':
        return <Yojana />;
      case 'amchyaBaddal':
        return <AmchyaBaddal />;
      case 'pragati':
        return <Pragati />;
      case 'kamgiri':
        return <SansthechiKamgiri />;
      case 'gallery':
        return <Gallery />;
      default:
        return <MukhyaPaan />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {showIntro ? (
        <IntroScreen onContinue={handleContinue} />
      ) : (
        <>
          <Header isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

          <div className="flex flex-1">
            <Sidebar
              sidebarOpen={sidebarOpen}
              activePage={activePage}
              setActivePage={setActivePage}
            />

            <main
              className={`flex-1 p-6 transition-all duration-300 ${
                sidebarOpen ? 'ml-64' : 'ml-16'
              }`}
            >
              {renderActivePage()}
            </main>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
