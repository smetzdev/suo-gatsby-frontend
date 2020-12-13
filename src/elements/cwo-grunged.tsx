import React from "react"
import "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface grungedProps {
  shade?: string
}

export const CWOGrunged: React.FC<grungedProps> = ({
  shade = "primary",
  children,
}) => {
  const data = useStaticQuery(cwoGrungedQuery)

  // Find the requested grungeBG
  const grungyImage = data.allFile.nodes.find(
    image => image.name === `grunge-${shade}`
  )
  return (
    <>
      <figure tw="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Img tw="w-full h-full" fluid={grungyImage.childImageSharp.fluid} />
      </figure>
      {children}
    </>
  )
}

export const cwoGrungedQuery = graphql`
  query grungImages {
    allFile(filter: { name: { regex: "/grunge-/" }, ext: { eq: ".png" } }) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default CWOGrunged
