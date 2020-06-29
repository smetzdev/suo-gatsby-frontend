import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import HTMLContent from "@components/html-content"

const TemplateMarkdown = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <HTMLContent content={data.markdownRemark.html} />
  </Layout>
)

export const data = graphql`
  query markdownPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default TemplateMarkdown
