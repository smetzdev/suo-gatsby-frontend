import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MapGL, { Marker } from "react-map-gl"
import { Icon } from "@elements"

const MB_TOKEN =
  "pk.eyJ1IjoicmF1bTMiLCJhIjoiY2tjZ2M0aGZsMGU2bzJ4cXFra3V4eXR2byJ9.fvKF1OZIEg5pROjOdUENLA"

const Map = () => {
  // Get Static Data
  const data = useStaticQuery(graphql`
    query MapQuery {
      site {
        siteMetadata {
          location {
            latitude
            longitude
          }
        }
      }
    }
  `)
  const { latitude, longitude } = data.site.siteMetadata.location

  // Build Mapbox State
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "32rem",
    latitude: latitude,
    longitude: longitude,
    zoom: 16,
  })
  const updateViewPort = viewport => setViewport(viewport)

  return (
    <div>
      <MapGL
        {...viewport}
        onViewportChange={updateViewPort}
        mapboxApiAccessToken={MB_TOKEN}
      >
        <Marker latitude={latitude} longitude={longitude} offsetTop={-10}>
          <Icon
            name="sword"
            title="Hier"
            className="h-6 w-auto text-primary-500"
          />
        </Marker>
      </MapGL>
    </div>
  )
}

export default Map
