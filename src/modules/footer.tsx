import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container flex justify-between">
        <h5>&copy; 2020 Celtic Warriors Otzenhausen e.V.</h5>
        <ul className="flex space-x-4">
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
