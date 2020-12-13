import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CWOModuleHeadline } from "@elements"
import Map from "@components/map"
import { PageModule } from "@elements"
import "twin.macro"

const Direction = () => {
  const data = useStaticQuery(directionQuery)
  const { location } = data.site.siteMetadata
  return (
    <PageModule tw="bg-gray-800">
      <div tw="container">
        <CWOModuleHeadline>Anfahrt</CWOModuleHeadline>
        <Map {...location} />
      </div>
    </PageModule>
  )
}

// Query
const directionQuery = graphql`
  {
    site {
      siteMetadata {
        location {
          googleRoutesLink
          latitude
          longitude
        }
      }
    }
  }
`
export default Direction
