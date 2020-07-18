import React from "react"
import BandCard from "@components/band-card"
import TBACard from "@components/tba-card"
import { withPadding } from "../custom-decorators"
import { useFakeBand } from "@fakeData"

export default {
  title: "Components/BandCard",
  component: BandCard,
  decorators: [withPadding],
}

export const Base = () => {
  const fakeBand = useFakeBand()
  return <BandCard {...fakeBand} />
}
export const TBA = () => <TBACard />
export const TBAWithContact = () => <TBACard withContactHint />
