export type bandLinkIconName =
  | "instagram"
  | "bandcamp"
  | "youtube"
  | "globe"
  | "facebook"

export type bandStage = "MainStage" | "ClubStage"

export interface bandLink {
  href: string
  iconName: bandLinkIconName
}

export interface band {
  title: string
  genre: string
  stage?: bandStage
  links: bandLink[]
}
