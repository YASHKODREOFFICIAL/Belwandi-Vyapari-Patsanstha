module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textStrokeWidth: {
        DEFAULT: '1px',
      },
      textStrokeColor: {
        white: '#ffffff',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#ffffff',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#000000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#ffffff',
        },
      });
    },
  ],
};
