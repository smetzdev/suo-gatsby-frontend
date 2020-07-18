import React from "react"
import Map from "@components/map"

export default {
  title: "Components/Map",
  component: Map,
}

export const Base = () => (
  <Map
    googleRoutesLink="http://google.de"
    latitude={49.605026}
    longitude={6.99529}
  />
)
