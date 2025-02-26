/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        balloo2: ["Ballo2", "sans-serif"],
        "balloo2-bold": ["Ballo2Bold", "sans-serif"],
        "balloo2-regular": ["Ballo2Regular", "sans-serif"],
        "balloo2-semibold": ["Ballo2SemiBold", "sans-serif"],
        "balloo2-extrabold": ["Ballo2ExtraBold", "sans-serif"],
        "balloo2-medium": ["Ballo2Medium", "sans-serif"],
        "inter-regular": ["Inter-Regular", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-semibold": ["Inter-SemiBold", "sans-serif"],
        "inter-extrabold": ["Inter-ExtraBold", "sans-serif"],
        "inter-medium": ["Inter-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
