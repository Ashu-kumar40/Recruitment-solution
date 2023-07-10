/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: {max: "400px"},
      md: {max: "744px"},
      lg: {max: "1440px"},
    },
    
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      neutral: {
        50: "#f9fafb",
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
        400: "#9fa6b2",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#252f3f",
        900: "#161e2e",
      },
      success: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      warning: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
      },
      error: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      primary: {
        50: "#D0FFFF",
        100: "#A5EDFF",
        200: "#00D1FF",
        300: "#5FB5EA",
        400: "#42A3DA",
        500: "#008EC7",
        600: "#007FB4",
        700: "#006A9C",
        800: "#005684",
        900: "#00416A",
      },
      secondary: {
        s1: "#1DC92E",
        s2: "#2965FF",
        s3: "#FF3629",
        s4: "#FF296A",
        s5: "#FF9D29",
        s6: "#A129FF",
      },
      //Dimond Gradients
      gradient: {
        g1: "from-primary-900 to-primary-200",
      },
    },
    spacing: {
      px: "1px",
      0: "0px",
      // 1 rem = 16px
      1: "8px",
      2: "12px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "96px",
    },
    fontSize: {
      xs: "12px",
      sm: "16px",
      base: "20px",
      lg: "24px",
      xl: "32px",
      "2xl": "40px",
      "3xl": "48px",
      "4xl": "64px",
      "5xl": "80px",
      "6xl": "96px",
    },
    borderRadius: {
      none: "0px",
      br: "12px",
      round: "50px",
    },
    
    extend: {},
    plugins: [],
  },
};