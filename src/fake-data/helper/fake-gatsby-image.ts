// @ts-nocheck
import { getImgSrc } from "react-simple-svg-placeholder"
import { gatsbyImage } from "@customTypes"

type flImageProps = {
  width?: number
  height?: number
  text?: string
  bgColor?: string
  textColor?: string
  fontSize?: number
}

export const fakeGatsbyFluidImage = ({
  width = 512,
  height = 512,
  text,
  bgColor,
  textColor,
  fontSize = 50,
}: flImageProps): gatsbyImage => {
  const srcURL = getImgSrc({
    width,
    height,
    text,
    bgColor,
    textColor,
    fontSize,
  })

  return {
    childImageSharp: {
      fluid: {
        aspectRatio: width / height, // Necessary for height-auto to work
        sizes: "(max-width: 512px) (max-height:512px) 100vw, 512px",
        src: srcURL,
        srcSet: `
            ${srcURL} 200w,
            ${srcURL} 400w,
            ${srcURL} 512w
          `,
      },
    },
  }
}
