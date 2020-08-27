import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CWOModuleHeadline } from "@smetzdev/gatsby-theme-cwo/elements"
import Map from "@components/map"

const Direction = () => {
  const data = useStaticQuery(graphql`
    query Location {
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
  `)
  const { location } = data.site.siteMetadata
  return (
    <section className="cwo-page-module bg-gray-800">
      <div className="container">
        <CWOModuleHeadline>Anfahrt</CWOModuleHeadline>
        <Map {...location} />
      </div>
    </section>
  )
}

export default Direction
