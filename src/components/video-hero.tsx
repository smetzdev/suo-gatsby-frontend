import React, { useLayoutEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import TimelapseVideoHigh from "../videos/timelapse-720p.mp4"
import { parse, format } from "date-fns"

const useVideoURL = () => {
  const [videoURL, setVideoURL] = useState("")
  // Check if video should be loaded and then set videoURL
  const checkVideo = () => {
    if (window.outerWidth > 1024 && videoURL === "") {
      setVideoURL(TimelapseVideoHigh)
    }
  }

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    // Check initially
    checkVideo()

    // Check on resize if video isnt set yet
    if (videoURL === "") window.addEventListener("resize", checkVideo)
  }, [])
  return videoURL
}

const VideoHero = () => {
  // Get Static Data + VideoURL
  const videoURL = useVideoURL()
  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          title
          date
          location {
            title
          }
        }
      }
    }
  `)
  const { title, date, location } = data.site.siteMetadata

  // Build date formats
  const parsedDate = parse(date, "dd.MM.yyyy", new Date())
  const smallDate = format(parsedDate, "dd.MM.yyyy")
  const bigDate = format(parsedDate, "dd MMMM yyyy")

  return (
    <header className="relative h-64 bg-black lg:h-auto">
      <video
        autoPlay
        muted
        loop
        className="hidden lg:block min-h-screen object-cover w-full object-center"
        src={videoURL}
      ></video>

      <h1 className="text-4xl absolute-center text-center inline-block bg-grungy-primary bg-contain p-8 sm:text-6xl leading-none rounded-md max-w-lg">
        {title}
        <span className="hidden sm:block text-lg text-primary-400 mt-2">
          {bigDate} | {location.title}
        </span>
        <span className="text-2xl block sm:hidden text-primary-400 leading-tight mt-2">
          {smallDate}
        </span>
      </h1>
    </header>
  )
}

export default VideoHero
