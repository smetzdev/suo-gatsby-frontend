import React from "react"
import Message from "@components/message"
import { message, withClassName } from "@customTypes"

interface allMessagesProps extends withClassName {
  messages: message[]
}

const AllMessages: React.FC<allMessagesProps> = ({
  messages,
  className = "",
}) => {
  return (
    <section className={`cwo-page-module container space-y-4 ${className}`}>
      {messages.map((message, key) => (
        <Message key={key} {...message} />
      ))}
    </section>
  )
}

export default AllMessages
