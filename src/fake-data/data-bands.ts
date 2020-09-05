import faker from "faker"
import { fakeGatsbyFluidImage } from "./helper"
import { band } from "@customTypes"

const allStages = ["MainStage", "ClubStage"]

const alllLinksArray = [
  {
    href: "https://cwo-ev.de",
    iconName: "spotify",
  },
  {
    href: "https://cwo-ev.de",
    iconName: "bandcamp",
  },
  {
    href: "https://cwo-ev.de",
    iconName: "youtube",
  },
  {
    href: "https://cwo-ev.de",
    iconName: "facebook",
  },
  {
    href: "https://cwo-ev.de",
    iconName: "instagram",
  },
  {
    href: "https://cwo-ev.de",
    iconName: "globe",
  },
]

const possibleGenresArray = [
  "Death Metal",
  "Thrash Metal",
  "Heavy Metal",
  "Black/Trash Metal",
  "Melodic Death Metal",
  "Rock n' Roll",
  "Doom Metal",
  "Groove Metal",
]

// External
export const createfakeBand = () => ({
  title: faker.commerce.productName(),
  genre: faker.random.arrayElement(possibleGenresArray),
  stage: faker.random.arrayElement(allStages),
  bandImage: fakeGatsbyFluidImage({ width: 500, height: 320 }),
  startTime: "19:39 Uhr",
  endTime: "19:45 Uhr",
  // Return the n-first elements of allLinkskArray
  links: (() => {
    const sliceIndexOptions = {
      min: 0,
      max: alllLinksArray.length - 1,
    }
    const sliceIndex = faker.random.number(sliceIndexOptions)

    return alllLinksArray.slice(0, sliceIndex)
  })(),
})

export const useFakeBand = (): band => {
  return createfakeBand()
}

export const useFakeBands = (min = 1, max = 12): band[] => {
  const amountOfBands = faker.random.number({ min, max })
  return Array.from({ length: amountOfBands }, () => createfakeBand())
}
