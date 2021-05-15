module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-image': "url('/img/header-image.JPG')",
        'profile-image': "url('/img/profile-image-2.jpg')"
      })
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    }
  },
  plugins: [],
}
