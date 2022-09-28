/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#d5f246",

        "secondary": "#ff7811",

        "accent": "#1e89db",

        "neutral": "#222130",

        "base-100": "#F2E2F3",

        "info": "#325FD2",

        "success": "#22D38F",

        "warning": "#ECCB55",

        "error": "#E96563",
      },
    },
  ],
  plugins: [require("daisyui")],
}
