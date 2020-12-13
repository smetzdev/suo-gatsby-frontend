import React from "react"
import loadable from "@loadable/component"
import { CWOGrunged } from "@elements"
import { useStaticQuery, graphql } from "gatsby"
import { parse, format } from "date-fns"
import "twin.macro"

// Lazy Load Video
const Video = loadable(() => import("@components/video"))

const VideoHero = () => {
  // Get Static Data
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
    <header tw="relative h-64 bg-black lg:h-screen flex items-center justify-center">
      <Video />
      <h1 tw="z-10 max-w-lg p-8 text-4xl leading-none text-center sm:text-6xl">
        <span tw="relative">
          <CWOGrunged>{title}</CWOGrunged>
        </span>
        <span tw="hidden mt-2 text-lg sm:block text-primary-400">
          {bigDate} | {location.title}
        </span>
        <span tw="block mt-2 text-2xl leading-tight sm:hidden text-primary-400">
          {smallDate}
        </span>
      </h1>
    </header>
  )
}

export default VideoHero
