import { createFakeHTML } from "./helper"
import faker from "faker"
import { message } from "@customTypes"

export const useFakeMessage = (): message => {
  return {
    title: faker.random.words(),
    messageType: "info",
    html: createFakeHTML(),
  }
}

export const useFakeMessages = (): message[] => {
  const randomNumber = faker.random.number({ min: 2, max: 5 })
  return Array.from({ length: randomNumber }, () => ({
    title: faker.random.words(),
    messageType: "info",
    html: createFakeHTML(),
  }))
}
