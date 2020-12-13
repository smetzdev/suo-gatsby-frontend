import React from "react"
import BandCard from "@components/band-card"
import { CWOModuleHeadline } from "@elements"
import { band } from "@customTypes"
import { PageModule } from "@elements"
import "twin.macro"

interface allBandsProps {
  bands: band[]
}

const AllBands: React.FC<allBandsProps> = ({ bands }) => {
  return (
    <PageModule tw="container">
      <CWOModuleHeadline>Bands</CWOModuleHeadline>
      <div tw="grid items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {bands.map((band, key) => (
          <BandCard key={key} {...band} />
        ))}
      </div>
    </PageModule>
  )
}

export default AllBands
