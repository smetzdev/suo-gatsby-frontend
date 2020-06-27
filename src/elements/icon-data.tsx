import React from "react"

const bandcampIconData = {
  defaultTitle: "Bandcamp",
  width: 24,
  height: 24,
  description: () => (
    <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" fill="currentColor" />
  ),
}

const clockIconData = {
  defaultTitle: "Clock",
  width: 512,
  height: 512,
  description: () => (
    <path
      d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z"
      fill="currentColor"
    />
  ),
}

const facebookIconData = {
  defaultTitle: "Facebook",
  width: 512,
  height: 512,
  description: () => (
    <path
      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221v-49.36c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42.02h62.12l-9.92 64.77h-52.2v156.53C398.1 461.85 480 369.18 480 257.35z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    />
  ),
}

const genreIconData = {
  defaultTitle: "Genre",
  width: 512,
  height: 512,
  description: () => (
    <path
      d="M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z"
      fill="currentColor"
    />
  ),
}

const globeIconData = {
  width: 512,
  height: 512,
  description: () => (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M256 48a208 208 0 100 416 208 208 0 000-416z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M256 48c-58 0-113 93-113 208s55 208 113 208 113-93 113-208S314 48 256 48z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M117 117a240 240 0 00277 0M395 395a240 240 0 00-277 0"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M256 48v416M464 256H48"
      />
    </>
  ),
}

const instagramIconData = {
  defaultTitle: "Instagram",
  width: 512,
  height: 512,
  description: () => (
    <>
      <path
        d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
        fill="currentColor"
      />
      <path
        d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
        fill="currentColor"
      />
    </>
  ),
}

const youtubeIconData = {
  defaultTitle: "YouTube",
  width: 512,
  height: 512,
  description: () => (
    <>
      <path
        d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"
        fill="currentColor"
      />
    </>
  ),
}

export const iconData = {
  bandcamp: bandcampIconData,
  clock: clockIconData,
  facebook: facebookIconData,
  genre: genreIconData,
  globe: globeIconData,
  instagram: instagramIconData,
  youtube: youtubeIconData,
}
