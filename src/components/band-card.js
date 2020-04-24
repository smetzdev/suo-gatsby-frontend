import React from "react"
import BandImageDummy from "../images/band-image-dummy.jpg"
import BandLogoDummy from "../images/band-logo-dummy.png"

const BandCard = () => {
  return (
    <a
      href="#"
      className="relative max-w-md border-2 border-primary-800 inline-block"
      target="_blank"
    >
      <img src={BandImageDummy} alt="The Band Bandtitle" />
      <h3 className="absolute bottom-0 inset-x-0 w-100 flex justify-center pb-3">
        <img src={BandLogoDummy} alt="Bandtitle" className="w-3/4" />
      </h3>
    </a>
  )
}

export default BandCard
