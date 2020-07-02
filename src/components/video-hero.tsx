import React, { useLayoutEffect, useState } from "react"
import TimelapseVideoHigh from "../videos/timelapse-720p.mp4"

const VideoHero = () => {
  return (
    <header className="relative h-64 bg-black lg:h-auto">
      <div className="hidden lg:block">
        <video
          autoPlay
          muted
          loop
          className="min-h-screen object-cover w-full object-center"
          src={TimelapseVideoHigh}
        ></video>
      </div>
      <h1 className="text-4xl absolute-center text-center inline-block bg-grungy-primary bg-contain p-8 sm:text-6xl leading-none rounded-md max-w-lg">
        Schlacht um Otzenhausen
        <span className="hidden sm:block text-lg text-primary-400 mt-2">
          07 November 2020 | Hunnenringhalle
        </span>
        <span className="text-2xl block sm:hidden text-primary-400 leading-tight mt-2">
          07.11.2020
        </span>
      </h1>
    </header>
  )
}

export default VideoHero
