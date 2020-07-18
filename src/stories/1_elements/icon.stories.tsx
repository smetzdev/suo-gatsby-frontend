import React from "react"
import { Icon, iconData } from "@elements"
import { withPadding } from "../custom-decorators"

const allIconNames = Object.keys(iconData)

export default {
  title: "Elements/Icon",
  component: Icon,
  decorators: [withPadding],
}

export const AllIcons = () => (
  <div className="grid grid-cols-4 gap-4">
    {allIconNames.map(name => (
      <article className="p-5 flex flex-col rounded-md bg-gray-800 items-center">
        <Icon className="h-16 w-auto" name={name} />
        <p>{name}</p>
      </article>
    ))}
  </div>
)
