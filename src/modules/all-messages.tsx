import React from "react"
import { graphql } from "gatsby"
import Message from "@components/message"
import { message } from "@customTypes"
import { PageModule } from "@elements"
import "twin.macro"

interface allMessagesProps {
  messages: message[]
}

const AllMessages: React.FC<allMessagesProps> = ({ messages }) => {
  return (
    <PageModule tw="container max-w-screen-lg! space-y-4 pb-0!">
      {messages.map((message, key) => (
        <Message key={key} {...message} />
      ))}
    </PageModule>
  )
}

export const allMessagesFragment = graphql`
  fragment allMessages on Ouery {
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

export default AllMessages
