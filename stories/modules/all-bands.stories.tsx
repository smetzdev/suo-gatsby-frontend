import React from "react"
import AllBands from "@modules/all-bands"
import { randomAmountOfFakeBands, twelveFakeBands } from "@fakeData"

export default {
  title: "Modules/AllBands",
  component: AllBands,
}

export const FullLineup = () => <AllBands bands={twelveFakeBands} />
export const randomLineup = () => <AllBands bands={randomAmountOfFakeBands} />
export const EmptyLineup = () => <AllBands bands={[]} />
