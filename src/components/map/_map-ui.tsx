import React from "react"
import { NavigationControl } from "react-map-gl"

const MapUI = () => {
  return (
    <div className="absolute top-0 left-0 mt-4 ml-4">
      <NavigationControl />
    </div>
  )
}

export default MapUI
