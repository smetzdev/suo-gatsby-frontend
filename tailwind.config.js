const plugin = require("tailwindcss/plugin")
const { colors } = require("./cwo-designtokens")

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
  plugins: [],
}
