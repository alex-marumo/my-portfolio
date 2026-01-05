/** @type {import('astro').Config} */
export default {
  theme: {
    extend: {
      colors: {
        coal: "#0F172A",
        electric: "#3B82F6",
        terminal: "#22C55E",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
};
