import React from "react"
import Footer from "@modules/footer"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
