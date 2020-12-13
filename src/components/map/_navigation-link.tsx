import React from "react"
import { CWOIcon } from "@elements"
import "twin.macro"

interface navigationLinkProps {
  link: string
}

const NavigationLink: React.FC<navigationLinkProps> = ({ link }) => {
  return (
    <a
      target="_blank"
      href={link}
      rel="noopener noreferrer"
      title="Ziel mit Google finden"
      tw="absolute top-0 right-0 mt-4 mr-4"
    >
      <CWOIcon
        name="navigate"
        title="Ziel mit Google finden"
        tw="w-auto h-6 md:h-8"
      />
    </a>
  )
}

export default NavigationLink
