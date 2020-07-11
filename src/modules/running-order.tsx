import React from "react"
import { Icon } from "@elements"

const RunningOrder = () => {
  return (
    <a
      className="text-sm text-shadow tracking-widest font-display fixed top-0 right-0 mt-4 mr-4 z-40 lg:mt-6 lg:mr-6 lg:text-xl"
      target="_blank"
      title="Download Running Order"
      rel="noreferrer noopener"
      href="/running-order.pdf"
    >
      <Icon
        name="download"
        className="h-4 w-auto inline-block mr-1 transform -translate-y-1 lg:h-6 lg:mr-2"
      />
      Running Order
    </a>
  )
}

export default RunningOrder
