import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import VideoHero from "@components/video-hero"
import AllBands from "@modules/all-bands"
import Map from "@modules//map"
import { band } from "@customTypes"

// TODO: Add Video Lazyloading or no mobile Video
// TODO: Add Privacy and Imprint
const useBands = (): band[] => {
  const data = useStaticQuery(graphql`
    query BandQuery {
      allBandsYaml(sort: { order: ASC, fields: title }) {
        nodes {
          title
          genre
          bandImage {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          startTime
          endTime
          stage
          links {
            iconName
            href
          }
        }
      }
    }
  `)

  return data.allBandsYaml.nodes
}

const IndexPage = () => {
  const allBands = useBands()

  return (
    <Layout>
      <SEO title="Home" />
      <VideoHero />
      <AllBands bands={allBands} />
      <Map />
    </Layout>
  )
}

export default IndexPage
