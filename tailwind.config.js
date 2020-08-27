const convert = require("color-convert")
const {
  cwoDesigntokens,
  cwoTailwindConfig,
} = require("@smetzdev/gatsby-theme-cwo")

// Returns a shadow-color rgb-string, something like 0,0,1
const shadowColor = convert.hex
  .rgb(cwoDesigntokens.colors.primary[600])
  .join(",")

module.exports = {
  purge: process.env.NO_PURGE ? false : ["./src/**/*.tsx"],
  theme: {
    boxShadow: {
      xs: `0 0 0 1px rgba(${shadowColor}, 0.05)`,
      sm: `0 1px 2px 0 rgba(${shadowColor}, 0.05)`,
      default: `0 1px 3px 0 rgba(${shadowColor}, 0.1), 0 1px 2px 0 rgba(${shadowColor}, 0.06)`,
      md: `0 4px 6px -1px rgba(${shadowColor}, 0.1), 0 2px 4px -1px rgba(${shadowColor}, 0.06)`,
      lg: `0 10px 15px -3px rgba(${shadowColor}, 0.1), 0 4px 6px -2px rgba(${shadowColor}, 0.05)`,
      xl: `0 20px 25px -5px rgba(${shadowColor}, 0.1), 0 10px 10px -5px rgba(${shadowColor}, 0.04)`,
      "2xl": `0 25px 50px -12px rgba(${shadowColor}, 0.25)`,
      inner: `inset 0 2px 4px 0 rgba(${shadowColor}, 0.06)`,
      outline: `0 0 0 3px rgba(${shadowColor}, 0.5)`,
      none: "none",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    typography: {
      default: {
        css: {
          h1: {
            color: cwoDesigntokens.colors.primary[400],
            fontWeight: "800",
          },
          h2: {
            color: cwoDesigntokens.colors.primary[400],
            fontWeight: "700",
          },
          h3: {
            color: cwoDesigntokens.colors.primary[400],
            fontWeight: "600",
          },
          h4: {
            color: cwoDesigntokens.colors.primary[400],
            fontWeight: "600",
          },
          color: "#fff",
          a: {
            color: cwoDesigntokens.colors.primary[300],
            "&:hover": {
              color: cwoDesigntokens.colors.primary[500],
            },
          },
        },
      },
    },
    extend: cwoTailwindConfig.theme.extend,
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
