import React from "react"
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

export default AllMessages
