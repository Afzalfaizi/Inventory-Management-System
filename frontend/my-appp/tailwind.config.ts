/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this includes all your components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',    // Deep purple
        secondary: '#EC4899',  // Pink
        accent: '#14B8A6',     // Teal
        background: '#F3F4F6', // Light gray
        textLight: '#F9FAFB',  // Light text color
        textDark: '#1F2937',   // Dark text color
      },
    },
  },
  plugins: [],
}
