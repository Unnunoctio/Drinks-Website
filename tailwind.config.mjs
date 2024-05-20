/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "480px"
      },
			colors: {
				primary: "#222222",
        secondary: "#f0f0f0",
			},
      maxWidth: {
        page: "1080px",
      },
    },
  },
  plugins: [],
};
