/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "test-primary": "#CCD1CC",
        "test-secondary": "#EAE8E3",
        "test-btn-display": "#935F4C",
        "test-hover": "#9E6F5E",
        "test-active": "#C5A99E",
      },
      backgroundImage: {
        'test-login': "url('./src/assets/images/background/login/pexels-cottonbro-studio-4065876_1920x1020.jpg')",
        'test-register': "url('./src/assets/images/background/register/pexels-cup-of-couple-6177619_1920x1020.jpg')"
      }
    },
    fontFamily: {
      Nunito: ["Nunito, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    }
  },
  plugins: [],
}

