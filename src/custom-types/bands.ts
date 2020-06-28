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
  bandImagePath: string
  genre: string
  startTime: string
  endTime: string
  stage: string
  links: bandLink[]
}
