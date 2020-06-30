import faker from "faker"
import { useStaticQuery, graphql } from "gatsby"
import { sample as getRandomElement } from "lodash"
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
export const createfakeBand = dummyImageArray => ({
  title: faker.commerce.productName(),
  genre: getRandomElement(possibleGenresArray),
  stage: getRandomElement(allStages),
  bandImage: getRandomElement(dummyImageArray),
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

// Query which delivers all dummy-band-images (ChildImageSharp)
const imageData = useStaticQuery(graphql`
  query AllDummyBandImages {
    allFile(
      filter: {
        absolutePath: { regex: "/fake-data/" }
        name: { regex: "/band-image/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`)

export const useFakeBand = (): band => {
  return createfakeBand(imageData.allFile.nodes)
}

export const useFakeBands = (min = 1, max = 12): band[] => {
  const amountOfBands = faker.random.number({ min, max })
  return Array.from({ length: amountOfBands }, () =>
    createfakeBand(imageData.allFile.nodes)
  )
}
