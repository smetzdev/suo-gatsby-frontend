import React from "react"
import BandCard from "@components/band-card"
import { CWOModuleHeadline } from "@smetzdev/gatsby-theme-cwo/elements"
import { band } from "@customTypes"

interface allBandsProps {
  bands: band[]
}

const AllBands: React.FC<allBandsProps> = ({ bands }) => {
  return (
    <section className="cwo-page-module container">
      <CWOModuleHeadline>Bands</CWOModuleHeadline>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
        {bands.map((band, key) => (
          <BandCard key={key} {...band} />
        ))}
      </div>
    </section>
  )
}

export default AllBands
