import React from "react"
import { withClassName } from "@customTypes"

export const ModuleHeadline: React.FC<withClassName> = ({
  children,
  className = "",
}) => {
  return (
    <h2
      className={`text-6xl mb-8 flex items-center module-headline leading-none bg-grungy-light bg-contain bg-center bg-no-repeat ${className}`}
    >
      <span className="bg-grungy-primary bg-cover inline-block px-12">
        {children}
      </span>
    </h2>
  )
}
