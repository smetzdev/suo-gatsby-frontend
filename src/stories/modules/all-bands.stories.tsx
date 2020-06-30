import React from "react"
import AllBands from "@modules/all-bands"
import { useFakeBands } from "@fakeData"

export default {
  title: "Modules/AllBands",
  component: AllBands,
}

export const FullLineup = () => {
  const fakeBands = useFakeBands(12, 12)
  console.log(fakeBands)
  return <AllBands bands={fakeBands} />
}
export const randomLineup = () => {
  const fakeBands = useFakeBands()
  return <AllBands bands={fakeBands} />
}
export const EmptyLineup = () => <AllBands bands={[]} />
