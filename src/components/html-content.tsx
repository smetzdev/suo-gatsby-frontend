import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const HTMLContent: React.FC<{ content: string }> = ({ content }) => {
  return (
    <>
      <section className="container">
        <Link
          to="/"
          className="font-display text-4xl text-primary-300 underline py-5 inline-block"
        >
          &larr;Zurück zur Startseite
        </Link>
      </section>
      <section
        className="container html-content pb-12"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

HTMLContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default HTMLContent
