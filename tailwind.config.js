
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f1a",
        card: "rgba(255,255,255,0.08)",
        neon: "#39ff14",
        blue: "#00e5ff",
        gold: "#f5c542"
      },
      boxShadow: {
        glow: "0 0 20px rgba(57,255,20,0.25)"
      },
      backdropBlur: {
        glass: "12px"
      }
    },
  },
  plugins: [],
}
