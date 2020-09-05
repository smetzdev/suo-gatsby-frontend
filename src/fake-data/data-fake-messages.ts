import faker from "faker"
import { message } from "@customTypes"

const createFakeMessage = (): message => {
  const messageHTML = `
    <p>${faker.lorem.sentences()}</p>
  `
  return {
    title: faker.random.words(),
    messageType: "info",
    html: messageHTML,
  }
}

export const useFakeMessage = createFakeMessage

export const useFakeMessages = (): message[] => {
  const randomNumber = faker.random.number({ min: 2, max: 5 })
  return Array.from({ length: randomNumber }, createFakeMessage)
}
