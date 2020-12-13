import React from "react"
import { Link } from "gatsby"
import "twin.macro"

const Footer = () => {
  return (
    <footer tw="bg-black py-8 font-display">
      <div tw="container text-center sm:text-left sm:flex md:text-lg justify-between">
        <h2 tw="mb-2 sm:mb-0">
          &copy; 2020{" "}
          <a href="https://cwo-ev.de">Celtic Warriors Otzenhausen e.V.</a>
        </h2>
        <ul tw="flex justify-center sm:justify-end space-x-4">
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
