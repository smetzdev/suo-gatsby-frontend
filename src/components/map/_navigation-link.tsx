import React from "react"
import { Icon } from "@elements"

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
      className="absolute top-0 right-0 mt-4 mr-4"
    >
      <Icon
        name="navigate"
        title="Ziel mit Google finden"
        className="h-6 md:h-8 w-auto"
      />
    </a>
  )
}

export default NavigationLink
