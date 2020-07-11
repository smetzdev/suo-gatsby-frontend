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

const downloadIconData = {
  defaultTitle: "Download",
  width: 512,
  height: 512,
  description: () => (
    <path
      d="M376 160H272v153.37l52.69-52.68a16 16 0 0122.62 22.62l-80 80a16 16 0 01-22.62 0l-80-80a16 16 0 0122.62-22.62L240 313.37V160H136a56.06 56.06 0 00-56 56v208a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V216a56.06 56.06 0 00-56-56zM272 48a16 16 0 00-32 0v112h32z"
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
  defaultTitle: "Globe",
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

const infoIconData = {
  defaultTitle: "Info",
  width: 512,
  height: 512,
  description: () => (
    <path
      d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"
      fill="currentColor"
    />
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

const spotifyIconData = {
  defaultTitle: "Spotify",
  width: 24,
  height: 24,
  description: () => (
    <path
      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
      fill="currentColor"
    />
  ),
}

const swordIconData = {
  defaultTitle: "Sword",
  width: 512,
  height: 512,
  description: () => (
    <>
      <path
        d="M271.05 177.19v30.66c0 8.28-6.74 15-15.05 15s-15.05-6.72-15.05-15v-30.66h-44.87l13.04 178.44h93.76l13.04-178.44zM327.36 117.19h-40.21L279.09 30h11.92c8.3 0 15.05-6.72 15.05-15S299.32 0 291 0h-70.02c-8.31 0-15.05 6.72-15.05 15s6.74 15 15.05 15h11.92l-8.06 87.19h-40.21c-8.32 0-15.05 6.71-15.05 15s6.73 15 15.05 15h142.72c8.31 0 15.05-6.72 15.05-15 0-8.29-6.74-15-15.05-15z"
        fill="currentColor"
      />
      <path
        d="M389.09 374.9l13.06 18.68h31.35v-11.04c0-3.07-.94-6.06-2.7-8.58l-37.99-54.3a15.07 15.07 0 00-12.34-6.42h-44.3l-3.1 42.4h18.98c14.75 0 28.6 7.2 37.04 19.26zM175.84 313.24h-44.3c-4.93 0-9.54 2.4-12.35 6.42l-37.99 54.3a14.97 14.97 0 00-2.7 8.58v11.04h31.35l13.07-18.68a45.22 45.22 0 0137.04-19.27h18.98z"
        fill="currentColor"
      />
      <path
        d="M425.48 441.06V512H512l-31.87-79.02a15.05 15.05 0 00-13.96-9.4h-44.24a44.68 44.68 0 013.55 17.48zM86.52 441.06c0-6.07 1.22-11.98 3.55-17.48H45.83a15.05 15.05 0 00-13.96 9.4L0 512h86.52z"
        fill="currentColor"
      />
      <path
        d="M352.05 385.63h-192.1c-4.92 0-9.53 2.4-12.34 6.43l-28.28 40.43a14.96 14.96 0 00-2.7 8.57V512h278.75v-70.94c0-3.07-.95-6.06-2.7-8.58l-28.29-40.42a15.07 15.07 0 00-12.34-6.43z"
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
  download: downloadIconData,
  facebook: facebookIconData,
  genre: genreIconData,
  globe: globeIconData,
  info: infoIconData,
  instagram: instagramIconData,
  spotify: spotifyIconData,
  sword: swordIconData,
  youtube: youtubeIconData,
}
