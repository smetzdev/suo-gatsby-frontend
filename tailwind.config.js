const plugin = require("tailwindcss/plugin")
const { colors } = require("./src/cwo-designtokens")

// Custom Plugins
const absoluteCenter = plugin(({ addUtilities }) => {
  const absoluteCenterUtitls = {
    ".absolute-center-x": {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
    ".absolute-center-y": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
    },
    ".absolute-center": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  }
  addUtilities(absoluteCenterUtitls)
})

module.exports = {
  theme: {
    colors: colors,
    extend: {
      fontFamily: {
        display: ["DaysLater", "Helvetica", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [absoluteCenter],
}
