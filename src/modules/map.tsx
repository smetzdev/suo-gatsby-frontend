import React from "react"
import { ModuleHeadline } from "@elements"
import ResponsiveEmbed from "react-responsive-embed"

const Map = () => {
  return (
    <section className="page-module bg-gray-800">
      <div className="container">
        <ModuleHeadline>Anfahrt</ModuleHeadline>
        <ResponsiveEmbed
          title="Anfahrt Schlacht um Otzenhausen"
          width="640"
          height="480"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.611555483992!2d6.993150915700983!3d49.60507427936776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c977a515cdc0c51!2sHunnenringhalle%20Otzenhausen!5e0!3m2!1sde!2sde!4v1593351323841!5m2!1sde!2sde"
        />
      </div>
    </section>
  )
}

export default Map
