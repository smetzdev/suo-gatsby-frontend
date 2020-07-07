/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const fs = require("fs")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query markdownPages {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/markdown-pages/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const markdownPages = result.data.allMarkdownRemark.nodes

  // you'll call `createPage` for each result
  markdownPages.forEach(({ frontmatter }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/template-markdown.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { slug: frontmatter.slug },
    })
  })
}

exports.onPostBuild = async ({ graphql, reporter }) => {
  const bandsResult = await graphql(`
    query AllBands {
      allBandsYaml {
        nodes {
          title
          stage
          startTime
          endTime
          genre
          bandImage {
            publicURL
          }
        }
      }
    }
  `)
  if (bandsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "onPostBuild" query')
  }
  const data = JSON.stringify(bandsResult.data.allBandsYaml.nodes)
  fs.writeFileSync("./public/api.json", data)
}
