// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nexa', 'sans-serif'],
        nexablack: ['"Nexa-Black"', 'sans-serif'],
        nexabold: ['"Nexa-Bold"', 'sans-serif'],
        nexaregular: ['"Nexa-Regular"', 'sans-serif'],
        nexalight: ['"Nexa-Light"', 'sans-serif'],
        nexathin: ['"Nexa-Thin"', 'sans-serif'],
        nexabook: ['"Nexa-Book"', 'sans-serif'],
        nexaheavy: ['"Nexa-Heavy"', 'sans-serif'],
        nexaxbold: ['"Nexa-XBold"', 'sans-serif'],
        italic: ['"Nexa-Italic"', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        book: '450',
        bold: '700',
        xb: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};