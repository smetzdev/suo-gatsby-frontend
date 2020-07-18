import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ModuleHeadline } from "@elements"
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
    <section className="page-module bg-gray-800">
      <div className="container">
        <ModuleHeadline>Anfahrt</ModuleHeadline>
        <Map {...location} />
      </div>
    </section>
  )
}

export default Direction
