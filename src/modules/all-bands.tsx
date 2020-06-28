import React from "react"
import BandCard from "@components/band-card"
import { ModuleHeadline } from "@elements"
import { band } from "@customTypes"

interface allBandsProps {
  bands: band[]
}

const AllBands: React.FC<allBandsProps> = ({ bands }) => {
  return (
    <section className="page-module container">
      <ModuleHeadline>Bands</ModuleHeadline>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
        {bands.map((band, key) => (
          <BandCard key={key} {...band} />
        ))}
      </div>
    </section>
  )
}

export default AllBands
