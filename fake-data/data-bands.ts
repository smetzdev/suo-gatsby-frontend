import faker from "faker"
import { sample as getRandomElement } from "lodash"
import dummyBandImage from "@dummyImages/band-image-dummy.jpg"
import dummyBandImage2 from "@dummyImages/band-image-dummy-2.png"
import dummyBandImage3 from "@dummyImages/band-image-dummy-3.jpg"

// Internal
const allDummyImages = [dummyBandImage, dummyBandImage2, dummyBandImage3]
const allStages = ["MainStage", "ClubStage"]

const alllLinksArray = [
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
  bandImagePath: getRandomElement(allDummyImages),
  genre: getRandomElement(possibleGenresArray),
  stage: getRandomElement(allStages),
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

// Returns 0-11 fakeBands (The rest gets filled)
export const randomAmountOfFakeBands = (() => {
  const bandAmount = faker.random.number({ min: 0, max: 11 })

  return Array.from({ length: bandAmount }, createfakeBand)
})()

// Returns 12 FakeBands
export const twelveFakeBands = (() =>
  Array.from({ length: 12 }, createfakeBand))()
