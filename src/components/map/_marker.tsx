import React from "react"
import { Marker as ReactMapGLMarker } from "react-map-gl"
import { CWOIcon } from "@elements"
import "twin.macro"

interface markerProps {
  latitude: number
  longitude: number
}

const Marker: React.FC<markerProps> = ({ latitude, longitude }) => {
  return (
    <ReactMapGLMarker
      offsetTop={-20}
      offsetLeft={-10}
      latitude={latitude}
      longitude={longitude}
    >
      <CWOIcon name="pin" tw="h-6 w-auto text-primary-600" />
    </ReactMapGLMarker>
  )
}

export default Marker
