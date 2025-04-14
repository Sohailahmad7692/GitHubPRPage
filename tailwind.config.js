/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "github-dark": "#0d1117",
        "github-dark-secondary": "#161b22",
        "github-dark-border": "#30363d",
        "github-light": "#ffffff",
        "github-light-secondary": "#f6f8fa",
        "github-light-border": "#d0d7de",
      },
    },
  },
  plugins: [],
};
