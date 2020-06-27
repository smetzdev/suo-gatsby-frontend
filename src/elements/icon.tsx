import React from "react"
import { iconData } from "./icon-data"
import { withClassName } from "@customTypes"

interface iconProps extends withClassName {
  name: string
  title?: string
}

export const Icon: React.FC<iconProps> = ({ className, name, title }) => {
  const { defaultTitle, width, height, description } = iconData[name]
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <title>{title || defaultTitle}</title>
      {description()}
    </svg>
  )
}
