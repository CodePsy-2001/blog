import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./{app,pages,components}/**/*.{tsx,mdx}", "./theme.config.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
