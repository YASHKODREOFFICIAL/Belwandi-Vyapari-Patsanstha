import React from 'react';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-purple-700 text-white p-4 shadow-md flex justify-between items-center h-16">
      <div className="flex items-center space-x-4">
        {/* Hamburger button */}
        <button
          onClick={toggleSidebar}
          className="focus:outline-none"
          aria-label="Toggle sidebar"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              // "X" icon when sidebar open
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger (three lines) icon when sidebar closed
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Website Name */}
        <h1 className="text-2xl font-semibold select-none">
          बेलवंडी व्यापारी ग्रामीण बिगरशेती सहकारी पतसंस्था मर्या
        </h1>
      </div>

      {/* Language Selector */}
      
    </header>
  );
};

export default Header;
