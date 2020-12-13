import React from "react"
import Message from "@components/message"
import { useFakeMessage } from "@fakeData"
import { withPadding } from "../custom-decorators"
import "twin.macro"

export default {
  title: "Components/Message",
  component: Message,
  decorators: [withPadding],
}

export const Base = () => {
  const messageData = useFakeMessage()
  return (
    <div tw="container">
      <Message {...messageData} />
    </div>
  )
}
