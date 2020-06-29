import React from "react"
import Img from "gatsby-image"
import { Icon } from "@elements"
import { band } from "@customTypes"

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
  bandImagePath,
  bandImageFluid,
  genre,
  stage,
  startTime,
  endTime,
  links,
}) => {
  return (
    <article
      className={`relative max-w-lg inline-block rounded-md overflow-hidden bg-gray-800`}
    >
      {bandImageFluid ? (
        <Img
          className="h-64 w-full object-cover object-center"
          fluid={bandImageFluid.childImageSharp.fluid}
          alt={title}
        />
      ) : (
        <img
          className="h-64 w-full object-cover object-center"
          src={bandImagePath}
          alt={title}
        />
      )}
      <div className="p-5 text-lg">
        <h3 className="text-2xl md:text-3xl text-primary-400 leading-none mb-2">
          {title}
        </h3>
        <p>
          <Icon
            name="genre"
            className="h-4 w-auto inline-block mr-2 text-gray-600"
          />
          {genre}
        </p>
        <p>
          <Icon
            name="clock"
            className="h-4 w-auto inline-block mr-2 text-gray-600"
          />
          {startTime} – {endTime} // {stage}
        </p>
        {links.length > 0 && (
          <>
            <hr className="mt-6 mb-4 border-gray-600" />
            <ul className="flex space-x-3 items-center text-gray-300">
              {links.map((link, key) => (
                <li key={key}>
                  <a target="_blank" rel="noreferrer noopener" href={link.href}>
                    <Icon
                      className="h-6 w-auto"
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
