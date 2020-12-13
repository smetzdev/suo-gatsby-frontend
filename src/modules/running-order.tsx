import React from "react"
import { CWOIcon } from "@elements"
import tw, { styled, theme } from "twin.macro"

const RunningOrder = () => {
  return (
    <StyledRunningOrder
      target="_blank"
      title="Download Running Order"
      rel="noreferrer noopener"
      href="/downloads/running-order.pdf"
    >
      <CWOIcon
        name="download"
        css={tw`inline-block w-auto h-4 mr-1 transform -translate-y-1 lg:h-6 lg:mr-2`}
      />
      Running Order
    </StyledRunningOrder>
  )
}

const StyledRunningOrder = styled.a`
  ${tw`fixed top-0 right-0 z-40 mt-4 mr-4 text-sm tracking-widest font-display lg:mt-6 lg:mr-6 lg:text-xl`}
  text-shadow: 0px 0px 5px ${theme`colors.primary.500`};
`

export default RunningOrder
