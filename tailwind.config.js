
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('path-to-your-image-file/background.jpg')",
        'hero-pattern': "url('./src/assets/bgimage.jpg')",
        

      },
      fontFamily: {
        'custom': ['quicksand'],
      },
    },
  },
  plugins: [],
}