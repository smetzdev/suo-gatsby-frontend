import React from "react"
import { Grunged } from "@elements"
import { withClassName } from "@customTypes"

export const ModuleHeadline: React.FC<withClassName> = ({
  children,
  className = "",
}) => {
  return (
    <h2
      className={`text-4xl md:text-6xl mb-8 flex items-center module-headline leading-none ${className}`}
    >
      <span className="inline-block px-12 relative">
        <Grunged>{children}</Grunged>
      </span>
    </h2>
  )
}
