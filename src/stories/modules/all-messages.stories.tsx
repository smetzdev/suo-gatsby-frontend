import React from "react"
import AllMessages from "@modules/all-messages"
import { useFakeMessages } from "@fakeData"

export default {
  title: "Modules/AllMessages",
  component: AllMessages,
}

export const Base = () => {
  const messages = useFakeMessages()
  return <AllMessages messages={messages} />
}
