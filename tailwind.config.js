module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-image': "url('/img/header-image.JPG')",
        'profile-image': "url('/img/Satish_Pic.jpeg')"
      })
    },
  },
  plugins: [],
}
