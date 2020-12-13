import React from "react"
import "twin.macro"

export const withPadding = storyFn => <div tw="p-5">{storyFn()}</div>
