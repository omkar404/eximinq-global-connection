module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
    safelist: [
    "hover:bg-blue-50",
    "hover:bg-green-50",
    "hover:bg-purple-50",
    "hover:bg-gray-50",
    "hover:border-blue-500",
    "hover:border-green-500",
    "hover:border-purple-500",
    "hover:border-gray-500",
    "text-blue-700",
    "text-green-700",
    "text-purple-700",
    "text-gray-700",
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-gray-100",
    "text-red-500",
    "text-green-500",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0284c7",
          800: "#075985",
          900: "#0d2c56",
        },
        accent: {
          400: "#fbbf24",
          500: "#fca311",
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
