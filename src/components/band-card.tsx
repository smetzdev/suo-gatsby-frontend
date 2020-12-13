import React from "react"
import Img from "gatsby-image"
import { CWOIcon } from "@elements"
import { band } from "@customTypes"
import "twin.macro"

const getlinkIconTitle = (bandTitle: string, iconName: string): string => {
  const iconTitleMap = {
    instagram: `${bandTitle} auf Instagram`,
    bandcamp: `${bandTitle} auf Bandcamp`,
    youtube: `${bandTitle} auf YouTube`,
    facebook: `${bandTitle} auf Facebook`,
    spotify: `${bandTitle} auf Spotify`,
    globe: `Website von ${bandTitle}`,
  }
  return iconTitleMap[iconName]
}

const BandCard: React.FC<band> = ({
  title,
  bandImage,
  genre,
  stage,
  startTime,
  endTime,
  links,
}) => {
  return (
    <article tw="relative max-w-lg inline-block rounded-md overflow-hidden bg-gray-800">
      <Img
        tw="object-cover object-center w-full h-64"
        fluid={bandImage.childImageSharp.fluid}
        alt={title}
      />
      <div tw="p-5 text-lg">
        <h3 tw="mb-2 text-2xl leading-none md:text-3xl text-primary-400">
          {title}
        </h3>
        <p>
          <CWOIcon
            name="genre"
            tw="inline-block w-auto h-4 mr-2 text-gray-600"
          />
          {genre}
        </p>
        <p>
          <CWOIcon
            name="clock"
            tw="inline-block w-auto h-4 mr-2 text-gray-600"
          />
          {startTime} – {endTime} Uhr / {stage}
        </p>
        {links.length > 0 && (
          <>
            <hr tw="mt-6 mb-4 border-gray-600" />
            <ul tw="flex items-center space-x-3 text-gray-300">
              {links.map((link, key) => (
                <li key={key}>
                  <a target="_blank" rel="noreferrer noopener" href={link.href}>
                    <CWOIcon
                      tw="w-auto h-6"
                      name={link.iconName}
                      title={getlinkIconTitle(title, link.iconName)}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  )
}

export default BandCard
