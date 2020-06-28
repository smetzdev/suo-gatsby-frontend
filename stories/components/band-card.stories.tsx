import React from "react"
import BandCard from "@components/band-card"
import TBACard from "@components/tba-card"
import { withPadding } from "../custom-decorators"
import { createfakeBand } from "@fakeData"

export default {
  title: "Components/BandCard",
  component: BandCard,
  decorators: [withPadding],
}

export const Base = () => <BandCard {...createfakeBand()} />
export const TBA = () => <TBACard />
export const TBAWithContact = () => <TBACard withContactHint />
