import React from "react"
import { CWOIcon, iconData } from "@elements"
import { withPadding } from "../custom-decorators"
import tw from "twin.macro"

const allIconNames = Object.keys(iconData)

export default {
  title: "CWO-Elements/Icon",
  component: CWOIcon,
  decorators: [withPadding],
}

export const AllIcons = () => (
  <div tw="grid grid-cols-4 gap-4">
    {allIconNames.map(name => (
      <article tw="flex flex-col items-center p-5 bg-gray-800 rounded-md">
        <CWOIcon css={tw`w-auto h-16`} name={name} />
        <p>{name}</p>
      </article>
    ))}
  </div>
)
