/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing : {
         13 : "3.25rem"
      },

      fontSize : {
         '10xl' : ['7.5rem', { lineHeight: '1.2' }],
      },

      screens: {
        xsm : '500px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

