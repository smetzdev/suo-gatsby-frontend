import React, { useState, useLayoutEffect } from "react"
import ReactMapGL from "react-map-gl"
import Marker from "./_marker"
import MapUI from "./_map-ui"
import NavigationLink from "./_navigation-link"

// Mapbox Access Token
const MB_TOKEN =
  "pk.eyJ1IjoicmF1bTMiLCJhIjoiY2sxOTd6ZjV6MXRhcTNjcWozdm0yN3h1dyJ9.bbSD0f_tVSX-_hXocn2HIg"

interface mapProps {
  latitude: number
  longitude: number
  googleRoutesLink?: string
}

const Map: React.FC<mapProps> = ({ latitude, longitude, googleRoutesLink }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: latitude,
    longitude: longitude,
    zoom: 12,
  })
  const settings = {
    scrollZoom: false,
  }
  const updateViewport = viewport => setViewport(viewport)

  // Make Map responsive
  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    window.addEventListener("resize", () => setViewport(viewport))
  }, [])

  return (
    <div className="w-full h-80 md:h-96 lg:h-128 rounded-lg overflow-hidden">
      <ReactMapGL
        {...viewport}
        {...settings}
        onViewportChange={updateViewport}
        mapStyle="mapbox://styles/raum3/ckcrduwrn0rm81iqhliytbbkp"
        mapboxApiAccessToken={MB_TOKEN}
      >
        <MapUI />
        <Marker latitude={latitude} longitude={longitude} />
        {googleRoutesLink && <NavigationLink link={googleRoutesLink} />}
      </ReactMapGL>
    </div>
  )
}

export default Map
