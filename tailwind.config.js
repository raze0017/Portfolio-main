/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [import("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#ffffff", // override default bg
          // (optional) define other colors
        },
      },
    ],
  },
};
