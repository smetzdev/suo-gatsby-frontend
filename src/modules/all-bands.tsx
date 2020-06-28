import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BandCard from "@components/band-card"
import { ModuleHeadline } from "@elements"
import { band } from "@customTypes"

const useBands = (): band[] => {
  const data = useStaticQuery(graphql`
    query BandQuery {
      allBandsYaml(sort: { order: ASC, fields: title }) {
        nodes {
          title
          genre
          bandImageFluid: bandImagePath {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          startTime
          endTime
          stage
          links {
            iconName
            href
          }
        }
      }
    }
  `)

  return data.allBandsYaml.nodes
}

const AllBands: React.FC = () => {
  const bands = useBands()
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
