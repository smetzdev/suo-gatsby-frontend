import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import "twin.macro"

const HTMLContent: React.FC<{ content: string }> = ({ content }) => {
  return (
    <>
      <section tw="container prose lg:prose-xl pt-4 pb-8">
        <Link to="/" tw="font-display">
          &larr;Zurück zur Startseite
        </Link>
      </section>
      <section
        tw="container prose lg:prose-xl pb-12"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

HTMLContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default HTMLContent
