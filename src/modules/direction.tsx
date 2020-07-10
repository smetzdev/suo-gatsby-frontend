import React, { useState } from "react"
import { ModuleHeadline } from "@elements"
import Map from "@components/map"

const MB_TOKEN =
  "pk.eyJ1IjoicmF1bTMiLCJhIjoiY2tjZ2M0aGZsMGU2bzJ4cXFra3V4eXR2byJ9.fvKF1OZIEg5pROjOdUENLA"

const Direction = () => {
  return (
    <section className="page-module bg-gray-800">
      <div className="container">
        <ModuleHeadline>Anfahrt</ModuleHeadline>
        <Map />
      </div>
    </section>
  )
}

export default Direction
