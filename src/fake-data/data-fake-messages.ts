import { useStaticQuery, graphql } from "gatsby"
import { sample as getRandomElement } from "lodash"
import { message } from "@customTypes"

const fakeMessages = useStaticQuery(graphql`
  query fakeMessages {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/fake-data/" } }) {
      nodes {
        frontmatter {
          messageType
          title
        }
        html
      }
    }
  }
`)

export const useFakeMessage = (): message => {
  const randomMessage = getRandomElement(fakeMessages.allMarkdownRemark.nodes)
  return {
    ...randomMessage.frontmatter,
    html: randomMessage.html,
  }
}

export const useFakeMessages = (): message[] => {
  return fakeMessages.allMarkdownRemark.nodes.map(message => ({
    ...message.frontmatter,
    html: message.html,
  }))
}
