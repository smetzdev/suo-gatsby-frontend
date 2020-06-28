import React from "react"
import BandCard from "@components/band-card"
import { band } from "@customTypes"

interface allBandsProps {
  bands: band[]
}

const AllBands: React.FC<allBandsProps> = ({ bands }) => {
  return (
    <section className="page-module container grid grid-cols-3 gap-10 items-stretch">
      {bands.map((band, key) => (
        <BandCard key={key} {...band} />
      ))}
    </section>
  )
}

export default AllBands
