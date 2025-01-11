/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        "off-white": "#FAF9F6",
        "oil-black": "#0C0C0C",
        "vue-green": "#3FB17E"
      }, 
    },
	},
	plugins: [],
}
