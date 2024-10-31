/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the `src` folder
    "./public/index.html",        // Include the main HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',       // Main background color (white)
        secondary: '#FF9800',     // Accent color (orange)
        accent: '#F5F5F5',        // Light gray for background sections
        textPrimary: '#333333',   // Dark text color for readability
        textSecondary: '#888888', // Light text color for subtitles
      },
      boxShadow: {
        'bottom-only': '0 4px 10px -2px rgba(0, 0, 0, 0.1)', // Bottom shadow only
      },
      fontSize: {
        // Custom font sizes in rem
        'base': '1rem',       // 16px
        'sm': '0.875rem',     // 14px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
      },
    },
  },
  plugins: [],
};