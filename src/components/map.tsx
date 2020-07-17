import React from "react"
import ResponsiveEmbed from "react-responsive-embed"

const Map = () => {
  return (
    <ResponsiveEmbed
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.611555484001!2d6.99315091599546!3d49.6050742793676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47959061a7d8853d%3A0x3c977a515cdc0c51!2sHunnenringhalle%20Otzenhausen!5e0!3m2!1sde!2sde!4v1594463333526!5m2!1sde!2sde"
      width="600"
      height="450"
      frameBorder="0"
      allowFullScreen
      title="Anfahrt - Hunnenringhalle, Otzenhausen"
    />
  )
}

export default Map
