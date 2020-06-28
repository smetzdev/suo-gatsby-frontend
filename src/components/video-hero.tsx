import React from "react"
import DummyVideo from "../videos/dummy-video.mp4"

const VideoHero = () => {
  return (
    <header className="relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="min-h-screen object-cover object-center opacity-25"
        src={DummyVideo}
      ></video>

      <h1 className="text-4xl absolute-center text-center inline-block bg-grungy-primary bg-contain p-8 lg:text-6xl leading-none rounded-md max-w-lg">
        Schlacht um Otzenhausen
        <span className="hidden lg:block text-lg text-primary-400 mt-2">
          07 November 2020 | Hunnenringhalle
        </span>
        <span className="text-sm block lg:hidden text-primary-400 leading-tight mt-2">
          07 November 2020
          <br />
          Hunnenringhalle
        </span>
      </h1>
    </header>
  )
}

export default VideoHero