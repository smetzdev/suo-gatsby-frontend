import React from "react"
import { Icon } from "@elements"
import { message } from "@customTypes"

const Message: React.FC<message> = ({ title, messageType, html }) => {
  return (
    <article className="bg-gray-700 container p-5 border-4 border-gray-600 rounded-md">
      <header className="flex justify-start items-center mb-2">
        <Icon
          name={messageType}
          className="h-8 text-gray-300 w-auto inline-block mr-2"
        />
        <h2 className="leading-none text-xl md:text-3xl">{title}</h2>
      </header>
      <div
        className="content text-gray-300 text-lg md:text-xl leading-normal"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}

export default Message
