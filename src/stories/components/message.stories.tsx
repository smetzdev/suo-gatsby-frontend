import React from "react"
import Message from "@components/message"
import { useFakeMessage } from "@fakeData"

export default {
  title: "Components/Message",
  component: Message,
}

export const Base = () => {
  const messageData = useFakeMessage()
  return <Message {...messageData} />
}
