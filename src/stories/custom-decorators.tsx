import React from "react"
import "twin.macro"
import { Global } from "@emotion/react"
import { GlobalStyles } from "twin.macro"
import { globalStyles } from "@components/layout"

export const withPadding = storyFn => <div tw="p-5">{storyFn()}</div>

export const withGlobalStyles = storyFn => (
  <>
    <GlobalStyles />
    <Global styles={globalStyles} />
    {storyFn()}
  </>
)
