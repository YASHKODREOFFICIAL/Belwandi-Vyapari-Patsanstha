import React, { useEffect } from "react";

const Favicon = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";

    const svg = encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#6B46C1"/>
        <text x="50%" y="60%" text-anchor="middle" fill="white" font-size="60" font-family="Arial">म</text>
      </svg>
    `);

    link.href = `data:image/svg+xml,${svg}`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default Favicon;
