import React from "react"
import loadable from "@loadable/component"
import { CWOGrunged } from "@smetzdev/gatsby-theme-cwo/elements"
import { useStaticQuery, graphql } from "gatsby"
import { parse, format } from "date-fns"

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
    <header className="relative h-64 bg-black lg:h-screen">
      <Video />
      <h1 className="text-4xl absolute-center text-center inline-block p-8 sm:text-6xl leading-none rounded-md max-w-lg">
        <span className="relative">
          <CWOGrunged>{title}</CWOGrunged>
        </span>
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
