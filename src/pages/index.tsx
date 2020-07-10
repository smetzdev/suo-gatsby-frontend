import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import VideoHero from "@components/video-hero"
import AllMessages from "@modules/all-messages"
import AllBands from "@modules/all-bands"
import Direction from "@modules/direction"
import { message, band } from "@customTypes"

// TODO: Add Video Lazyloading or no mobile Video

const IndexPage = ({ data }) => {
  const allBands: band[] = data.allBandsYaml.nodes
  const allMessages: message[] = data.allMarkdownRemark.nodes.map(message => ({
    ...message.frontmatter,
    html: message.html,
  }))

  return (
    <Layout>
      <SEO title="Home" />
      <VideoHero />
      <AllMessages messages={allMessages} className="pb-0" />
      <AllBands bands={allBands} />
      <Direction />
    </Layout>
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
    # All Messages
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/messages/" } }
    ) {
      nodes {
        frontmatter {
          messageType
          title
        }
        html
      }
    }
  }
`

export default IndexPage
