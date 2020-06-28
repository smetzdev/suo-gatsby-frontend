import { GatsbyGraphQLObjectType } from "gatsby"
import GatsbyImage, { GatsbyImageProps } from "gatsby-image"

export type bandLinkIconName =
  | "instagram"
  | "bandcamp"
  | "youtube"
  | "facebook"
  | "globe"
  | "spotify"

export interface bandLink {
  href: string
  iconName: string
}

export interface band {
  title: string
  bandImagePath?: string
  bandImageFluid?: any
  genre: string
  startTime: string
  endTime: string
  stage: string
  links: bandLink[]
}
