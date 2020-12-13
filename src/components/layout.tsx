import React from "react"
import Footer from "@modules/footer"
import { Global } from "@emotion/react"
import tw, { GlobalStyles, css } from "twin.macro"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Global styles={globalStyles} />
      {children}
      <Footer />
    </>
  )
}

// Global Styles
const globalStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`tracking-wider uppercase font-display`}
  }

  a {
    ${tw`transition-colors duration-150 ease-in-out hover:text-primary-400`}
  }

  ::-moz-selection {
    ${tw`bg-primary-600! text-white!`}
  }
  ::selection {
    ${tw`bg-primary-600! text-white!`}
  }

  body {
    ${tw`text-gray-100 bg-gray-900`}
  }
`

export default Layout
