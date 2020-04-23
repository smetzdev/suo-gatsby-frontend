import { colors } from "../src/cwo-designtokens"

export const customBackgrounds = [
  {
    name: "darkBG",
    value: colors.gray[900],
    default: true,
  },
  {
    name: "lightBG",
    value: colors.gray[100],
  },
]

export const customViewports = {
  iphone5: {
    name: "Iphone 5/SE",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  iphoneX: {
    name: "Iphone X",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
  tailwindSM: {
    name: "Tailwind SM",
    styles: {
      width: "640px",
      height: "720px",
    },
  },
  tailwindMD: {
    name: "Tailwind MD",
    styles: {
      width: "768px",
      height: "720px",
    },
  },
  tailwindLG: {
    name: "Tailwind LG",
    styles: {
      width: "1024px",
      height: "720px",
    },
  },
  tailwindXL: {
    name: "Tailwind XL",
    styles: {
      width: "1280px",
      height: "720px",
    },
  },
}
