import React from "react"
import { iconData } from "./icon-data"
import "twin.macro"

interface iconProps {
  name: string
  title?: string
}

export const CWOIcon: React.FC<iconProps> = ({ name, title, ...props }) => {
  const { defaultTitle, width, height, description } = iconData[name]
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <title>{title || defaultTitle}</title>
      {description()}
    </svg>
  )
}
