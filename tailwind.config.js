module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    maxWidth: {
      'custom': '635px',
      'customB': '1150px',
      'custoCm': '619px',
      'customD': '827px',
    },
    maxHeight: {
      'height': '718px',
      'heightB': '708px',
      'heightC': '864px',
      'heightD': '1,197px',
      'heightE': '428px',

    },
    extend: {
      colors: {
        customGray: '#D5D5FF',
        customB: '#F0F0FF',
        customc: '#EEEEEE',
        lightGreen: '#E9FFDE',
        lightPurple: '#F0ECFF',
        DarkGreen: '#3EC100',
        DarkPurple: '#30277F',

      },
    },
  },
  plugins: [],
}
