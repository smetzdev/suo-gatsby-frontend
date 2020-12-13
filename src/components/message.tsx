import React from "react"
import { CWOIcon } from "@elements"
import { message } from "@customTypes"
import "twin.macro"

const Message: React.FC<message> = ({ title, messageType, html }) => {
  return (
    <article tw="p-5 bg-gray-700 border-4 border-gray-600 rounded-md lg:px-20 lg:py-10">
      <header tw="flex items-center justify-start mb-2">
        <CWOIcon
          name={messageType}
          tw="inline-block w-auto h-8 mr-2 text-gray-300"
        />
        <h2 tw="text-xl leading-none md:text-3xl">{title}</h2>
      </header>
      <div
        tw="text-lg leading-normal text-gray-300 content md:text-2xl"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}

export default Message
