import PropTypes from "prop-types"
import React from "react"

const TBABand = ({ withContactHint }) => {
  return (
    <article className="border border-gray-600 border-dashed inline-block p-24 rounded-lg text-center">
      {withContactHint ? (
        <>
          <p className="text-3xl text-gray-500 mb-2">
            <span className="font-display">Deine Band</span>?
          </p>
          <a className="btn" href="mailto:vorstand@cwo-ev.de">
            Jetzt bewerben
          </a>
        </>
      ) : (
        <p className="text-3xl text-gray-500">T.B.A.</p>
      )}
    </article>
  )
}

TBABand.propTypes = {
  withContactHint: PropTypes.bool,
}

export default TBABand
