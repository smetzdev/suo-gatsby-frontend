import React from "react"
import loadable from "@loadable/component"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import RunningOrder from "@modules/running-order"
import VideoHero from "@components/video-hero"
/* import AllMessages from "@modules/all-messages" */
import AllBands from "@modules/all-bands"
import { message, band } from "@customTypes"

// Lazy load map
const Direction = loadable(() => import("@modules/direction"))

// TODO: Add Video Lazyloading or no mobile Video

const IndexPage = ({ data }) => {
  const allBands: band[] = data.allBandsYaml.nodes
  /* const allMessages: message[] = data.allMarkdownRemark.nodes.map(message => ({
    ...message.frontmatter,
    html: message.html,
  })) */

  return (
    <>
      <Layout>
        <SEO title="Home" />
        {allBands.length === 12 && <RunningOrder />}
        <VideoHero />
        {/* <AllMessages messages={allMessages} /> */}
        <AllBands bands={allBands} />
        <Direction />
      </Layout>
    </>
  )
}

export const query = graphql`
  query FrontPageQuery {
    # All Bands
    allBandsYaml(sort: { order: ASC, fields: title }) {
      nodes {
        title
        genre
        bandImage {
          childImageSharp {
            fluid(maxWidth: 390) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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
`

export default IndexPage
