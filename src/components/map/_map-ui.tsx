import React from "react"
import { NavigationControl } from "react-map-gl"
import "twin.macro"

const MapUI = () => {
  return (
    <div tw="absolute top-0 left-0 mt-4 ml-4">
      <NavigationControl />
    </div>
  )
}

export default MapUI
