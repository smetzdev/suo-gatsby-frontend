import React from "react"
import TimelapseVideoHigh from "../videos/timelapse-720p.mp4"

const Video = () => {
  return window.outerWidth >= 1024 ? (
    <video
      autoPlay
      muted
      loop
      className="hidden lg:block lg:h-screen object-cover w-full object-center"
      src={TimelapseVideoHigh}
    ></video>
  ) : null
}

export default Video
