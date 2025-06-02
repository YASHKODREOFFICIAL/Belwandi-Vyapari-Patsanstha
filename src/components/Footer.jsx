import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-4 text-center mt-auto">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
