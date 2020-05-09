import React from "react"
import BandCard from "../../src/components/band-card"
import TBACard from "../../src/components/tba-card"
import { withPadding } from "../custom-decorators"

export default {
  title: "Components/BandCard",
  component: BandCard,
  decorators: [withPadding],
}

export const Base = () => <BandCard />
export const TBA = () => <TBACard />
export const TBAWithContact = () => <TBACard withContactHint />
