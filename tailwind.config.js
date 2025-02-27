/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["SpaceMono", "sans-serif"],
      },
      colors: {
        primary: "#007AFF", // Your primary brand color
        secondary: "#4CAF50", // Your secondary brand color
        accent: "#FFC107", // An accent color
        background: "#FFFFFF", // Default background color
        surface: "#F5F5F5", // Slightly off-white for cards, etc.
        text: "#333333", // Dark gray for most text
        "text-light": "#666666", // Lighter gray for secondary text
        error: "#FF0000", // Red for errors
        success: "#008000", // Green for success messages
        // ... more colors as needed
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px (default body text)
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        // ... more sizes as needed
      },
      spacing: {
        // Consistent spacing units (adjust as needed)
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
        10: "2.5rem", // 40px
        12: "3rem", // 48px
        16: "4rem", // 64px
        20: "5rem", // 80px
        24: "6rem", // 96px
        32: "8rem", // 128px
        // ... more spacing values as needed
      },
      borderRadius: {
        sm: "0.25rem", // 4px
        DEFAULT: "0.5rem", // 8px (default border radius)
        md: "0.75rem", // 12px
        lg: "1rem", // 16px
        full: "9999px", // For circles
      },
      // ... other theme extensions (e.g., boxShadow, fontFamily)
    },
  },
  plugins: [],
};
