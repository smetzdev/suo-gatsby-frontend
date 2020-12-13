import React from "react"
import { CWOGrunged } from "./cwo-grunged"
import tw, { styled } from "twin.macro"

export const CWOModuleHeadline: React.FC = ({ children, ...props }) => {
  return (
    <StyledCWOModuleHeadline
      tw="mb-8 text-4xl leading-none md:text-6xl"
      {...props}
    >
      <span tw="relative inline-block px-12">
        <CWOGrunged>{children}</CWOGrunged>
      </span>
    </StyledCWOModuleHeadline>
  )
}

const StyledCWOModuleHeadline = styled.h2`
  ${tw`flex items-center justify-center`}
  &::before, &::after {
    content: "";
    ${tw`flex-1 h-px bg-gray-700 bg-repeat-x`}
  }
  &::before {
    ${tw`mr-4`}
  }
  &::after {
    ${tw`ml-4`}
  }
`
