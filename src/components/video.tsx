import React from "react"
import TimelapseVideoHigh from "../videos/timelapse-720p.mp4"
import "twin.macro"

const Video = () => {
  return window.outerWidth >= 1024 ? (
    <video
      autoPlay
      muted
      loop
      tw="absolute inset-0 hidden object-cover object-center w-full h-full lg:block lg:h-screen"
      src={TimelapseVideoHigh}
    ></video>
  ) : null
}

export default Video
