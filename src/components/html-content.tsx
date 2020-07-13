import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const HTMLContent: React.FC<{ content: string }> = ({ content }) => {
  return (
    <>
      <section className="container prose lg:prose-xl pt-4 pb-8">
        <Link to="/" className="font-display">
          &larr;Zurück zur Startseite
        </Link>
      </section>
      <section
        className="container prose lg:prose-xl pb-12"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

HTMLContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default HTMLContent
